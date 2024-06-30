import { useState, useEffect } from "react";
import axios from "axios";
import { Product, Sku } from "../utils/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await axios.get(
          "http://localhost:3000/api/products"
        );

        if (productsResponse.status === 200) {
          const productsData: Product[] = productsResponse.data.map(
            (product: Product) => ({
              ...product,
              skus: product.skus.map((sku: Sku) => ({
                ...sku,
                stock: 0,
                code: sku.code,
              })),
            })
          );
          setProducts(productsData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const updatedProducts: Product[] = [];

        for (const product of products) {
          const updatedSkus: Sku[] = [];

          for (const sku of product.skus) {
            const stockPriceResponse = await axios.get(
              `http://localhost:3000/api/stock-price/${sku.code}`
            );

            if (stockPriceResponse.status === 200) {
              updatedSkus.push({
                ...sku,
                price: stockPriceResponse.data.price,
                stock: stockPriceResponse.data.stock,
              });
            } else {
              console.log(`Product not found for SKU ${sku.code}`);
            }
          }

          updatedProducts.push({
            ...product,
            skus: updatedSkus,
          });
        }

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Failed to fetch stock and price:", error);
      }
    };

    const interval = setInterval(fetchStockPrices, 5000);

    return () => clearInterval(interval);
  }, [products]);

  return { products, loading, error };
};

export default useFetchProducts;

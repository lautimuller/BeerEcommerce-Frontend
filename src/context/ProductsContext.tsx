import React, { createContext, useContext, ReactNode } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import { Product } from '../utils/types';

interface ProductsContextProps {
  products: Product[];
  loading: boolean;
  error: any;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const { products, loading, error } = useFetchProducts();

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

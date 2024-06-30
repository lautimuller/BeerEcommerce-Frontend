import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { colors } from "../styles/colors";
import { StatefulWrapper } from "../components/StatefulWrapper/StatefulWrapper";
import { Typography } from "../components/Typography/Typography";
import Button from "../components/Buttons/Button";
import PurchasesCircle from "../assets/icons/PurchasesCircle";
import { useProducts } from "../context/ProductsContext";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../utils/navigationTypes";
import images, { getFirstWithStock } from "../utils/utils";
import SizeOption from "../components/Buttons/SizeOption";
import { Sku } from "../utils/types";

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

const ProductScreen: React.FC = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const { productId } = route.params;
  const { products } = useProducts();
  const [expanded, setExpanded] = useState(false);

  const product = products.find((p) => p.id === productId);

  const [selectedSize, setSelectedSize] = useState<Sku | undefined>(
    getFirstWithStock(product?.skus)
  );

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSizeSelect = (size: Sku) => {
    setSelectedSize(size);
  };

  const imageSource = product?.image
    ? images[product?.image]
    : require("../assets/images/notfound.jpg");

  return (
    <StatefulWrapper loading={false}>
      <View style={styles.imgView}>
        <Image source={imageSource} style={styles.img} resizeMode="contain" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.descriptionView}>
          <View style={styles.titleView}>
            <Typography.Title>{product?.brand}</Typography.Title>
            <Typography.Title style={styles.price}>
              ${selectedSize?.price}
            </Typography.Title>
          </View>
          <View style={styles.subtitleView}>
            <Typography.Label style={styles.prop}>Origin:</Typography.Label>
            <Typography.Label>{product?.origin}</Typography.Label>
            <Typography.Label style={{ marginHorizontal: 8 }}>
              |
            </Typography.Label>
            <Typography.Label style={styles.prop}>Stock:</Typography.Label>
            <Typography.Label>{selectedSize?.stock}</Typography.Label>
          </View>
          <View>
            <Typography.Paragraph style={styles.descriptionText}>
              Description
            </Typography.Paragraph>
            <Typography.Label style={styles.descProduct}>
              {expanded ||
              !product?.information ||
              product.information.length <= 210
                ? product?.information
                : `${product?.information.slice(0, 210)}...`}
            </Typography.Label>
            {product?.information && product.information.length > 210 && (
              <TouchableOpacity onPress={toggleExpand}>
                <Typography.Label style={styles.readMore}>
                  {expanded ? "Read less" : "Read more"}
                </Typography.Label>
              </TouchableOpacity>
            )}
            <Typography.Paragraph style={styles.sizeTitle}>
              Size
            </Typography.Paragraph>
            <FlatList
              data={product?.skus}
              renderItem={({ item }) => (
                <SizeOption
                  sku={item}
                  isSelected={selectedSize === item}
                  onPress={() => handleSizeSelect(item)}
                />
              )}
              keyExtractor={(item) => item.name}
              horizontal
              contentContainerStyle={styles.sizeOptions}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={() => {}}>
                <PurchasesCircle />
              </TouchableOpacity>
              <Button
                title="Add to card"
                onPress={() => alert("Added to cart")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </StatefulWrapper>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 44,
    backgroundColor: colors.background,
  },
  imgView: {
    height: 240,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  img: { height: 240 },
  descriptionView: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 44,
    backgroundColor: colors.white,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: { color: colors.orange },
  subtitleView: { flexDirection: "row", marginTop: 6, marginBottom: 32 },
  prop: { marginRight: 6 },
  descriptionText: { fontWeight: "700", color: colors.black, marginBottom: 8 },
  sizeTitle: {
    fontWeight: "700",
    color: colors.black,
    marginTop: 16,
  },
  descProduct: { lineHeight: 24, color: colors.lightBlack },
  readMore: {
    color: colors.orange,
    marginTop: 8,
    fontWeight: "700",
    textAlign: "right",
  },
  sizeOptions: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 44,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { Typography } from "../Typography/Typography";
import { Loading } from "../Loading/Loading";

interface ProductProps {
  image: any;
  onPress: () => void;
  price: string;
}

const Product: React.FC<ProductProps> = ({ image, onPress, price }) => {
  return (
    <View style={styles.productContainer}>
      {price ? (
        <>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.imageContainer}>
              <Image
                source={image}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Typography.Paragraph style={styles.priceText}>
              ${price}
            </Typography.Paragraph>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => alert("Added to cart")}
          >
            <Typography.Paragraph style={styles.addButtonText}>
              +
            </Typography.Paragraph>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.imageContainer}> 
         <Loading />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    padding: 16,
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  addButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 24,
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
  },
  loadingView: {
    width: "100%",
    height: 68,
  }
});

export default Product;

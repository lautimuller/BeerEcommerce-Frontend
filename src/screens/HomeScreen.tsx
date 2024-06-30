import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { colors } from "../styles/colors";
import { StatefulWrapper } from "../components/StatefulWrapper/StatefulWrapper";
import { Typography } from "../components/Typography/Typography";
import Input from "../components/Input/Input";
import Tag from "../components/Tags/Tag";
import Product from "../components/Buttons/Product";
import { useNavigation } from "@react-navigation/native";
import { useProducts } from "../context/ProductsContext";
import { Product as ProductType } from "../utils/types";
import images from "../utils/utils";
import { RootStackParamList } from "../utils/navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

const BeerIcon = require("../assets/icons/Beer.png");
const WineIcon = require("../assets/icons/Wine-glass.png");

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const { products, loading } = useProducts();

  const handleProductPress = (productId: number) => {
    navigation.navigate("Product", { productId });
  };

  const renderProduct = ({ item }: { item: ProductType }) => {
    const imageSource =
      images[item.image] || require("../assets/images/notfound.jpg");

    return (
      <View style={styles.productContainer}>
        <Product
          image={imageSource}
          onPress={() => handleProductPress(item.id)}
          price={item.skus[0].price}
        />
      </View>
    );
  };

  return (
    <StatefulWrapper loading={loading}>
      <View style={styles.view}>
        <View>
          <Typography.Label>Hi Mr. Michael,</Typography.Label>
          <Typography.Title style={styles.title}>
            Welcome Back!
          </Typography.Title>
        </View>
        <Input
          placeholder="Search burger, pizza, drink or etc..."
          containerStyle={styles.inputView}
        />
        <View style={styles.drinkView}>
          <View style={styles.viewTitles}>
            <Typography.Subtitle>Drink Category</Typography.Subtitle>
            <TouchableOpacity>
              <Typography.Label>See All</Typography.Label>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.drinkTagsView}
          >
            <Tag label="All" onPress={() => {}} />
            <Tag label="Beer" icon={BeerIcon} onPress={() => {}} />
            <Tag label="Wine" icon={WineIcon} onPress={() => {}} />
          </ScrollView>
        </View>
        <View style={styles.populerView}>
          <View style={styles.viewTitles}>
            <Typography.Subtitle>Popular</Typography.Subtitle>
            <TouchableOpacity>
              <Typography.Label>See All</Typography.Label>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.productList}
          />
        </View>
      </View>
    </StatefulWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: { marginTop: 6 },
  inputView: { marginTop: 32 },
  drinkView: { marginTop: 32 },
  viewTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  drinkTagsView: {
    marginTop: 16,
    flexDirection: "row",
  },
  populerView: { marginTop: 32, flex: 1 },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productContainer: {
    flex: 1,
    margin: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productList: {
    paddingBottom: 16,
  },
});

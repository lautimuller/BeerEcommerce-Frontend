import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../styles/colors";

const ExploreScreen: React.FC = () => {
  const image = require("../assets/images/error-page.jpg");
  return (
    <View style={styles.view}>
      <Image  source={image} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});

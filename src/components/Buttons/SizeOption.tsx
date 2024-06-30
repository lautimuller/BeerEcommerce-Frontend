import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { Typography } from "../Typography/Typography";
import React from "react";
import { colors } from "../../styles/colors";
import { Sku } from "../../utils/types";
import { extractSize } from "../../utils/utils";

const SizeOption: React.FC<{
  sku: Sku;
  isSelected: boolean;
  onPress: () => void;
}> = ({ sku, isSelected, onPress }) => {
  const isDisabled = sku.stock === 0;

  return (
    <TouchableOpacity
      style={[
        styles.sizeBox,
        isSelected && styles.selectedSizeBox,
        isDisabled && styles.disabledSizeBox,
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Typography.Paragraph
        style={[
          styles.sizeText,
          isSelected && styles.selectedSizeText,
          isDisabled && styles.disabledSizeText,
        ]}
      >
        {extractSize(sku.name)}
      </Typography.Paragraph>
    </TouchableOpacity>
  );
};

export default SizeOption;

const styles = StyleSheet.create({
  sizeBox: {
    borderColor: colors.lightBlack,
    borderWidth: 1,
    borderRadius: 15.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  } as ViewStyle,
  selectedSizeBox: {
    borderColor: colors.orange,
  } as ViewStyle,
  disabledSizeBox: {
    borderColor: "#d3d3d3",
    backgroundColor: "#f5f5f5",
  } as ViewStyle,
  sizeText: {
    color: colors.black,
  } as TextStyle,
  selectedSizeText: {
    color: colors.orange,
  } as TextStyle,
  disabledSizeText: {
    color: "#a9a9a9",
  } as TextStyle,
});

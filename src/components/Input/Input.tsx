import React from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface InputProps {
  placeholder?: string;
  containerStyle?: ViewStyle;
}

const Input: React.FC<InputProps> = ({ placeholder, containerStyle }) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <MaterialIcons name="search" size={24} color="#8F8F8F" style={styles.icon} />
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#8F8F8F"
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
});
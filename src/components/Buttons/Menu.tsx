import React from "react";
import {
    TouchableOpacity,
    View,
    ViewStyle,
  } from "react-native";
import Menu from "../../assets/icons/Menu";

type ButtonProps = {
    onPress: () => void;
    customStyle?: ViewStyle;
  };
  
  const MenuButton: React.FC<ButtonProps> = ({
    onPress,
    customStyle,
  }) => {
    return (
      <TouchableOpacity style={customStyle} onPress={onPress}>
            <View><Menu /></View>
      </TouchableOpacity>
    );
  };
  
  export default MenuButton;
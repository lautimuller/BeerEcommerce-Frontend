import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../styles/colors";

interface TagProps {
  label: string;
  icon?: any;  
  selected?: boolean;
  onPress: () => void;
}

const Tag: React.FC<TagProps> = ({ label, icon, selected = false, onPress }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.tag, isSelected && styles.selectedTag]}
      onPress={handlePress}
    >
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.tagText, isSelected && styles.selectedTagText]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    minWidth: 68,
    height: 48,
  },
  selectedTag: {
    backgroundColor: colors.orange,
    paddingRight: 44
  },
  icon: {
    marginRight: 6,
    width: 24,
    height: 24,
  },
  tagText: {
    color: colors.black,
    fontSize: 14,
  },
  selectedTagText: {
    color: colors.white,
  },
});

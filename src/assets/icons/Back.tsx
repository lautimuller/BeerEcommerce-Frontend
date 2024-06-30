import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const BackIcon = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <Rect x="5" y="11" width="15" height="1.5" fill="#323232" />
    <Path
      d="M11 5.20001L4 11.7L11 18.2"
      stroke="#323232"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default BackIcon;

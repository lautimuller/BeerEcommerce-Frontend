import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "../../styles/colors";

interface Props {
  width: number;
  height: number;
  focused?: boolean;
}

const PurchasesIcon: React.FC<Props> = ({ width, height, focused = false }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 8H14"
      stroke={focused ? colors.orange : "#8F8F8F"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 16H14"
      stroke={focused ? colors.orange : "#8F8F8F"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 12H16"
      stroke={focused ? colors.orange : "#8F8F8F"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={3.75}
      y={2.75}
      width={16.5}
      height={18.5}
      rx={3.25}
      stroke={focused ? colors.orange : "#8F8F8F"}
      strokeWidth={1.5}
    />
  </Svg>
);

export default PurchasesIcon;

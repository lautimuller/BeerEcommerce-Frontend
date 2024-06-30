import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { colors } from "../../styles/colors";

interface Props {
  width: number;
  height: number;
  focused?: boolean;
}

const ExploreIcon: React.FC<Props> = ({ width, height, focused = false }) => (
  <Svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
  >
    <Circle cx="10" cy="5" r="4.25" stroke={focused ? colors.orange : "#8F8F8F"} stroke-width="1.5" />
    <Path
      d="M2.30623 8.59689C2.50953 6.97049 3.89208 5.75 5.53113 5.75H14.4689C16.1079 5.75 17.4905 6.97049 17.6938 8.59689L18.6938 16.5969C18.9362 18.5367 17.4237 20.25 15.4689 20.25H4.53113C2.57626 20.25 1.06375 18.5367 1.30623 16.5969L2.30623 8.59689Z"
      fill="white"
      stroke={focused ? colors.orange : "#8F8F8F"}
      stroke-width="1.5"
    />
    <Circle cx="7.75" cy="9.75" r="0.75" fill={focused ? colors.orange : "#8F8F8F"} />
    <Circle cx="11.75" cy="9.75" r="0.75" fill={focused ? colors.orange : "#8F8F8F"} />
    <Circle
      cx="17.5"
      cy="5.5"
      r="2.75"
      fill="#FF9F24"
      stroke="white"
      stroke-width="1.5"
    />
  </Svg>
);

export default ExploreIcon;

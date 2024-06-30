import React, { FC, ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
export interface TypographyProps extends TextProps {
  children?: ReactNode;
}

const BaseText: FC<TypographyProps> = ({ style, ...props }) => (
  <Text {...props} style={style} />
);

export default BaseText;

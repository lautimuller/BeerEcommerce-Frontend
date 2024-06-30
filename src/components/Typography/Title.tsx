import React, { FC } from 'react';
import BaseText, { TypographyProps } from './BaseText';
import { TypographyStyles } from './styles';

export const Title: FC<TypographyProps> = ({ style, ...props }) => {
  return <BaseText {...props} style={[TypographyStyles.Title, style]} />;
};

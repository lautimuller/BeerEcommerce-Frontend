import React, { FC } from 'react';
import BaseText, { TypographyProps } from './BaseText';
import { TypographyStyles } from './styles';

export const Paragraph: FC<TypographyProps> = ({ style, ...props }) => {
  return <BaseText {...props} style={[TypographyStyles.Paragraph, style]} />;
};

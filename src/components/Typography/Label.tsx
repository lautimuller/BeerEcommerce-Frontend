import React, { FC } from 'react';
import BaseText, { TypographyProps } from './BaseText';
import { TypographyStyles } from './styles';

export const Label: FC<TypographyProps> = ({ style, ...props }) => {
  return <BaseText {...props} style={[TypographyStyles.Label, style]} />;
};

import { colors } from "../../styles/colors";

const color = {
  color: 'black',
};

export const TypographyStyles = {
  Title: {
    ...color,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'DM Sans',
    lineHeight: '31.25px'
  },
  Subtitle: {
    ...color,
    fontSize: 18,
    fontFamily: 'DM Sans',
    fontWeight: '700',
  },
  Paragraph: {
    ...color,
    fontSize: 16,
    fontFamily: 'DM Sans'
  },
  Label: {
    color: colors.lightBlack,
    fontSize: 14,
    fontFamily: 'DM Sans',
  },
};

import { StyleSheet, PixelRatio } from "react-native";

export const Font = {
  InterBold: "InterBold",
  InterSemiBold: "InterSemiBold",
  InterMedium: "InterMedium",
  InterRegular: "InterRegular",
};

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size: number) => size / fontScale;

export const FontStyle = StyleSheet.create({
  heading20: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(20),
    lineHeight: 30,
  },
  heading18: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(18),
    lineHeight: 27,
  },
  heading16: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(16),
    lineHeight: 24,
  },
  heading14: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(14),
    lineHeight: 21,
  },
  bodyXL: {
    fontFamily: Font.InterRegular,
    fontSize: getFontSize(18),
    lineHeight: 27,
  },
  bodyLG: {
    fontFamily: Font.InterSemiBold,
    fontSize: getFontSize(16),
    lineHeight: 24,
  },
  bodySBold: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(14),
    lineHeight: 21,
  },
  bodySSemiBold: {
    fontFamily: Font.InterSemiBold,
    fontSize: getFontSize(14),
    lineHeight: 21,
  },
  bodySMedium: {
    fontFamily: Font.InterMedium,
    fontSize: getFontSize(14),
    lineHeight: 21,
  },
  bodySRegular: {
    fontFamily: Font.InterMedium,
    fontSize: getFontSize(14),
    lineHeight: 21,
  },
  bodyXSBold: {
    fontFamily: Font.InterBold,
    fontSize: getFontSize(12),
    lineHeight: 18,
  },
  bodyXSSemiBold: {
    fontFamily: Font.InterSemiBold,
    fontSize: getFontSize(12),
    lineHeight: 18,
  },
  bodyXSMedium: {
    fontFamily: Font.InterMedium,
    fontSize: getFontSize(12),
    lineHeight: 18,
  },
  bodyXSRegular: {
    fontFamily: Font.InterRegular,
    fontSize: getFontSize(12),
    lineHeight: 18,
  },
  Button: {
    fontFamily: Font.InterMedium,
    fontSize: getFontSize(16),
    lineHeight: 24,
  },
});

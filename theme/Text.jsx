import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  variants: {
    "primary-text": {
      fontFamily: "Inter",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    "secondary-text": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    "input-error-text": {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      color: "red",
    },
    "subTitle-text": {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
  },
});

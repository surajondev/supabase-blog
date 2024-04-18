import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  variants: {
    "secondary-text": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    }
  },
});

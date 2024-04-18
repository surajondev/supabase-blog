import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    "primary-button": {
      fontFamily: "Inter",
      borderRadius: "10px",
      backgroundColor: "#8B54BD",
      color: "white",
    }
  },
});

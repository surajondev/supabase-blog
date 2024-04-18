import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  variants: {
    "primary-heading": {
      fontFamily: "Inter",
      color: "#191A15",
      fontSize: "50px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
    },
    "bold-medium-heading": {
      fontFamily: "Inter",
      color: "#191A15",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
    },
  },
});

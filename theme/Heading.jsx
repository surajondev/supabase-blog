import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  variants: {
    "hero-heading": {
      fontFamily: "Inter",
      fontSize: "69px",
      fontStyle: "normal",
      lineHeight: "90px",
    },
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
    "secondary-heading": {
      fontFamily: "Inter",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
    },
    "tertiary-heading": {
      fontFamily: "Inter",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
    },
  },
});

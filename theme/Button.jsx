import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    "primary-button": {
      fontFamily: "Inter",
      borderRadius: "10px",
      backgroundColor: "#8B54BD",
      color: "white",
    },
    "capsule-button": {
      fontFamily: "Inter",
      borderRadius: "full",
      color: "white",
      padding: "1.5em 2.5em",
    },
    "pricing-unselected-button": {
      fontFamily: "Inter",
      borderRadius: "10px",
      backgroundColor: "white",
      padding: "1.5em 3em",
      boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.1)",
    },
    "pricing-selected-button": {
      fontFamily: "Inter",
      borderRadius: "10px",
      backgroundColor: "purple",
      padding: "1.5em 3em",
      boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.1)",
    },
    "form-button": {
      fontFamily: "Inter",
      fontSize: "16px",
      borderRadius: "5px",
      backgroundColor: "#8B54BD",
      color: "white",
    },
  },
});

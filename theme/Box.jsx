import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  borderRadius: 0,
});

export const Box = defineStyleConfig({
  variants: {
    "center-box": {
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
    },
    "capsule-button": {
      borderRadius: "full",
      color: "white",
      padding: "1.5em 2.5em",
    },
    boxicon: {
      background: "linear-gradient(to bottom, #4F46E5 0%, #4F46E5 100%)",
      borderRadius: "18px",
    },
  },
});

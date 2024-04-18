import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Divider = defineStyleConfig({
  variants: {
    "primary-divider": {
        borderWidth: '2px',
        marginTop:"5px",
        borderStyle: "solid", 
        borderColor:"gray.300",
    },
  },
});

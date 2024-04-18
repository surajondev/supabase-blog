import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const formInput = definePartsStyle({
  field: {
    fontFamily: "Inter",
    borderRadius: "5px",
    padding: "1em",
    backgroundColor: "gray.200",
  },
  element: {
    cursor: "pointer",
  },
});

const formInputFile = definePartsStyle({
  field: {
    height:"3em",
    fontFamily: "Inter",
    borderRadius: "5px",
    padding: "0.5em",
    backgroundColor: "gray.200",
  },
  element: {
    cursor: "pointer",
  },
});

const variants = {
  "form-input": formInput,
  "form-input-file": formInputFile,
};

export const Input = defineMultiStyleConfig({ variants });

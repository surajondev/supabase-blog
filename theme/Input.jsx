import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const lightInput = definePartsStyle({
  field: {
    fontFamily: "Inter",
    borderRadius: "10px",
    backgroundColor: "#FFF",
    color: "#000",
    padding: "1em",
  },
});

const getEmailPill = definePartsStyle({
  field: {
    fontFamily: "Inter",
    borderRadius: "70px",
    border: "2px solid #A6A6A6",
    padding: "1em",
    backgroundColor: "transparent",
  },
  element: {
    cursor: "pointer",
  },
});

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
  "light-input": lightInput,
  "email-pill": getEmailPill,
  "form-input": formInput,
  "form-input-file": formInputFile,
};

export const Input = defineMultiStyleConfig({ variants });

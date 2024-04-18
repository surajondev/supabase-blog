import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const switchTabs = definePartsStyle((props) => {
  return {
    tab: {
      borderRadius: "10px",
      p: "10px 25px",
      width: "80%",
      color: "#191A15",
      _selected: {
        backgroundColor: "#8B54BD",
        color: "white",
        borderColor: "inherit",
      },
    },

    tablist: {
      backgroundColor: "#FFF",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.1)",
      display: "flex",
      gap: "2em",
      justifyContent: "center",
      width: { base: "80%", md: "30%" },
    },

    tabpanel: {
      borderColor: "inherit",
      borderBottomRadius: "lg",
      borderTopRightRadius: "lg",
    },
  };
});

const variants = {
  "switch-tabs": switchTabs,
};

// export the component theme
export const Tabs = defineMultiStyleConfig({ variants });

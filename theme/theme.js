import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

const theme = extendTheme({
  components: {
    Button: Button,
    Text: Text,
    Heading: Heading,
    Input: Input,
    Textarea: Textarea,
  },
});

export default theme;

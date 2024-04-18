import React, { useState } from "react";
import {
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Formik } from "formik";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Markdown from "react-markdown";
import MarkdownTheme from "../../theme/MarkdownTheme";

const WriteArticle = ({ setContentMarkdown }) => {
  const [view, setView] = useState("write");

  return (
    <Formik
      initialValues={{
        content: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, touched, handleBlur, setFieldValue }) => (
        <Stack
          spacing={10}
          width="100%"
          padding="2em 2em"
          bg="white"
          borderRadius="10px"
        >
          <Flex gap={4}>
            <Button variant="primary-button" onClick={() => setView("write")}>
              Edit
            </Button>
            <Button variant="primary-button" onClick={() => setView("preview")}>
              Preview
            </Button>
          </Flex>
          {view === "write" && (
            <FormControl>
              <Heading variant="tertiary-heading">Write Article Here</Heading>
              <Textarea
                variant={"content-textarea"}
                name="content"
                size="lg"
                placeholder={"write article here...."}
                onChange={(e) => {
                  setFieldValue("content", e.target.value);
                  setContentMarkdown(e.target.value);
                  console.log(e.target.value);
                }}
                onBlur={handleBlur}
                value={values.content}
                mt={5}
                height={400}
              />
              <FormLabel mt={1} display="flex" justifyContent="space-between">
                {errors.content && touched.content && (
                  <Text variant="input-error-text"></Text>
                )}
              </FormLabel>
            </FormControl>
          )}

          {view === "preview" && (
            <PreviewArticle contentMarkdown={values.content} />
          )}
        </Stack>
      )}
    </Formik>
  );
};

const PreviewArticle = ({ contentMarkdown }) => {
  return (
    <Box>
      {/* @ts-ignore */}
      <Markdown components={ChakraUIRenderer(MarkdownTheme)} skipHtml>
        {contentMarkdown}
      </Markdown>
    </Box>
  );
};

export default WriteArticle;

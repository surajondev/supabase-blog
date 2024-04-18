"use client";

import React, { useState, useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import WriteArticle from "./WriteArticle";
import ArticleSetting from "./ArticleSetting";

const ArticlePage = () => {
  const [contentMarkdown, setContentMarkdown] = useState(null);

  return (
    <Stack spacing={5} position="relative" className="mainContainer">
      <ArticleSetting body={contentMarkdown} />
      <WriteArticle setContentMarkdown={(e) => setContentMarkdown(e)} />
    </Stack>
  );
};

export default ArticlePage;

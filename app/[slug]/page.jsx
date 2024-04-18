"use client";

import React, { useState, useEffect } from "react";
import { Stack, Box, Skeleton } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { DisplayArticle } from "./DisplayArticle";

const ArticlePage = () => {
  const [articleData, setArticleData] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleFetchParam = async () => {
    const slugArr = pathname.split("/");
    const slug = slugArr[slugArr.length - 1];
    console.log(slug);

    const { data: articleData, error: artilceError } = await supabase
      .from("article")
      .select()
      .eq("slug", slug);

    if (artilceError) {
      console.log(artilceError);
    } else {
      setArticleData(articleData[0]);
      console.log(articleData[0]);
    }
  };

  useEffect(() => {
    handleFetchParam();
  }, []);

  return (
    <Box margin="0 auto">
      {!articleData && (
        <Stack
          spacing={10}
          margin="0 auto"
          marginTop={20}
          marginBottom={20}
          width={{
            xl: "60%",
            "2xl": "50%",
            lg: "70%",
            base: "100%",
            md: "80%",
          }}
        >
          {/* @ts-ignore */}
          <Skeleton colorScheme="purple">
            <div style={{ borderRadius: "10px", height: "300px" }} />
          </Skeleton>
          <Stack>
            <Skeleton colorScheme="purple">
              <div style={{ borderRadius: "10px", height: "100px" }} />
            </Skeleton>
            <Skeleton colorScheme="purple">
              <div style={{ borderRadius: "10px", height: "40px" }} />
            </Skeleton>
            <Skeleton colorScheme="purple">
              <div style={{ borderRadius: "10px", height: "100px" }} />
            </Skeleton>
          </Stack>
          <Box>
            <Skeleton colorScheme="purple">
              <div style={{ borderRadius: "10px", height: "600px" }} />
            </Skeleton>
          </Box>
        </Stack>
      )}
      <Box
        width={{ xl: "60%", "2xl": "50%", lg: "70%", base: "100%", md: "80%" }}
        margin="0 auto"
        marginBottom={40}
      >
        {articleData != null && <DisplayArticle articleData={articleData} />}
      </Box>
    </Box>
  );
};

export default ArticlePage;
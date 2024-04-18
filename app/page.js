"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  GridItem,
  SimpleGrid,
  Skeleton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  const [articleData, setArticleData] = useState();

  const getArticleData = async () => {
    const { data: articleData, error: artilceError } = await supabase
      .from("article")
      .select();
    if (artilceError) {
      console.log(artilceError);
    } else {
      setArticleData(articleData);
      console.log(articleData);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Box marginTop="20" className="mainContainer">
      <Heading variant="primary-heading" mt={20}>
        Stories by Suraj Vishwakarma
      </Heading>
      <Flex justifyContent="space-between">
        <Heading variant="secondary-heading" marginTop="10" marginBottom="10">
          Latest articles
        </Heading>
        <Link href="/create">
          <Button variant="primary-button">Create</Button>
        </Link>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        spacing="40px"
      >
        {!articleData &&
          [0, 1, 2].map((item) => {
            return (
              <GridItem colSpan={{ base: 6, lg: 2 }} key={item}>
                <Wrap spacing="30px" marginBottom="10">
                  <WrapItem
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  >
                    <Box w="100%" height="100%">
                      <Box borderRadius="lg" overflow="hidden">
                        <Box
                          textDecoration="none"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Skeleton colorScheme="purple">
                            <div
                              style={{ borderRadius: "10px", height: "400px" }}
                            />
                          </Skeleton>
                        </Box>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </GridItem>
            );
          })}
        {articleData &&
          articleData.map((item, index) => {
            return (
              <GridItem colSpan={{ base: 6, lg: 2 }} key={index}>
                <Wrap spacing="30px" marginBottom="10">
                  <WrapItem
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  >
                    <Box w="100%" height="100%">
                      <Box borderRadius="lg" overflow="hidden">
                        <Box
                          textDecoration="none"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Link href={`/${item.slug}`}>
                            <Image
                              transform="scale(1.0)"
                              src={item.thumbnail}
                              alt="some text"
                              objectFit="contain"
                              width="100%"
                              transition="0.3s ease-in-out"
                              _hover={{
                                transform: "scale(1.05)",
                              }}
                            />
                          </Link>
                        </Box>
                      </Box>
                      <BlogTags tags={item.tags} marginTop={3} />
                      <Heading fontSize="xl" marginTop="2">
                        <Link href={`/${item.slug}`}>
                          <Text
                            textDecoration="none"
                            _hover={{ textDecoration: "none" }}
                          >
                            {item.title}
                          </Text>
                        </Link>
                      </Heading>
                      <Text as="p" fontSize="md" marginTop="2">
                        {item.description}
                      </Text>
                    </Box>
                  </WrapItem>
                </Wrap>
              </GridItem>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default ArticleList;

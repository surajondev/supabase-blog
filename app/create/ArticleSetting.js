import React, { useState } from "react";
import {
  Stack,
  Accordion,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Heading,
  Input,
  FormControl,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Select } from "chakra-react-select";
import { tagOption } from "./tagOption";
import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ArticleSetting = ({ body }) => {
  const [imgURL, setImgURL] = useState(null);

  const router = useRouter();

  const getSlug = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    // Remove special characters using regular expression
    const cleanSlug = slug.replace(/[^\w\-]+/g, "");

    return cleanSlug;
  };

  const handleSubmit = async (values) => {
    const articleData = {
      title: values.title,
      markdown: body,
      description: values.description,
      thumbnail: values.thumbnail,
      tags: values.tags,
      slug: getSlug(values.title),
    };
    console.log(articleData);

    const { error } = await supabase.from("article").insert(articleData);
    if (error) {
      toast.error("Article not added!");
      console.log(error);
    } else {
      toast.success("Article added!");
      console.log(error);
      router.push("/");
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        tags: "",
        thumbnail: "",
      }}
      enableReinitialize={true}
      //@ts-ignore
      onSubmit={(values, type) => handleSubmit(values, type)}
    >
      {({ values, handleChange, handleSubmit, handleBlur, setFieldValue }) => (
        <Stack>
          <Accordion
            allowToggle
            bg="white"
            borderRadius="10px"
            p="18px 25px"
            mt="32px"
          >
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading variant="tertiary-heading">Article Setting</Heading>
                </Box>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack spacing={2}>
                  <FormControl>
                    <Heading variant="tertiary-heading">Title</Heading>
                    <Input
                      variant={"form-input"}
                      name="title"
                      type="text"
                      placeholder={"Title of the Article"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                  </FormControl>
                  <FormControl>
                    <Heading variant="tertiary-heading">Description</Heading>
                    <Input
                      variant={"form-input"}
                      name="description"
                      type="text"
                      placeholder={"Description of the Article"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                  </FormControl>
                  <Heading variant="tertiary-heading">Thumbnail</Heading>
                  <Stack>
                    {imgURL != null && (
                      <div>
                        <Image
                          width={{ base: "100%", md: "60%", lg: "40%" }}
                          objectFit="cover"
                          src={imgURL}
                          alt={values.title}
                        />
                      </div>
                    )}
                    <FormControl>
                      <Input
                        variant={"form-input-file"}
                        name="thumbnail"
                        type="file"
                        onChange={async (e) => {
                          const timestamp = Date.now();
                          const { data, error } = await supabase.storage
                            .from("thumbnail")
                            .upload(
                              `${timestamp}-${e.target.files[0].name}`,
                              e.target.files[0],
                              {
                                cacheControl: "3600",
                                upsert: false,
                              }
                            );
                          if (error) {
                            console.log(error);
                            return;
                          }
                          const path = data.path.replace(/ /g, "%20");
                          const SUPABASE_REFERENCE = "You supabase reference";
                          const URL = `https://${SUPABASE_REFERENCE}.supabase.co/storage/v1/object/public/thumbnail/${path}`;
                          setImgURL(URL);
                          setFieldValue("thumbnail", URL);
                        }}
                        onBlur={handleBlur}
                      />
                    </FormControl>
                  </Stack>
                  <FormControl>
                    <Heading variant="tertiary-heading">Tag(Max:4)</Heading>
                    <Select
                      id="tags_label"
                      name="tags_label"
                      variant="filled"
                      isMulti={true}
                      colorScheme="purple"
                      value={values.tags_label}
                      onChange={(e) => {
                        //@ts-ignore
                        setFieldValue("tags_label", e);
                        console.log(e);
                        //@ts-ignore
                        const tagArr = e.map((item) => item.value);
                        setFieldValue("tags", tagArr);
                      }}
                      //@ts-ignore
                      options={tagOption}
                    />
                  </FormControl>
                  <Center>
                    <Button
                      variant="primary-button"
                      onClick={() => handleSubmit(values)}
                    >
                      Publish
                    </Button>
                  </Center>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      )}
    </Formik>
  );
};

export default ArticleSetting;

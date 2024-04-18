import { defineStyle, defineStyleConfig  } from '@chakra-ui/react'

const contentTextarea = defineStyle({
  backgroundColor: 'gray.200',
  color: 'black',
  fontFamily: 'Inter',
  fontWeight: 'normal',
})

const variants = {
  "content-textarea": contentTextarea,
};

export const Textarea = defineStyleConfig({
  variants
})
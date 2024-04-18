"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <ToastContainer />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

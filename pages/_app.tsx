import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps /*, AppContext */ } from "next/app";
import theme from "../theme";
import "modern-normalize/modern-normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

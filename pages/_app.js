import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "modern-normalize/modern-normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, GradientBlur, Header, Main } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <GradientBlur />
        <Component {...pageProps} />
        <Footer />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;

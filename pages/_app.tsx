import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/features/ui/Layout";
import GlobalStyles from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

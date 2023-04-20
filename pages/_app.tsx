import { FC, ReactNode } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import Layout from "./components/Layout/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

// export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   page: ReactNode;
// };

// export type AppPropsWithLayout = AppProps & {
//   page: React.ReactNode;
//   // pageProps: AppProps;
// };

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Head>
        <title>Liked it - Did it</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;

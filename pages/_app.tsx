import { FC } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Liked it - Did it</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;

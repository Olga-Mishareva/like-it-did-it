import { FC } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";

import Layout from "../components/Layout/Layout";
import { ICard } from "../helpers/intefaces";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [cards, setCards] = useLocalStorageState<ICard[]>("cards", {
    defaultValue: [],
  });

  function handleCards(card: ICard) {
    setCards([card, ...cards]);
  }

  return (
    <div className={inter.className}>
      <Head>
        <title>Liked it - Did it</title>
      </Head>
      <Layout>
        <Component {...pageProps} cards={cards} onAddCard={handleCards} />
      </Layout>
    </div>
  );
};

export default App;

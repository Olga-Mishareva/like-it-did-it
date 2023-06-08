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

  function handleCards(newCard: ICard) {
    if (cards[0]) {
      if (cards.filter((item) => item.date === newCard.date)) {
        const refreshedCards = cards.map((item) => {
          return item.date === newCard.date
            ? { ...item, dayEvents: item.dayEvents.concat(newCard.dayEvents) }
            : item;
        });
        setCards(refreshedCards);
      } else setCards([newCard, ...cards]);
    } else setCards([newCard]);
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

import { FC, useState, useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";
import { usePathname } from "next/navigation";

import Layout from "../components/Layout/Layout";
import { ICard } from "../helpers/intefaces";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const pathname = usePathname();

  const [cards, setCards] = useLocalStorageState<ICard[]>("cards", {
    defaultValue: [],
  });

  function handleCards(newCard: ICard) {
    const path = pathname.endsWith("liked") ? "liked" : "done";
    const currentDay = cards.some(
      (card) => card.date === newCard.date && card.status === path
    );

    if (currentDay) {
      editCurrentDayCard(newCard);
    } else {
      addNewDayCard(newCard);
    }
  }

  function editCurrentDayCard(newCard: ICard) {
    const refreshedCards = cards.map((card) => {
      if (card.date === newCard.date && card.status === newCard.status) {
        return {
          ...card,
          dayEvents: [...card.dayEvents, ...newCard.dayEvents],
        };
      } else return card;
    });
    setCards(refreshedCards);
  }

  function addNewDayCard(newCard: ICard) {
    setCards([newCard, ...cards]);
  }

  return (
    <div className={inter.className}>
      <Head>
        <title>Liked it - Done it</title>
      </Head>
      <Layout>
        <Component
          {...pageProps}
          path={pathname.endsWith("liked") ? "liked" : "done"}
          cards={cards}
          onAddCard={handleCards}
        />
      </Layout>
    </div>
  );
};

export default App;

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

import { db } from "@/db";
import styles from "./ListPage.module.css";
import { ICard } from "../../helpers/intefaces";

type listPageProp = {
  path: string;
  cards: ICard[];
};

const ListPage: FC<listPageProp> = ({ path, cards }) => {
  const [currentCards, setCurrentCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCurrentCards(cards.filter((card) => card.status === path));
  }, [cards]);

  console.log(cards);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {path === "liked" ? "I've liked it" : "I've done it"}
      </h1>
      <Link className={styles.link} href={`/create/${path}`}>
        +
      </Link>
      <ul className={styles.cardList}>
        {currentCards.map((item: ICard) => (
          <li className={styles.card} key={nanoid()}>
            <ol className={styles.eventList}>
              <p>{item.date}</p>
              {item.dayEvents.map((dayEvent: String) => (
                <li className="day-event" key={nanoid()}>
                  {dayEvent}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

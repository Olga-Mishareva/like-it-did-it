import { FC } from "react";
import Link from "next/link";

import { db } from "@/db";
import styles from "./ListPage.module.css";
import { Card } from "../../../helpers/intefaces";

const ListPage: FC = () => {
  console.log(db);
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href="/create">
        I liked it
      </Link>
      <ul className={styles.cardList}>
        {db.map((item: Card, i) => (
          <li className={styles.card} key={i}>
            <ol className={styles.eventList}>
              <p>{item.date}</p>
              {item.dayEvents.map((dayEvent: String, i) => (
                <li className="day-event" key={i}>
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

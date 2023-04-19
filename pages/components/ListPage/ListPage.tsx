import { FC } from "react";
import { db } from "@/db";
import styles from "./ListPage.module.css";
import { Card } from "../../../helpers/intefaces";

const ListPage: FC = () => {
  console.log(db);
  return (
    <ul className={styles.cardList}>
      {db.map((item: Card, i) => (
        <li className={styles.card} key={i}>
          <ol className="events-list">
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
  );
};

export default ListPage;

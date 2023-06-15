import { FC, FormEvent, useState } from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

import styles from "./FormPage.module.css";
import { ICard } from "../../helpers/intefaces";

type formPageProp = {
  path: string;
  onAddCard(card: ICard): void;
};

const FormPage: FC<formPageProp> = ({ path, onAddCard }) => {
  const [dayEvents, setDayEvents] = useState<string[]>([]);

  function handleDayEvents(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.target as typeof event.target & {
      dayevent: { value: string };
    };
    const dayEvent = form.dayevent.value;
    console.log(dayEvent);
    setDayEvents([...dayEvents, dayEvent]);
    form.dayevent.value = "";
  }

  function handleNewCard() {
    if (dayEvents[0]) {
      onAddCard({
        date: new Date().toLocaleString("de", {
          dateStyle: "full",
        }),
        status: `${path === "liked" ? "liked" : "done"}`,
        dayEvents: dayEvents,
        userId: "12345",
        userName: "test",
        userEmail: "test@test.com",
      });
    }
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>
        {path === "liked" ? "I've liked it" : "I've done it"}
      </h2>
      <div className={styles.container}>
        {/* <p className={styles.date}>{new Date().toISOString().split("T")[0]}</p> */}
        {/* <p className={styles.date}>{new Date().toUTCString().split(" ", 4)}</p> */}
        {/* <p className={styles.date}>{new Date().toUTCString().slice(0, -13)}</p> */}
        <p className={styles.date}>
          {new Date().toLocaleString("de", { dateStyle: "full" })}
        </p>
        <ol className={styles.eventList}>
          {dayEvents.map((dayEvent) => (
            <li key={nanoid()}>{dayEvent}</li>
          ))}
        </ol>
      </div>
      <form className={styles.form} id="" onSubmit={handleDayEvents}>
        <input
          className={styles.input}
          name="dayevent"
          type="text"
          aria-label="Event"
          placeholder={path === "liked" ? "I've liked..." : "I've done..."}
          required
        />
        <div className={styles.buttonsContainer}>
          <Link
            className={styles.backLink}
            href={`/list/${path}`}
            onClick={handleNewCard}
          >
            OK
          </Link>
          <button className={styles.submitButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;

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
            <li className={styles.eventList__item} key={nanoid()}>
              <div className={styles.eventList__itemContainer}>
                <p className={styles.eventList__itemText}>{dayEvent}</p>
                <div className={styles.eventList__btnsContainer}>
                  <button className={styles.eventList__editBtn} type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#2e2e2e"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </button>
                  <button className={styles.eventList__deleteBtn} type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#2e2e2e"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <form className={styles.form} id="day-event" onSubmit={handleDayEvents}>
          <div className={styles.form__inputContainer}>
            <input
              className={styles.form__input}
              name="dayevent"
              type="text"
              aria-label="Event"
              placeholder={path === "liked" ? "I've liked..." : "I've done..."}
              required
            />
            <button className={styles.form__addButton} type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </button>
          </div>
          <div className={styles.form__buttonsContainer}>
            <button
              className={styles.saveButton}
              type="button"
              onClick={handleNewCard}
            >
              Save
            </button>
            <Link className={styles.backLink} href={`/list/${path}`}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

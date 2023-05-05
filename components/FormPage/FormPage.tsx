import { FC } from "react";
import Link from "next/link";

import styles from "./FormPage.module.css";

type pathProp = {
  path: string;
};

const FormPage: FC<pathProp> = ({ path }) => {
  console.log(path);
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>
        {path === "liked" ? "I liked it" : "I did it"}
      </h2>
      <div className={styles.container}>
        <p className={styles.date}></p>
        <ol className={styles.eventList}></ol>
      </div>
      <form className={styles.form} id="">
        <input
          className={styles.input}
          type="text"
          aria-label="Event"
          placeholder={path === "liked" ? "Liked it..." : "Did it..."}
        />
        <div className={styles.buttonsContainer}>
          <Link className={styles.backLink} href="/">
            Cancel
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

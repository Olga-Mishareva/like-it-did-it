import { FC } from "react";
import Link from "next/link";

import styles from "./FormPage.module.css";

const FormPage: FC = () => {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>I liked it</h2>
      <div className={styles.container}>
        <p className={styles.date}></p>
        <ol className={styles.eventList}></ol>
      </div>
      <form className={styles.form} id="">
        <input
          className={styles.input}
          type="text"
          aria-label="Event"
          placeholder="I liked..."
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

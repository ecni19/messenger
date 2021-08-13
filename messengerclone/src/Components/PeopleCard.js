import React from "react";
import styles from "./PeopleCard.module.css";

export default function PeopleCard() {
  return (
    <div className={styles.container}>
      <div className={styles.pfp} />
      <ul>
        <div className={styles.name}>Name</div>
        <div className={styles.lastMsg}>Last Message</div>
      </ul>
      <div className={styles.read}/>
    </div>
  );
}
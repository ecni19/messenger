import React from "react";
import styles from "./PeopleCard.module.css";

export default function PeopleCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.pfp} />
      <ul>
        <div className={styles.name}>{props.fname + " " + props.lname}</div>
        <div className={styles.lastMsg}>{props.fname + ": " + props.message}</div>
      </ul>
      <div className={styles.read}/>
    </div>
  );
}
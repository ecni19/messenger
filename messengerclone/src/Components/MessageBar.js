import React from "react";
import styles from "./MessageBar.module.css";

export default function MessageBar() {
  return (
    <div className={styles.cont}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <input className={styles.msg} placeholder={"Aa"}/>
    </div>
  )
}
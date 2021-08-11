import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.circle}/>
        <h1>Chats</h1>
        <div className={styles.actions}/>
        <div className={styles.actions}/>
        <div className={styles.actions}/>
      </div>
      <div className={styles.searchContainer}>
      <input className={styles.search} placeholder=" Search Messenger">
      </input>
      </div>
    </div>
  )
}
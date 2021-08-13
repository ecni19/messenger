import React from "react";
import styles from "./Topbar.module.css";

export default function Topbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.pfp} />
      <ul>
        <div className={styles.name}>{props.fullname}</div>
        <div className={styles.active}>Active 5m ago</div>
      </ul>
      
    </div>
  )
}
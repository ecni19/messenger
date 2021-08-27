import React from "react";
import styles from "./TheirMessage.module.css";

export default function TheirMessage(props) {
  return (
    <div className={styles.message} style={{ float: "left" }}>
      {props.msg +'\n'}
    </div>
  );
}
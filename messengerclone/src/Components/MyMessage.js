import React from "react";
import styles from "./MyMessage.module.css";

export default function MyMessage(props) {
  return (
    <div className={styles.message} style={{float: "right"}}>
      {props.msg + '\n'}
    </div>
  )
}
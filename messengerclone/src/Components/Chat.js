import React from "react";
import styles from "./Chat.module.css";
import Topbar from "./Topbar";

export default function Chat(props) {
  return (
    <div className={styles.container}>
      {props.chat && <Topbar fullname={props.fullname}/>}
    </div>
  )
}
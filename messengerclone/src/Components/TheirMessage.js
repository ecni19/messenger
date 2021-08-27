import React from "react";
import styles from "./TheirMessage.module.css";
import { IoPersonCircle } from "react-icons/io5";

export default function TheirMessage(props) {
  return (
    <div>
      {props.displayPfp === true ? <IoPersonCircle className={styles.pfp}/> : ""}
      <div className={styles.message}>
        {props.msg + "\n"}
      </div>
    </div>
  );
}
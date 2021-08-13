import React, { useState } from "react";
import styles from "./PeopleCard.module.css";

export default function PeopleCard(props) {
  const handleClick = () => {
    props.setChat(true);
    props.setName(props.fname + " " + props.lname);
  }
  
  return (
    // change the values of "chat" and "name" onClick
    <div className={styles.container} onClick = {() => handleClick()}>
      <div className={styles.pfp} />
      <ul>
        <div className={styles.name}>{props.fname + " " + props.lname}</div>
        <div className={styles.lastMsg}>{props.fname + ": " + props.message}</div>
      </ul>
      <div className={styles.read}/>
      
    </div>
  );
}
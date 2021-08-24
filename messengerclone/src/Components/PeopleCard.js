import React, { useState, useContext } from "react";
import { ChatContext } from "../App";
import styles from "./PeopleCard.module.css";

export default function PeopleCard(props) {
  const {Chat, Name} = React.useContext(ChatContext);
  const [chat, setChat] = Chat;
  const [name, setName] = Name;
  const handleClick = () => {
    setChat(true);
    setName(props.fname + " " + props.lname);
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
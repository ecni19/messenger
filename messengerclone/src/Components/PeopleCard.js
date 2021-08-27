import React, { useState, useContext } from "react";
import { ChatContext } from "../App";
import { IoPersonCircle } from "react-icons/io5";
import styles from "./PeopleCard.module.css";
import { Friends } from "./Data";

export default function PeopleCard(props) {
  const {Chat, Name} = React.useContext(ChatContext);
  const [chat, setChat] = Chat;
  const [name, setName] = Name;

  let messages = [];
  for(let i = 0; i < Friends.length; i++) {
    if(Friends[i].fname + " " + Friends[i].lname === props.fname + " " + props.lname) {
      // Find the id of the friend's conversation
      let msgid = `msg${Friends[i].id}`;
      // assign the array of messages
      messages = Friends[i][msgid];
      break;
    }
  }

  const handleClick = () => {
    setChat(true);
    setName(props.fname + " " + props.lname);
  }
  
  return (
    // change the values of "chat" and "name" onClick
    <div className={styles.container} onClick={() => handleClick()}>
      <IoPersonCircle className={styles.pfp} />
      <ul>
        <div className={styles.name}>{props.fname + " " + props.lname}</div>
        {messages[messages.length - 1].id === 0 ?
          <div className={styles.lastMsg}>{messages[messages.length - 1].msg}</div> :
          <div className={styles.lastMsg}>{props.fname + " " + props.lname + ": " + messages[messages.length - 1].msg}</div>
        }
      </ul>
    </div>
  );
}
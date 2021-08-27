import React, { useContext, useEffect } from "react";
import { ChatContext } from "../App";
import styles from "./Conversation.module.css";
import { Friends } from "./Data";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function Conversation() {
  const {Name} = useContext(ChatContext);
  const [name] = Name;
  let messages = [];

  useEffect(() => {
    let convo = document.getElementById(styles.container);
    convo.scrollTop = convo.scrollHeight;
  }, [name])

  for(let i = 0; i < Friends.length; i++) {
    if(Friends[i].fname + " " + Friends[i].lname === name) {
      // Find the id of the friend's conversation
      let msgid = `msg${Friends[i].id}`;
      // assign the array of messages
      messages = Friends[i][msgid];
      break;
    }
  }
  return (
      <div id={styles.container}>
        {/* Map the array of messages, render sentence depending on the id */}
        {/* id:0 is "you", id:1 is the friend */}
        {messages.map((element) =>
          element.id === 0 ? (
            <MyMessage msg={element.msg} id={element.id} />
          ) : (
            <TheirMessage msg={element.msg} id={element.id} />
          )
        )}
      </div>
  );
}
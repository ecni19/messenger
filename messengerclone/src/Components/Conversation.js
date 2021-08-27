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
      {/* id:0 is "you", any other id is the friend */}
      {messages.map((element, ind) =>
        element.id === 0 ? ( // check who sent the message
          <MyMessage msg={element.msg} id={element.id} />
        ) : ind + 1 < messages.length ? ( // make sure we're in bounds of the array
          messages[ind + 1].id === 0 ? ( // first check if we are at the last message or not
            <TheirMessage displayPfp={true} msg={element.msg} id={element.id} /> // if the next message is from "you", display the pfp of the friend
          ) : (
            <TheirMessage displayPfp={false} msg={element.msg} id={element.id} /> // else, don't display it
          )
        ) : (
          <TheirMessage displayPfp={true} msg={element.msg} id={element.id} /> // if we are at the last message and it is from "you", display pfp
        )
      )}
    </div>
  );
}
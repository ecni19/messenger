import React from "react";
import { ChatContext } from "../App";
import styles from "./Chat.module.css";
import Topbar from "./Topbar";
import MessageBar from "./MessageBar";
import Conversation from "./Conversation";

export default function Chat() {
  const {Chat} = React.useContext(ChatContext);
  const [chat] = Chat;
  return (
    <div className={styles.container}>
      {chat && <Topbar/>}
      {chat && <Conversation/>}
      {chat && <MessageBar/>}
    </div>
  )
}
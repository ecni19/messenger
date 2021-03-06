import React from "react";
import styles from "./Search.module.css";
import { BsPencilSquare, BsCameraVideoFill } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { ChatContext } from "../App";

export default function Search() {
  const { Search } = React.useContext(ChatContext);
  const [searchName, setSearchName] = Search;

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.circle}/>
        <h1>Chats</h1>
        <div className={styles.actions}><IoEllipsisHorizontal/></div>
        <div className={styles.actions}><BsCameraVideoFill/></div>
        <div className={styles.actions}><BsPencilSquare/></div>
      </div>
      <div className={styles.searchContainer}>
      <input className={styles.search} placeholder={`Search Messenger`} onInput={e => setSearchName(e.target.value)}/>
      </div>
    </div>
  )
}
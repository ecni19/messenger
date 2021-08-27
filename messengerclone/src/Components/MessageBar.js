import React from "react";
import styles from "./MessageBar.module.css";
import { AiFillPlusCircle, AiFillPicture } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { RiFileGifFill } from "react-icons/ri";

export default function MessageBar() {
  return (
    <div className={styles.cont}>
      <div className={styles.circle}><AiFillPlusCircle/></div>
      <div className={styles.circle}><AiFillPicture/></div>
      <div className={styles.circle}><FaStickyNote/></div>
      <div className={styles.circle}><RiFileGifFill/></div>
      <input className={styles.msg} placeholder={"Aa"}/>
    </div>
  )
}
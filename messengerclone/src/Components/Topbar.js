import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../App";
import styles from "./Topbar.module.css";
import { IoPersonCircle } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";

export default function Topbar() {
  const {Name} = useContext(ChatContext);
  const [name] = Name;
  const [time, setTime] = useState(1);

  useEffect(() => {
    setTime(Math.floor(Math.random() * (59 - 1) + 1))
  }, [name])

  return (
    <div className={styles.container}>
      <IoPersonCircle className={styles.pfp} />
      <ul>
        <div className={styles.name}>{name}</div>
        <div className={styles.active}>{`Active ${time}m ago`}</div>
      </ul>
      <div className={styles.actionCont}>
        <div className={styles.actions}>
          <div className={styles.tooltip}>Start a voice call</div>
          <ImPhone />
        </div>
        <div className={styles.actions}>
          <div className={styles.tooltip}>Start a video call</div>
          <BsFillCameraVideoFill />
        </div>
        <div className={styles.actions}>
          <div className={styles.tooltip}>Conversation information</div>
          <IoEllipsisHorizontal />
        </div>
      </div>
    </div>
  );
}
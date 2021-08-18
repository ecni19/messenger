import React from "react";
import styles from "./Topbar.module.css";
// import { ImPhone } from "react-icons/im";
// import { BsFillCameraVideoFill } from "react-icons/bs";
// import { IoEllipsisHorizontal } from "react-icons/io5";

export default function Topbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.pfp} />
      <ul>
        <div className={styles.name}>{props.fullname}</div>
        <div className={styles.active}>Active 5m ago</div>
      </ul>
      {/* <div className={styles.actionCont}>
        <div className={styles.actions}><ImPhone/></div>
        <div className={styles.actions}><BsFillCameraVideoFill/></div>
        <div className={styles.actions}><IoEllipsisHorizontal/></div>
      </div> */}
    </div>
  )
}
import React from "react";
import styles from "./SidePanel.module.css";
import Search from "./Search";
import People from "./People";

export default function SidePanel(props) {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.peopleCont}>
        {/* Passing down setName and setChat as props */}
        <People setName={props.setName} setChat={props.setChat}/>
      </div>
    </div>
  );
}


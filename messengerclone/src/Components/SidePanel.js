import React from "react";
import styles from "./SidePanel.module.css";
import Search from "./Search";

export default function SidePanel() {
  return(
    <div className={styles.container}>
      <Search/>      
    </div>
  )
}


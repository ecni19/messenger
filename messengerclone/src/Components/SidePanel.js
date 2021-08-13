import React from "react";
import styles from "./SidePanel.module.css";
import Search from "./Search";
import People from "./People";

export default function SidePanel() {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.peopleCont}>
        <People />
      </div>
    </div>
  );
}


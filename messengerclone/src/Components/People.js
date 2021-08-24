import React from "react";
import styles from "./People.module.css";
import PeopleCard from "./PeopleCard";
import { Friends } from "./Data";

export default function People() {
  const renderPeople = Friends.map((e) => (
    <PeopleCard fname={e.fname} lname={e.lname} message={e.msg}/>
  ));
  
  return (
    <div className={styles.container}>
      {renderPeople}
    </div>
  )
}
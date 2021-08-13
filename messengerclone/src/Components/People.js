import React from "react";
import styles from "./People.module.css";
import PeopleCard from "./PeopleCard";
import { Friends } from "./Data";

export default function People(props) {
  const renderPeople = Friends.map((e) => (
    // setName and setChat: we must go deeper
    <PeopleCard fname={e.fname} lname={e.lname} message={e.msg} setName={props.setName} setChat={props.setChat}/>
  ));
  
  return (
    <div className={styles.container}>
      {renderPeople}
    </div>
  )
}
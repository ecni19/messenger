import React from "react";
import styles from "./People.module.css";
import PeopleCard from "./PeopleCard";
import { Friends } from "./Data";
import { ChatContext } from "../App";

export default function People() {
  const { Search } = React.useContext(ChatContext);
  const [searchName] = Search;

  const renderPeople = Friends.filter((e) => {
    if(searchName == "") {
      return e;
    } else if((e.fname.toLowerCase() + " " + e.lname.toLowerCase()).includes(searchName.toLowerCase())) {
      return e
    }
  }).map((e, ind) => (
    <PeopleCard fname={e.fname} lname={e.lname} message={e.msg} key={ind}/>
  ));

  return (
    <div className={styles.container}>
      {renderPeople}
    </div>
  )
}
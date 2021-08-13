import React, { useState } from "react";
import SidePanel from "./Components/SidePanel";
import styles from './App.module.css';
import Chat from "./Components/Chat";

function App() {
  // tells App.js to render the chat for this person
  const [chat, setChat] = useState(false);
  // provides the name of the person for the chat
  const [name, setName] = useState("");

  return (
    <div className={styles.container}>
      {/* Pass setName and setChat down to PeopleCard */}
      <SidePanel setName={setName} setChat={setChat}/>   
      <Chat fullname={name} chat={chat}/>
    </div>
  );
}

export default App;

import React from "react";
import SidePanel from "./Components/SidePanel";
import styles from './App.module.css';
import Chat from "./Components/Chat";

export const ChatContext = React.createContext();

function App() {
  // tells App.js to render the chat for this person
  const [chat, setChat] = React.useState(false);
  // provides the name of the person for the chat
  const [name, setName] = React.useState("");
  const [searchName, setSearchName] = React.useState("");

  return (
    // provide all components with the chat and name states
    <ChatContext.Provider value={{ Chat: [chat, setChat], Name: [name, setName], Search: [searchName, setSearchName] }}>
      <div className={styles.container}>
        <SidePanel/>
        <Chat/>
      </div>
    </ChatContext.Provider>
  );
}

export default App;

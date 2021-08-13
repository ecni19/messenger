import React from "react";
import SidePanel from "./Components/SidePanel";
import styles from './App.module.css';
import Chat from "./Components/Chat";

function App() {
  return (
    <div className={styles.container}>
      <SidePanel/>
      <Chat/>
    </div>
  );
}

export default App;

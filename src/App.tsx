import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  /*   useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.style.backgroundColor = "rgb(52, 52, 52)";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, []); */
  return (
    <div className="App bg-slate-50 dark:bg-[--background-end-rgb]">
      <Header />
      <Main />
    </div>
  );
}

export default App;

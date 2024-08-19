import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App greylight dark:text-gray-100 dark:grey">
      <Header />
      <Main />
    </div>
  );
}

export default App;

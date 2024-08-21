import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Electron from "./pages/Electron";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Assurez-vous d'avoir un composant Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[--background-end-rgb]">
        <Header />
        <div className="flex-grow flex justify-center md:px-16 dark:bg-[--background-end-rgb]">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/electron" element={<Electron />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

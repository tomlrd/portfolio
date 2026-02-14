import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./output.css";
import Contact from "./pages/Contact";
import Electron from "./pages/Electron";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-950 text-white">
        <Header />
        <div className="flex-grow flex justify-center items-start">
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

import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ElectronPage from "./pages/ElectronPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="electron" element={<ElectronPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

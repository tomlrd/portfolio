import { Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import About from "./pages/About";
import AutomationPage from "./pages/AutomationPage";
import Contact from "./pages/Contact";
import DesktopPage from "./pages/DesktopPage";
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
        <Route path="automation" element={<AutomationPage />} />
        <Route path="desktop" element={<DesktopPage />} />
        <Route path="electron" element={<Navigate to="/desktop" replace />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

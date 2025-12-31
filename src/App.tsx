import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/members" element={<Members />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

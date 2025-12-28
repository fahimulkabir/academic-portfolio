import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Students from "./pages/Students";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

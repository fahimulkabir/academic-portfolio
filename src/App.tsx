import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Members from "./pages/Members";
import Research from "./pages/Research";
import News from "./pages/News";
import Join from "./pages/Join";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Layout Route */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/publications" element={<Publications />} />
//           <Route path="/research" element={<Research />} />
//           <Route path="/members" element={<Members />} />
//           <Route path="/news" element={<News />} />
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default function App() {
  // We are passing the Vite base URL to the router
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<Members />} />
          <Route path="/news" element={<News />} />
          <Route path="/join" element={<Join />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

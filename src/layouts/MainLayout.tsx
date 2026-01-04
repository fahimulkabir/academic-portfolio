import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../index.css";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="obj-width sec-space extra-space">
        <Outlet />
      </main>
    </>
  );
}

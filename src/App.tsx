import { useState } from "react";
import "./App.css";
import SidebarMenu from "./components/SidebarMenu/pages/SidebarMenu";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/pages/Navbar";

export default function App() {
  const [toggled, setToggled] = useState<boolean>(false);
  const [broken, setBroken] = useState<boolean>(false);

  return (
    <>
      <section className="flex min-h-svh">
        <SidebarMenu
          toggled={toggled}
          setToggled={setToggled}
          setBroken={setBroken}
        />

        <div className="flex-1 relative">
          <Navbar broken={broken} toggled={toggled} setToggled={setToggled} />
          <div className="p-3">
            <Outlet />N
          </div>
        </div>
      </section>
    </>
  );
}

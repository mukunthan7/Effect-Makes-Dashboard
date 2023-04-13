import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="flex">
      <SideBar  className="sidebar" />
      <div className="flex flex-col w-screen contentname">
        <NavBar />
        <div className="bg-primary  h-[93vh] md:h-[91vh]">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

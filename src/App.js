import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
function App() {

  const [showMobileWarning, setShowMobileWarning] = useState(false)

 useEffect(() => {
  if(window.innerWidth <= 800)
    setShowMobileWarning(true)
  }, [])
  
  if(showMobileWarning) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Please use a desktop to view this website</h1>
        <h1 className="text-xl font-bold">This website is not mobile responsive</h1>
      </div>
    )
  }
  return (
    <div className="flex">
      <SideBar  className="sidebar" />
      <div className="flex flex-col w-screen contentname">
        <NavBar />
        <div className="bg-primary min-h-[96vh] md:h-[91vh]">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

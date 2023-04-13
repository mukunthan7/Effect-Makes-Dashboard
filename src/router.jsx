import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AppliedList from "./pages/appliedList";
import CreateEvents from "./pages/CreateEvents";
import AllEvents from "./pages/AllEvents"
import WithdrawMoney from "./pages/withdrawMoney"; 
import Chat from "./pages/Chat";
import Settings from "./pages/Settings"
import CheckAuth from "./utils/CheckAuth";

export default createBrowserRouter([
  {
    element:(
    <CheckAuth>
      <App />
    </CheckAuth>
    ),
    children: [
        { 
        path: "/", 
        element: <Dashboard />
      },
      {
        path: "/appliedlist",
        element: <AppliedList />
      },
      {
        path: "/create-events",
        element: <CreateEvents />
      },
      {
        path: "/all-events",
        element: <AllEvents />
      },
      {
        path: "/withdraw",
        element: <WithdrawMoney />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ]
    },
    {
      path: "/login",
      element: <Login />
    },
    { 
      path: "/signup", 
      element: <SignUp /> 
    },
]);
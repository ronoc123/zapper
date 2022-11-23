import Navbar from "../components/Navbar.js";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";
import Chatbox from "../components/Chatbox.js";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Chatbox />
    </div>
  );
};

export default SharedLayout;

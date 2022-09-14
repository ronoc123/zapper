import Wrapper from "../assests/wrappers/Sidebar";
import { useAppContext } from "../context/appContext";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { SiGoogletagmanager, SiManageiq } from "react-icons/si";
import Logo from "./Logo";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar, user, logoutUser } =
    useAppContext();

  const navLogout = () => {
    closeSidebar();
    logoutUser();
  };

  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" onClick={closeSidebar}>
          <CgCloseR />
        </button>
        <div className="logo-containers">
          <span className="icon">
            <Logo />
          </span>
          <span className="title">Zapper</span>
        </div>
        <div className="links-container">
          <Link to={"/"} onClick={closeSidebar} className="link">
            <span className="link-name">Home</span>
          </Link>
          <Link to={"/project"} onClick={closeSidebar} className="link">
            <span className="link-name">Project</span>
          </Link>
          <Link to={"/ticket"} onClick={closeSidebar} className="link">
            <span className="link-name">Tickets</span>
          </Link>
          {user[0].user_role === "admin" && (
            <Link to={"/role"} onClick={closeSidebar} className="link">
              <span className="link-name">Administration</span>
            </Link>
          )}
          <Link to={"/register"} onClick={navLogout} className="link">
            <span className="link-name">Logout</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

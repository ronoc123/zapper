import links from "../utils/links.js";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext.js";
import { useState } from "react";

const NavLinks = () => {
  const { user } = useAppContext();
  const [navbar, setNavbar] = useState(0);

  if (user[0].user_role === "admin") {
    return (
      <div className="nav-link">
        {links.map((link, i) => {
          const { text, path, icon, id } = link;
          return (
            <NavLink
              to={path}
              key={id}
              className="link"
              onClick={() => setNavbar(i)}
            >
              <div
                className={
                  navbar === i ? "link-container selected" : "link-container"
                }
              >
                <span className="icon">{icon}</span>
                <h1 className="text">{text}</h1>
              </div>
            </NavLink>
          );
        })}
        <NavLink
          to="/role"
          className="link"
          key={1}
          onClick={() => setNavbar(3)}
        >
          <div
            className={
              navbar === 3 ? "link-container selected" : "link-container"
            }
          >
            <span className="icon">
              <FaUserAlt />
            </span>
            <h1 className="text">Administration</h1>
          </div>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="nav-link">
      {links.map((link, i) => {
        const { text, path, icon, id } = link;
        return (
          <NavLink
            to={path}
            key={id}
            className="link"
            onClick={() => setNavbar(i)}
          >
            <div
              className={
                navbar === i ? "link-container selected" : "link-container"
              }
            >
              <span className="icon">{icon}</span>
              <h1 className="text">{text}</h1>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

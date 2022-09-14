import links from "../utils/links.js";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext.js";

const NavLinks = () => {
  const { user } = useAppContext();

  if (user[0].user_role === "admin") {
    return (
      <div className="nav-link">
        {links.map((link) => {
          const { text, path, icon, id } = link;
          return (
            <NavLink to={path} key={id} className="link">
              <span className="icon">{icon}</span>
              <h1 className="text">{text}</h1>
            </NavLink>
          );
        })}
        <NavLink to="/role" className="link" key={1}>
          <span className="icon">
            <FaUserAlt />
          </span>
          <h1 className="text">Administration</h1>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="nav-link">
      {links.map((link) => {
        const { text, path, icon, id } = link;
        return (
          <NavLink to={path} key={id} className="link">
            <span className="icon">{icon}</span>
            <h1 className="text">{text}</h1>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

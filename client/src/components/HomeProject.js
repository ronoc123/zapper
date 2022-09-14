import { FaWindowRestore } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeProject = ({ title, description, user_name, id }) => {
  return (
    <div className="project">
      <div className="project-title">{title}</div>
      <div className="top-container"></div>
      <div className="bottom-container">
        <div></div>
        <div></div>
        <Link to={`/project/${id}`} className="project-link">
          View
        </Link>
        <Link to={`/project`} className="project-link-all">
          More
        </Link>
      </div>
    </div>
  );
};

export default HomeProject;

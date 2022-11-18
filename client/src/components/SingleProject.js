import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { BsTrash } from "react-icons/bs";
import ContainedButtons from "./Button";

const SingleProject = ({ title, description, user_name, id }) => {
  const { deleteProject } = useAppContext();
  return (
    <div className="project">
      <div>{title}</div>
      <div className="big-screen description">{description}</div>
      <div className="big-screen medium-screen">{user_name}</div>
      <div className="links ticket-links">
        <Link to={`/project/${id}`} className=" btn-link details-btn">
          Details
        </Link>
        <Link to={`/editproject/${id}`} className="btn-link edit-btn">
          Edit
        </Link>
        <div
          className=" btn-link trash-icon"
          onClick={() => {
            deleteProject(id);
          }}
        >
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

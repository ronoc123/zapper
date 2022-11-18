import React from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import SingleDev from "./SingleDev";
import ContainedButtons from "./Button";

const Project = () => {
  const { singleProject, devOnProject, user } = useAppContext();

  if (user[0].user_role === "admin" || user[0].user_role === "manager") {
    return (
      <div className="project-container">
        <div className="project-title">
          <h1 className="title">Title</h1>
          {singleProject[0]?.title}
        </div>
        <div className="project-description big-screen">
          <h1 className="title">Decription</h1>
          {singleProject[0]?.description}
        </div>
        <div className="project-creator big-screen">
          <h1 className="title">Developers</h1>
          <div className="devs">
            {devOnProject.length < 1 && "No Developers on Project"}
            {devOnProject.map((dev, index) => {
              return <SingleDev key={index} value={dev} />;
            })}
          </div>
          <Link to={`/projectdev/${singleProject[0]?.id}`} className="add-dev">
            <ContainedButtons name={"Add Developer"}></ContainedButtons>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-container">
      <div className="project-title">
        <h1 className="title">Title</h1>
        {singleProject[0]?.title}
      </div>
      <div className="project-description big-screen">
        <h1 className="title">Decription</h1>
        {singleProject[0]?.description}
      </div>
      <div className="project-creator big-screen">
        <h1 className="title">Developers</h1>
        <div className="devs">
          {devOnProject.length < 1 && "No Developers on Project"}
          {devOnProject.map((dev, index) => {
            return <SingleDev key={index} value={dev} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;

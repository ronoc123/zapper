import { useAppContext } from "../context/appContext.js";
import { useEffect } from "react";
import SingleProject from "./SingleProject.js";

const ProjectContainer = () => {
  const { projects, fetchProjects } = useAppContext();

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="project-container">
      <div className="project">
        <div className="project-title">title</div>
        <div className="project-description big-screen">description</div>
        <div className="project-creator big-screen medium-screen">creator</div>
        <div className="project-links">links</div>
      </div>
      {projects.map((project) => {
        const { id } = project;

        return <SingleProject key={id} {...project} />;
      })}
    </div>
  );
};

export default ProjectContainer;

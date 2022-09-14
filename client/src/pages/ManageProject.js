import Wrapper from "../assests/wrappers/ProjectPage.js";
import ProjectContainer from "../components/ProjectContainer.js";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext.js";

const ManageProject = () => {
  const { showAlert } = useAppContext();
  return (
    <Wrapper className="full-page">
      <div className="heading-container">
        <h1 className="title">Projects</h1>
        <Link className="create-btn" to="/addproject">
          New Project
        </Link>
      </div>
      {showAlert && <Alert />}
      <ProjectContainer />
    </Wrapper>
  );
};

export default ManageProject;

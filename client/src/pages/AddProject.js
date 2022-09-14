import Wrapper from "../assests/wrappers/AddProject.js";
import Alert from "../components/Alert.js";
import FormRow from "../components/FormRow.js";
import { useAppContext } from "../context/appContext.js";
const AddProject = () => {
  const {
    createProject,
    displayAlert,
    project_title,
    project_description,
    handleChange,
    showAlert,
  } = useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!project_title || !project_description) {
      displayAlert();
      return;
    }
    createProject();
  };

  const handleProjectInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper className="full-page">
      <form className="form-container" onSubmit={onSubmit}>
        <h1 className="title">New Project!</h1>
        {showAlert && <Alert />}
        <div className="input-container">
          <FormRow
            className="row"
            type="name"
            name="project_title"
            labelText="title"
            value={project_title}
            handleChange={handleProjectInput}
          />
          <div className="form-row">
            <label className="form-label">Description</label>
            <textarea
              type="name"
              value={project_description}
              name="project_description"
              onChange={handleProjectInput}
              className="form-input description"
            />
          </div>
          <button type="submit" className="btn create-btn">
            Submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddProject;

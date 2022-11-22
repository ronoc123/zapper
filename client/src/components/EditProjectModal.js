import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Wrapper from "../assests/wrappers/EditModal";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Alert from "../components/Alert";
import ContainedButtons from "../components/Button";

// Add x button to close and copy logic for the ticket edit option
// pass id down as props

const EditProjectModal = ({ id, setShowModal }) => {
  const {
    fetchSingleProject,
    singleProject,
    displayAlert,
    editProjectInfo,
    fetchProjects,
  } = useAppContext();

  const initialState = {
    title: singleProject[0]?.title || "",
    description: singleProject[0]?.description || "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = values;

    if (!title || !description) {
      displayAlert();
      return;
    }

    editProjectInfo(title, description, id);
    fetchProjects();
  };

  useEffect(() => {
    fetchSingleProject(id);
    setValues(initialState);
  }, [singleProject[0]?.title]);

  return (
    <Wrapper>
      <div className="sidebar">
        <form className="edit-container" onSubmit={onSubmit}>
          <div className="close-btn" onClick={() => setShowModal(false)}>
            <AiOutlineCloseCircle></AiOutlineCloseCircle>
          </div>
          <div className="title">
            <h2 className="title">Edit Project</h2>
            <Alert />
          </div>
          <div className="form-container">
            <FormRow
              type="text"
              name="title"
              labelText="Title"
              value={values.title}
              handleChange={handleChange}
            />
            <div className="form-row">
              <label className="form-label">Description</label>
              <textarea
                type="name"
                value={values.description}
                name="description"
                onChange={handleChange}
                className="description-input"
              />
            </div>
          </div>
          <div className="btn-container">
            <button className="position" type="submit">
              <ContainedButtons name={"Edit Project"}></ContainedButtons>
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default EditProjectModal;

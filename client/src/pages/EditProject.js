import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Wrapper from "../assests/wrappers/EditProject";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Alert from "../components/Alert";

const EditProject = () => {
  const { fetchSingleProject, singleProject, displayAlert, editProjectInfo } =
    useAppContext();

  const initialState = {
    title: singleProject[0]?.title || "",
    description: singleProject[0]?.description || "",
  };

  const [values, setValues] = useState(initialState);

  const { id } = useParams();

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
  };

  useEffect(() => {
    fetchSingleProject(id);
    setValues(initialState);
  }, [singleProject[0]?.title]);

  return (
    <Wrapper className="full-page">
      <form className="edit-container" onSubmit={onSubmit}>
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
          <button className="edit-btn" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditProject;

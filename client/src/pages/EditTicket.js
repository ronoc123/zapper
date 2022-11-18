import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import Wrapper from "../assests/wrappers/EditTicket";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FormRowSelect from "../components/FormRowSelect";
import ContainedButtons from "../components/Button";

const EditTicket = () => {
  const {
    fetchSingleTicket,
    singleTicket,
    displayAlert,
    editTicketInfo,
    ticket_type_options,
    ticket_severity_options,
    ticket_status_options,
    showAlert,
  } = useAppContext();

  const initialState = {
    title: singleTicket[0]?.title || "",
    description: singleTicket[0]?.description || "",
    type: singleTicket[0]?.type || "",
    severity: singleTicket[0]?.severity || "",
    status: singleTicket[0]?.status || "",
  };

  const [values, setValues] = useState(initialState);

  const { id } = useParams();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, description, type, severity, status } = values;

    if (!title || !description) {
      displayAlert();
      return;
    }

    editTicketInfo(title, description, type, severity, status, id);
  };

  useEffect(() => {
    fetchSingleTicket(id);
    setValues(initialState);
  }, [
    singleTicket[0]?.title,
    singleTicket[0]?.description,
    singleTicket[0]?.status,
    singleTicket[0]?.type,
    singleTicket[0]?.severity,
  ]);

  return (
    <Wrapper className="full-page">
      <form className="edit-container" onSubmit={onSubmit}>
        <h2 className="title">Edit Ticket</h2>
        <div className="form-container">
          {showAlert && <Alert />}
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
          <FormRowSelect
            labelText="Severity"
            name="severity"
            value={values.severity}
            handleChange={handleChange}
            list={ticket_severity_options}
          />
          <FormRowSelect
            labelText="Status"
            name="status"
            value={values.status}
            handleChange={handleChange}
            list={ticket_status_options}
          />
          <FormRowSelect
            labelText="Type"
            name="type"
            value={values.type}
            handleChange={handleChange}
            list={ticket_type_options}
          />
        </div>
        <div className="btn-container">
          <button className="position" type="submit">
            <ContainedButtons name={"Edit Ticket"}></ContainedButtons>
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditTicket;

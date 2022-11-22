import Wrapper from "../assests/wrappers/AddTicket.js";
import Alert from "../components/Alert.js";
import FormRow from "../components/FormRow.js";
import { useAppContext } from "../context/appContext.js";
import ContainedButtons from "../components/Button.js";
import FormRowSelect from "../components/FormRowSelect.js";
import { useParams } from "react-router-dom";

const AddTicket = () => {
  const {
    createTicket,
    displayAlert,
    ticket_title,
    ticket_description,
    ticket_severity,
    ticket_status,
    ticket_type,
    handleChange,
    showAlert,
    ticket_status_options,
    ticket_type_options,
    ticket_severity_options,
    singleProject,
  } = useAppContext();
  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !ticket_title ||
      !ticket_description ||
      !ticket_type ||
      !ticket_status ||
      !ticket_severity
    ) {
      displayAlert();
      return;
    }
    createTicket(id);
  };

  const handleTicketInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper className="full-page">
      <form className="form-container">
        <h1 className="title">New Ticket!</h1>
        {showAlert && <Alert />}
        <div className="input-container">
          <FormRow
            className="row"
            type="name"
            name="ticket_title"
            labelText="title"
            value={ticket_title}
            handleChange={handleTicketInput}
          />
          <div className="form-row">
            <label className="form-label">Description</label>
            <textarea
              type="name"
              value={ticket_description}
              name="ticket_description"
              onChange={handleTicketInput}
              className="form-input description"
            />
          </div>
          <FormRowSelect
            name="ticket_status"
            value={ticket_status}
            handleChange={handleTicketInput}
            list={ticket_status_options}
          />
          <FormRowSelect
            name="ticket_severity"
            value={ticket_severity}
            handleChange={handleTicketInput}
            list={ticket_severity_options}
          />
          <FormRowSelect
            name="ticket_type"
            value={ticket_type}
            handleChange={handleTicketInput}
            list={ticket_type_options}
          />
          <div onClick={onSubmit} className="position">
            <ContainedButtons
              name={"Add Ticket"}
              styled={"small"}
            ></ContainedButtons>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddTicket;

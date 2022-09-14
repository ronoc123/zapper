import FormRowSelect from "../components/FormRowSelect.js";
import FormRow from "../components/FormRow.js";
import { useAppContext } from "../context/appContext.js";

const SearchContainer = () => {
  const {
    handleChange,
    filter_ticket_type_options,
    filter_ticket_severity_options,
    filter_ticket_status_options,
    filter_text,
    filter_status,
    filter_severity,
    filter_type,
    addFilter,
    clearFilters,
  } = useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addFilter();
  };

  const handleTicketInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  return (
    <form className="search-container" onSubmit={onSubmit}>
      <h1 className="title-search">Search Form</h1>
      <div className="input-container">
        <FormRow
          type="name"
          name="filter_text"
          labelText="Search"
          value={filter_text}
          handleChange={handleTicketInput}
        />
        <FormRowSelect
          name="filter_status"
          value={filter_status}
          labelText="Status"
          handleChange={handleTicketInput}
          list={filter_ticket_status_options}
        />
        <FormRowSelect
          name="filter_severity"
          labelText="Severity"
          value={filter_severity}
          handleChange={handleTicketInput}
          list={filter_ticket_severity_options}
        />
        <FormRowSelect
          name="filter_type"
          labelText="Type"
          value={filter_type}
          handleChange={handleTicketInput}
          list={filter_ticket_type_options}
        />
        <button type="submit" className="search-btn btn">
          Search
        </button>
        <button className="clear-btn btn" onClick={() => clearFilters()}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchContainer;

import Wrapper from "../assests/wrappers/AddDevToProject";
import { useAppContext } from "../context/appContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import FormRow from "../components/FormRow";
import { AiOutlineUserAdd } from "react-icons/ai";
import ContainedButtons from "../components/Button";

const AddDevToProject = () => {
  const [search, setSearch] = useState(false);

  const {
    addToProject,
    fetchUsers,
    handleChange,
    addDevToProject,
    searchDev,
    addUserFilter,
    filtered_project_dev_options,
    projectDevOptions,
    getDevsOnSingleProject,
    devOnSingleProject,
  } = useAppContext();
  const { id } = useParams();

  const devSubmit = (userId) => {
    addToProject(id, userId);
    getDevsOnSingleProject(id);
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    addUserFilter();
    setSearch(true);
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  useEffect(() => {
    fetchUsers();
    getDevsOnSingleProject(id);
  }, []);

  return (
    <Wrapper className="full-page">
      {/* Search Bar BEGIN */}
      <form className="search-container">
        <FormRow
          type="text"
          name="searchDev"
          value={searchDev}
          handleChange={handleUserInput}
          labelText=" "
        />
        <ContainedButtons
          name={"Search"}
          func={searchSubmit}
        ></ContainedButtons>
        {/* <button className="search-btn" type="submit">
          Search
        </button> */}
      </form>
      {/* Search Bar END */}
      <div className="container">
        <div className="users-assigned-container">
          {/* Dev Assigned BEGIN */}
          <div className="dev-assigned-container">
            <h3 className="dev-title">Developers Assigned</h3>
            <div className="name-container">
              {devOnSingleProject?.map((dev, index) => {
                return (
                  <span key={index} className="dev-name">
                    {dev.length > 10 ? `${dev.substring(0, 10)}...` : dev}
                  </span>
                );
              })}
            </div>
          </div>
          {/* DEV Assigned END */}
        </div>
        {/* <div className="dev-container"> */}
        {/* Dev Option BEGIN */}
        <form className="option-container">
          {!search
            ? projectDevOptions.map((dev) => {
                return (
                  <div
                    className="dev-btn"
                    type="submit"
                    key={dev.user_id}
                    onClick={() => {
                      devSubmit(dev.user_id);
                    }}
                  >
                    <AiOutlineUserAdd />
                    <span className="span-text">{dev.user_name}</span>
                  </div>
                );
              })
            : filtered_project_dev_options.map((dev) => {
                return (
                  <div
                    className="dev-btn"
                    type="submit"
                    key={dev.user_id}
                    onClick={() => {
                      devSubmit(dev.user_id);
                    }}
                  >
                    <AiOutlineUserAdd className="icon" />
                    <span className="span-text">{dev.user_name}</span>
                  </div>
                );
              })}
        </form>
        {/* Dev Option END */}
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default AddDevToProject;

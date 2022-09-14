import Wrapper from "../assests/wrappers/AddDevToProject";
import { useAppContext } from "../context/appContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import FormRow from "../components/FormRow";
import { AiOutlineUserAdd } from "react-icons/ai";

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
      <div className="container">
        <div className="users-assigned-container">
          {/* Dev Assigned BEGIN */}
          <div className="dev-assigned-container">
            <h3 className="dev-title">Developers Assigned</h3>
            <div className="name-container">
              {devOnSingleProject?.map((dev, index) => {
                return (
                  <span key={index} className="dev-name">
                    {dev} <br />
                  </span>
                );
              })}
            </div>
          </div>
          {/* DEV Assigned END */}
        </div>
        <div className="dev-container">
          {/* Search Bar BEGIN */}
          <form className="search-container" onSubmit={searchSubmit}>
            <FormRow
              type="text"
              name="searchDev"
              value={searchDev}
              handleChange={handleUserInput}
              labelText="Search"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          {/* Search Bar END */}
          {/* Dev Option BEGIN */}
          <form className="option-container">
            {!search
              ? projectDevOptions.map((dev) => {
                  return (
                    <button
                      className="dev-btn"
                      type="submit"
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit(dev.user_id);
                      }}
                    >
                      <AiOutlineUserAdd />
                      <span className="span-text">{dev.user_name}</span>
                    </button>
                  );
                })
              : filtered_project_dev_options.map((dev) => {
                  return (
                    <button
                      className="dev-btn"
                      type="submit"
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit();
                      }}
                    >
                      <AiOutlineUserAdd className="icon" />
                      <span className="span-text">{dev.user_name}</span>
                    </button>
                  );
                })}
          </form>
          {/* Dev Option END */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AddDevToProject;

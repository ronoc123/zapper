import Wrapper from "../assests/wrappers/Administration";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormRowSelect from "../components/FormRowSelect";
import Alert from "../components/Alert";

const ManageRole = () => {
  const {
    fetchUsers,
    handleChange,
    searchDev,
    addUserFilter,
    filtered_project_dev_options,
    projectDevOptions,
    fetchSingleUser,
    adminEdit,
    updateUserInformation,
    displayAlert,
  } = useAppContext();

  const initial = {
    username: adminEdit[0]?.user_name || "",
    email: adminEdit[0]?.email || "",
    user_role: adminEdit[0]?.user_role || "",
    id: adminEdit[0]?.user_id || "",
  };

  const [search, setSearch] = useState(false);
  const [values, setValues] = useState(initial);

  const devSubmit = (userId) => {
    fetchSingleUser(userId);
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    addUserFilter();
    setSearch(true);
  };

  const editSubmit = (e) => {
    e.preventDefault();

    const { username, user_role, email, id } = values;

    console.log(username, user_role, email, id);

    if (!username || !user_role || !email || !id) {
      displayAlert();
      return;
    }

    updateUserInformation(id, username, user_role, email);
  };

  const handleUserChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleTicketInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);

    handleChange({ name, value });
  };

  useEffect(() => {
    fetchUsers();
    setValues(initial);
  }, [adminEdit[0]?.user_name, adminEdit[0]?.email, adminEdit[0]?.user_role]);

  return (
    <Wrapper className="full-page">
      <div className="container">
        <div className="user-search-container">
          <form className="single-user-container" onSubmit={editSubmit}>
            <div className="heading">
              <h2 className="user-title">User Information</h2>
              <Alert />
            </div>
            <FormRow
              type="text"
              labelText="Username"
              name="username"
              value={values?.username}
              handleChange={handleUserChange}
            />
            <FormRow
              type="text"
              labelText="Email"
              name="email"
              handleChange={handleUserChange}
              value={values?.email}
            />
            <FormRowSelect
              name="user_role"
              value={values?.user_role}
              labelText="Role"
              handleChange={handleUserChange}
              list={["user", "manager", "admin"]}
            />
            <h3>User ID : {values?.id}</h3>
            <div className="btns">
              <button type="submit" className="edit-btn">
                Save Changes
              </button>
            </div>
          </form>
          <form className="search-container" onSubmit={searchSubmit}>
            <FormRow
              type="text"
              name="searchDev"
              value={searchDev}
              handleChange={handleTicketInput}
              labelText="Search"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="user-info-container">
          <form className="user-container">
            {!search
              ? projectDevOptions.map((dev) => {
                  return (
                    <div
                      className="dev-btn"
                      // type="submit"
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
                      // type="submit"
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
        </div>
      </div>
    </Wrapper>
  );
};

export default ManageRole;

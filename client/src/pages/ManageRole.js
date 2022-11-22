import Wrapper from "../assests/wrappers/Administration";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormRowSelect from "../components/FormRowSelect";
import Alert from "../components/Alert";
import ContainedButtons from "../components/Button";

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

    handleChange({ name, value });
  };

  useEffect(() => {
    fetchUsers();
    setValues(initial);
  }, [adminEdit[0]?.user_name, adminEdit[0]?.email, adminEdit[0]?.user_role]);

  return (
    <Wrapper>
      <form className="search-container">
        <FormRow
          type="text"
          name="searchDev"
          value={searchDev}
          handleChange={handleTicketInput}
          labelText=" "
        />
        <div onClick={searchSubmit} className="button-container">
          <ContainedButtons name={"Submit"} styled={"large"}></ContainedButtons>
        </div>
      </form>
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
            <div className="btns">
              <div type="submit" className="save-btn">
                <ContainedButtons
                  name={"Save Changes"}
                  styled={"medium"}
                ></ContainedButtons>
              </div>
            </div>
          </form>
        </div>
        <div className="user-info-container">
          <form className="user-container">
            {!search
              ? projectDevOptions.map((dev) => {
                  return (
                    <div
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit(dev.user_id);
                      }}
                      className="user-row"
                    >
                      <div className="icon">
                        <div className="letter">
                          {dev.user_name[0].toUpperCase()}
                        </div>
                      </div>
                      <div className="dev-btn" key={dev.user_id}>
                        <AiOutlineUserAdd />
                        <div className="span-text">{dev.user_name}</div>
                      </div>
                    </div>
                  );
                })
              : filtered_project_dev_options.map((dev) => {
                  return (
                    <div
                      className="user-row"
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit(dev.user_id);
                      }}
                    >
                      <div className="icon">
                        <div className="letter">
                          {dev.user_name[0].toUpperCase()}
                        </div>
                      </div>
                      <div className="dev-btn" key={dev.user_id}>
                        <AiOutlineUserAdd />
                        <div className="span-text">{dev.user_name}</div>
                      </div>
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

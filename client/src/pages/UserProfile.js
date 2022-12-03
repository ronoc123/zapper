import { useAppContext } from "../context/appContext";
import Wrapper from "../assests/wrappers/UserProfile.js";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
import Alert from "../components/Alert.js";
import { useState } from "react";
import ContainedButtons from "../components/Button";

const UserProfile = () => {
  const {
    displayAlert,
    isLoading,
    handleChange,
    showAlert,
    user_name,
    email,
    editUserInfo,
    user,
  } = useAppContext();

  const [name, setName] = useState(user[0]?.user_name);
  const [userEmail, setUserEmail] = useState(user[0]?.email);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !userEmail) {
      displayAlert();
      return;
    }
    editUserInfo({ name, userEmail });
  };

  return (
    <Wrapper>
      <form className="form-container">
        <h1 className="title">Profile</h1>
        {showAlert && <Alert />}
        <FormRow
          className="row"
          type="text"
          name="name"
          labelText="Username"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormRow
          className="row"
          type="text"
          name="userEmail"
          labelText="Email"
          value={userEmail}
          handleChange={(e) => setUserEmail(e.target.value)}
        />
        <div className="save-btn">
          <ContainedButtons
            name="Save Changes"
            styled="medium"
            func={onSubmit}
          ></ContainedButtons>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserProfile;

import React from "react";
import Wrapper from "../assests/wrappers/RegisterPage.js";
import FormRow from "../components/FormRow.js";
import Alert from "../components/Alert.js";
import { Logo } from "../components/index.js";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext.js";
import { useNavigate } from "react-router-dom";
import ContainedButtons from "../components/Button.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const {
    isLoading,
    displayAlert,
    showAlert,
    setupUser,
    user,
    testAccountLogin,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Logging in User...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Registering User...",
      });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const demoLogin = (role) => {
    testAccountLogin(role);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <div className="center">
            <Logo />
            <span>Zapper</span>
          </div>
          <h3 className="title">{values.isMember ? "Login" : "Register"}</h3>
          {showAlert && <Alert />}
          <div>
            {!values.isMember && (
              <FormRow
                type="name"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            )}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* name input */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
          </div>

          <div className="position">
            <ContainedButtons
              func={onSubmit}
              name={values.isMember ? "Login" : "Register"}
              styled="large"
            ></ContainedButtons>
          </div>

          <p className="paragraph">
            {values.isMember ? "Not a member yet? " : " Already a member? "}
            <button className="member-btn" type="button" onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
      <div className="demo-container">
        <button className="demo-btn" onClick={() => demoLogin("developer")}>
          Demo Developer
        </button>
        <button className="demo-btn" onClick={() => demoLogin("manager")}>
          Demo Project Manager
        </button>
        <button className="demo-btn" onClick={() => demoLogin("admin")}>
          Demo Admin
        </button>
        <div className="demo-text">Live Demo Accounts</div>
      </div>
    </Wrapper>
  );
};

export default Register;

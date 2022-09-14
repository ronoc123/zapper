import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  .form-container {
    display: grid;
    width: 30vw;
    height: 60%;
    min-width: 400px;
    grid-template-rows: 1fr 6fr;
    background: white;
    border-radius: var(--radius);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .profile-container {
    margin-top: 2.5rem;
    justify-self: center;
    text-align: center;
  }
  .form-row {
    display: grid;
    text-align: left;
  }
  .title {
    text-align: center;
    margin-top: 3rem;
    font-size: 2.2rem;
  }
  .form-label {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .form-input {
    font-size: 1.5rem;
    border-radius: var(--radius);
    padding-left: 0.5rem;
  }
  .role {
    text-align: center;
  }
  .submit-btn {
    margin-top: 1rem;
    background: var(--clr-primary-1);
    color: white;
    font-size: 1.2rem;
    transition: var(--transition);
    padding-bottom: 0.7rem;
  }

  .submit-btn:hover {
    font-size: 1.25rem;
    cursor: pointer;
  }
  .password-btn {
    display: block;
    margin-top: 1rem;
  }
  .alert {
    text-align: center;
  }
`;

export default Wrapper;

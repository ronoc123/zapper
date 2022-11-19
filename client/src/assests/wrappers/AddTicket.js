import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 2rem;

  .form-container {
    display: grid;
    grid-template-rows: 5rem auto;
    height: 50vh;
    display: grid;
    background: white;
    width: 25vw;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    min-width: 20rem;
    min-height: 30rem;
    padding-bottom: 1rem;
  }
  .input-container {
    display: grid;
    align-items: center;
    justify-content: center;
    justify-self: center;
    grid-template-columns: 1fr;
    width: 100%;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    width: 70%;
    justify-self: center;
    min-width: 10rem;
  }
  .title {
    text-align: center;
    margin-top: 1rem;
  }
  .form-label {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .form-input {
    height: 1.5rem;
    font-size: 1.1rem;
    padding-left: 0.2rem;
  }
  .description {
    height: 3.5rem;
  }
  .form-select {
    height: 1.5rem;
  }
  .create-btn {
    margin-top: 1rem;
    width: 50%;
    justify-self: center;
    transition: var(--transition);
    cursor: pointer;
  }
  .create-btn:hover {
    transform: scale(1.05);
  }
  .alert {
    text-align: center;
  }
  .position {
    justify-self: center;
  }
`;

export default Wrapper;

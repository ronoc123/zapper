import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 2rem;
  .form-container {
    background: var(--clr-primary-3);
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    max-width: 25rem;
    min-width: 23rem;
    min-height: 25rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 0.5rem;
  }
  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  .title {
    text-align: center;
    font-size: 2rem;
  }

  .form-row {
    display: grid;
    font-size: 1.5rem;
    width: 80%;
    justify-self: center;
  }

  .form-label {
    font-size: 2rem;
    align-self: flex-end;
    text-transform: capitalize;
  }
  .form-input {
    height: 2rem;
    font-size: 1rem;
  }
  .create-btn {
    height: 3rem;
    width: 30%;
    justify-self: center;
    font-size: 1.3rem;
    transition: var(--transition);
  }
  .position {
    justify-self: center;
    align-self: center;
    border: none;
    margin-bottom: 1rem;
  }

  .create-btn:hover {
    background: var(--clr-primary-1);
    color: black;
    cursor: pointer;
    transform: scale(1.02);
  }
  .description {
    height: 5rem;
    font-size: 1rem;
  }
  .form-input {
    padding: 0.2rem;
  }
  .form-input:focus {
    outline: none;
  }

  .alert {
    text-align: center;
  }
`;

export default Wrapper;

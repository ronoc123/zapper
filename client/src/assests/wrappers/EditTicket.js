import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .edit-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr 4rem;
    height: 50%;
    width: 20%;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    justify-self: center;
    min-width: 20rem;
    min-height: 30rem;
    background: white;
    padding: 0.5rem;
  }
  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem 1fr;
    width: 80%;
    justify-self: center;
  }
  .form-input {
    height: 1.5rem;
    font-size: 1rem;
  }
  .form-select {
    font-size: 1rem;
  }
  .form-label {
    align-self: flex-end;
    font-size: 1.2rem;
  }
  .title {
    text-align: center;
  }
  .btn-container {
    justify-self: center;
    align-self: center;
  }
  .edit-btn {
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
    border: 1px solid grey;
    padding: 0.3rem;
  }
`;

export default Wrapper;

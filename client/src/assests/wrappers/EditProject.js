import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .edit-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr 5rem;
    height: 50%;
    width: 20%;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    justify-self: center;
    min-width: 20rem;
    min-height: 25rem;
    background: white;
    padding: 0.5rem;
  }
  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
  .btn-container {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .edit-btn {
    background: none;
    border: none;
    font-size: 1.3rem;
    padding: 0.7rem;
    border: 1px solid grey;
    transition: var(--transition);
    cursor: pointer;
  }
  .edit-btn:hover {
    transform: scale(1.05);
  }
  .position {
    justify-self: center;
    align-self: center;
    border: none;
    margin-bottom: 1rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem 2rem;
    width: 70%;
    justify-self: center;
  }
  .form-label {
    align-self: flex-end;
    font-size: 1.2rem;
  }
  .title {
    text-align: center;
  }
  .form-input {
    padding-left: 0.3rem;
  }

  .description-input {
    padding-left: 0.3rem;
    height: 5rem;
  }
`;

export default Wrapper;

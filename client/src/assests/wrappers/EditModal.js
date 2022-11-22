import styled from "styled-components";

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: var(--transition);
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
  }
  .edit-container {
    background: white;
    min-width: 22rem;
    width: 30%;
    min-height: 30rem;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 0.5rem;
  }
  .edit-btn {
    cursor: pointer;
  }
  .title {
    display: grid;
    justify-self: center;
  }
  .position {
    border: none;
  }
  .form-container {
    width: 80%;
  }
  .description-input {
    height: 5rem;
  }
  .form-row {
    display: grid;
    font-size: 2rem;
  }
  .form-input {
    height: 3rem;
    font-size: 1.5rem;
  }
  .close-btn {
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
    cursor: pointer;
    font-size: 3rem;
    color: darkred;
  }
`;

export default Wrapper;

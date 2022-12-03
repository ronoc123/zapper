import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  .form-container {
    display: grid;
    background: white;
    border-radius: var(--radius);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-top: 5rem;
    max-width: 25rem;
    min-height: 25rem;
    width: 90%;
    padding: 0rem 1.5rem 1.5rem 1.5rem;
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
    font-size: 1.3rem;
    border-radius: var(--radius);
    padding-left: 0.2rem;
  }

  .alert {
    text-align: center;
  }
  .save-btn {
    justify-self: center;
    margin-top: 2rem;
  }
`;

export default Wrapper;

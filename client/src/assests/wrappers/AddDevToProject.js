import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  .search-container {
    justify-self: center;
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    width: 100%;
    height: 2.5rem;
    font-size: 2rem;
  }
  .container {
    width: 70%;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 5rem;
  }
  .users-assigned-container {
    background: white;
    max-height: 25rem;
    overflow: scroll;
    overflow-x: hidden;
    border-radius: 0.5rem;
    box-shadow: var(--dark-shadow);
  }
  .option-container {
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 5rem;
    overflow: scroll;
    overflow-x: hidden;
    max-height: 40rem;
    border-radius: 0.5rem;
    box-shadow: var(--dark-shadow);
  }
  .dev-btn {
    display: flex;
    place-items: center;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
    padding-left: 2rem;
    transition: var(--transition);
  }
  .dev-btn:hover {
    padding-left: 3rem;
    background: var(--clr-primary-1);
    color: white;
  }
  .dev-title {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
  .name-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2rem;
    place-items: center;
    margin-top: 1rem;
  }
  .paragraph {
    text-align: center;
  }

  @media screen and (max-width: 1400px) {
    .option-container {
      grid-template-columns: 1fr 1fr;
    }
    .name-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 1000px) {
    .search-container {
      width: 90%;
    }
    .container {
      grid-template-columns: 1fr;
      width: 90%;
    }
    .option-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;

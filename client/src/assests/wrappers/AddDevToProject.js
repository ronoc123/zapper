import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-self: center;
    width: 80vw;
  }

  .users-assigned-container {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .dev-container {
    /* width: 80%; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid black;
    border-left: none;
    background: white;
  }
  .search-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    padding-left: 1rem;
  }
  .search-btn {
    background: none;
    border: none;
    cursor: pointer;
    align-self: end;
    justify-self: center;
    height: 2rem;
    font-size: 1.1rem;
    background: #d6ffc9;
    color: #377523;
    width: 80%;
    transition: var(--transition);
    border-radius: var(--radius);
    padding-bottom: 0.2rem;
  }

  .search-btn:hover {
    background: #377523;
    color: white;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .form-label {
    font-size: 1.2rem;
  }
  .form-input {
    height: 2rem;
    font-size: 1.2rem;
    width: 90%;
  }
  .dev-btn {
    background: none;
    border: none;
    display: block;
    font-size: 1.2rem;
    cursor: pointer;
    justify-self: left;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 0.2rem;
    align-self: center;
    transition: var(--transition);
    align-items: center;
  }
  .dev-btn:hover {
    transform: scale(1.1);
  }
  .icon {
  }
  .span-text {
    text-transform: capitalize;
  }

  .option-container {
    padding-top: 1rem;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 3rem;
  }
  .dev-name {
    font-size: 1.2rem;
    text-transform: capitalize;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .dev-title {
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 1px solid black;
  }
  .dev-assigned-container {
    background: white;
    border: 1px solid black;

    /* margin-right: 2rem; */
  }
  .users-assigned-container {
    /* background: white; */
  }

  .name-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1400px) {
    .option-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 1100px) {
    .option-container {
      grid-template-columns: 1fr 1fr;
    }
    .name-container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 750px) {
    .option-container {
      grid-template-columns: 1fr;
    }
    .dev-name {
      font-size: 1rem;
    }
    .dev-title {
      font-size: 1.1rem;
    }
    .name-container {
      grid-template-columns: 1fr;
    }
    .search-container {
      grid-template-columns: 2fr 1fr;
    }
    .search-btn {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;

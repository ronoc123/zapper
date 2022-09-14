import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  .container {
    display: grid;
    width: 80vw;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 3fr;
  }
  .user-search-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid black;
    border-bottom: none;
    background: white;
    margin-top: 2rem;
  }
  .user-info-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .user-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 3rem;
    border: 1px solid black;
    margin-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: scroll;
    overflow-x: hidden;
    background: white;
    margin-bottom: 3rem;
  }
  .search-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    border-left: 1px solid black;
    padding-left: 1rem;
  }

  .search-btn {
    background: none;
    border: none;
    cursor: pointer;
    height: 2rem;
    font-size: 1.1rem;
    background: #d6ffc9;
    color: #377523;
    width: 80%;
    transition: var(--transition);
    border-radius: var(--radius);
    padding-bottom: 0.2rem;
    margin-top: 2rem;
    justify-self: center;
  }

  .search-btn:hover {
    background: #377523;
    color: white;
  }
  .form-row {
    display: grid;
    grid-auto-rows: 2rem;
  }
  .form-input {
    font-size: 1.3rem;
    width: 90%;
    /* height: 2rem; */
  }
  .form-select {
    /* height: 2rem; */
    font-size: 1.3rem;
  }
  .form-label {
    font-size: 1.2rem;
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
    transform: scale(1.05);
  }
  .single-user-container {
    padding: 1rem;
    display: grid;
  }
  .user-title {
    text-align: center;
    display: grid;
    grid-auto-rows: 0.5rem;
  }
  .btns {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .edit-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: block;
    justify-self: center;
    width: 100%;
    font-size: 1rem;
    border: 1px solid grey;
    padding-bottom: 0.2rem;
    transition: var(--transition);
  }

  @media screen and (max-width: 1400px) {
    .user-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 800px) {
    .user-container {
      grid-template-columns: 1fr 1fr;
    }
    .search-container {
      grid-template-columns: 2fr 1fr;
      border-left: none;
      border-top: 1px solid black;
    }
    .search-btn {
      font-size: 0.8rem;
    }
    .form-select {
      height: 1.3rem;
      font-size: 1rem;
    }
    .form-input {
      height: 1.3rem;
      font-size: 1rem;
    }
    .form-label {
      font-size: 1.3rem;
    }
    .user-title {
      display: none;
    }
    .user-search-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto 5rem;
    }
  }
`;

export default Wrapper;

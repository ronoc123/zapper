import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 10rem auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 0.5rem;

  .title-search {
    text-align: left;
    padding-left: 2rem;
    font-weight: 500;
  }

  .search-container {
    background: var(--clr-primary-3);
    display: grid;
    grid-template-rows: 1fr 2fr;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--dark-shadow);
    width: 100%;
    height: 70%;
    justify-self: center;
  }
  .clear-btn {
    align-self: end;
    height: 2rem;
    margin-left: 2rem;
    transition: var(--transition);
    background: #ffbcb8;
    color: #871109;
    cursor: pointer;
  }

  .search-btn {
    align-self: end;
    height: 2rem;
    margin-left: 2rem;
    transition: var(--transition);
    background: #d6ffc9;
    color: #377523;
    cursor: pointer;
  }

  .search-btn:hover {
    background: #377523;
    color: white;
  }
  .clear-btn:hover {
    background: #871109;
    color: white;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    text-align: left;
    margin-left: 2rem;
  }

  .form-label {
    align-self: flex-end;
    font-size: 1.2rem;
  }

  .heading {
    display: grid;
    /* grid-template-columns: 2fr 1fr; */
    /* height: 8rem; */
    align-items: end;
    width: 100%;
  }
  .heading-title {
    justify-content: center;
    font-size: 3rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  .heading-btn {
    justify-self: right;
    font-size: 1.1rem;
    transition: var(--transition);
  }

  .heading-btn:hover {
    background: var(--clr-primary-3);
    color: white;
    cursor: pointer;
    transform: scale(1.02);
  }
  .ticket-container {
    height: 98%;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    overflow-x: hidden;
    grid-auto-rows: 4rem;
    max-height: 32rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
    border-top: 4px solid black;
    background: white;
  }
  .ticket {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 2fr;
    padding-left: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
  }

  .ticket:nth-child(even) {
    background: #f0eff4;
  }

  .ticket-title,
  .ticket-description,
  .ticket-type,
  .ticket-severity,
  .ticket-status,
  .ticket-dev {
    font-size: 2rem;
    text-transform: capitalize;
    color: black;
    border-bottom: 1px solid black;
  }
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: left;
    column-gap: 1rem;
  }

  .trash-icon {
    color: #871109;
    margin-top: 0.4rem;
    opacity: 0.7;
    cursor: pointer;
    transition: var(--transition);
  }
  .trash-icon:hover {
    transform: scale(1.05);
    color: red;
  }
  @media screen and (max-width: 1300px) {
    grid-template-rows: 2rem 20rem auto;
    .input-container {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .medium {
      display: none;
    }
    .ticket {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-rows: 2rem 20rem auto;
    .input-container {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .small {
      display: none;
    }
    .ticket {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;

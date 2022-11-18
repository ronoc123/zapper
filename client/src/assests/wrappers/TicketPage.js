import styled from "styled-components";
const Wrapper = styled.div`
  text-align: center;
  margin-left: 10rem;
  margin-right: 10rem;
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
    padding: 2rem;
    padding-left: 0rem;
    box-shadow: var(--dark-shadow);
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
  .no-tickets {
    text-align: center;
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
  .form-input {
    height: 2rem;
    width: 100%;
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
    max-height: 60%;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
    border-top: 1px solid black;
    background: white;
  }
  .ticket {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1.5fr;
    padding-left: 1rem;
    gap: 2rem;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
    align-items: center;
    .center1 {
      font-size: 1rem;
    }
  }
  .center {
    display: grid;
    place-items: center;
  }
  .center1 {
    display: grid;
    place-items: center;
  }

  .form-select {
    height: 2rem;
    width: 100%;
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
    /* border-bottom: 1px solid black; */
  }
  .ticket-description-info {
    font-size: 1rem;
  }
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: left;
    column-gap: 1rem;
    align-items: center;
  }
  .ticket-link {
    padding: 0.4rem;
    width: 100%;

    /* height: 100%; */
  }
  .details-btn {
    /* background: #cafcd1; */
    /* color: #004009; */
    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .edit-btn {
    /* background: #fdffcc; */
    /* color: #8b8000; */
    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 550;
  }

  .trash-icon {
    display: grid;
    font-size: 1.2rem;
    place-content: center;
    /* color: #630a00; */
    /* background: #ff9f94; */
    cursor: pointer;
    transition: var(--transition);
    border-radius: 0.2rem;
  }
  .icon-align {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    font-size: 1.3rem;
  }

  .grey {
    background: #e3e3e3;
    /* justify-self: left; */
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .green {
    background: #d0ffcf;
    /* justify-self: left; */
    padding: 0.5rem;

    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .blue {
    background: #b3d2ff;
    /* justify-self: left; */
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .red {
    background: #ff9c9c;
    /* justify-self: left; */
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .orange {
    background: #ffecbf;
    /* justify-self: left; */
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 4rem;
    margin-right: 4rem;
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
    margin-left: 2rem;
    margin-right: 2rem;
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
    .input-container {
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 2fr 1fr;
    }
  }
`;

export default Wrapper;

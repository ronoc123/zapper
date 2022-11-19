import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  .title {
    justify-self: start;
    font-size: 3rem;
    font-weight: 500;
  }
  .heading-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }
  .alert {
    text-align: center;
    font-size: 1.3rem;
  }
  .description {
    font-size: 1rem;
  }
  .heading-title {
    text-align: center;
  }

  .project-container {
    background: white;
    max-height: 80%;
    align-self: flex-start;
    /* max-width: 80%; */
    justify-self: center;
    display: grid;
    overflow: scroll;
    overflow-x: hidden;
    grid-template-columns: 1fr;
    grid-auto-rows: 4rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-top: 4px solid black;
    border-radius: 0.5rem;
  }

  .project:nth-child(even) {
    background: #f0eff4;
  }
  .project:nth-child(odd) {
    background: white;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
  }

  .project-title,
  .project-description,
  .project-creator,
  .project-links {
    font-size: 2rem;
    text-transform: capitalize;
    color: black;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: left;
    align-content: center;
    column-gap: 1rem;
  }
  .btn-link {
    padding: 0.4rem;
  }
  .details-btn {
    background: #cafcd1;

    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .edit-btn {
    background: #fdffcc;

    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 550;
  }

  .trash-icon {
    display: grid;
    place-content: center;

    color: black;
    background: #ff9f94;
    cursor: pointer;
    transition: var(--transition);
    border-radius: 0.2rem;
  }

  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    width: 80%;
  }
  .position {
    justify-self: right;
    align-self: center;
    background: #5b8a8c;
  }

  @media screen and (max-width: 1500px) {
    margin-left: 4rem;
    margin-right: 4rem;
    .project {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      column-gap: 1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
    }

    .medium-screen {
      display: none;
    }
    .title {
      font-size: 1.5rem;
    }
    .create-btn {
      font-size: 1rem;
      width: 50%;
      height: 2rem;
    }

    .btn-link {
      font-size: 0.9rem;
      padding: 0.2rem;
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 2rem;
    margin-right: 2rem;
    .project {
      display: grid;
      grid-template-columns: 1fr 1fr;

      font-size: 1rem;
    }
    .big-screen {
      display: none;
    }
    .title {
      font-size: 1.5rem;
    }
    .create-btn {
      font-size: 1rem;
      width: 80%;
      height: 80%;
    }
  }
`;

export default Wrapper;

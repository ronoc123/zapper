import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  /* height: 80vh; */

  .title {
    justify-self: start;
    font-size: 3rem;
    /* width: 35vw; */
    font-weight: 500;
  }
  .heading-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
    justify-self: center;
  }
  .alert {
    text-align: center;
    font-size: 1.3rem;
  }
  .description {
    font-size: 1rem;
  }

  .create-btn {
    display: grid;
    align-items: center;
    padding-bottom: 0.2rem;
    transition: var(--transition);
    background: #c2dfe3;
    width: 30%;
    min-width: 10rem;
    height: 50%;
    min-height: 3rem;
    font-size: 1.2rem;
    font-weight: 580;
    align-self: end;
    justify-self: end;
    text-align: center;
    border-radius: var(--radius);
  }
  .create-btn:hover {
    background: black;
    color: white;
    cursor: pointer;
    transform: scale(1.02);
  }

  .project-container {
    background: white;
    height: 70vh;
    align-self: flex-start;
    width: 80vw;
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
    /* border: 2px solid red; */
  }
  .btn-link {
    /* border: 1px solid red; */
    padding: 0.4rem;
  }
  .details-btn {
    background: #cafcd1;
    /* color: #004009; */
    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .edit-btn {
    background: #fdffcc;
    /* color: #8b8000; */
    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 550;
  }

  .trash-icon {
    display: grid;
    place-content: center;
    /* color: #630a00; */
    color: black;
    background: #ff9f94;
    cursor: pointer;
    transition: var(--transition);
    border-radius: 0.2rem;
  }
  /* .trash-icon:hover {
    transform: scale(1.05);
    color: red;
  } */
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    width: 80%;
  }

  @media screen and (max-width: 1500px) {
    .project {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      column-gap: 1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
    }
    .project-container {
      height: 90vh;
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
    .project {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-left: 1rem;
      font-size: 1.2rem;
    }
    .project-container {
      height: 90vh;
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

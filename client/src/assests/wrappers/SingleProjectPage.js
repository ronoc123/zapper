import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3rem 3fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 2rem;
  .project-container {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    grid-template-rows: 2rem auto;
    height: 7rem;
    background: var(--clr-primary-3);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    position: relative;
  }

  .ticket-btn {
    justify-self: start;
    align-self: center;
    justify-self: end;
    height: 60%;
    padding-top: 0.1rem;
    width: 30%;
    border-radius: var(--radius);
    background: #d6ffc9;
    transition: var(--transition);
    color: #377523;
  }
  .ticket-btn:hover {
    /* font-size: 1.3rem; */
    color: white;
    background: #377523;
    border: none;
  }

  .ticket-container {
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    overflow-x: hidden;
    grid-auto-rows: 4rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-top: 4px solid black;
    background: white;
    max-height: 35rem;
  }
  .ticket {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 2fr;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
  }
  .title {
    display: grid;
    grid-template-columns: 1fr 8fr;
    font-size: 1.2rem;
    border-bottom: 1px solid black;
  }
  .title-1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.2rem;
  }
  .title-text {
    justify-self: left;
  }

  .ticket:nth-child(even) {
    background: #f0eff4;
  }

  .ticket-title,
  .ticket-description,
  .ticket-type,
  .ticket-severity,
  .ticket-status,
  .ticket-devs {
    font-size: 2rem;
    text-transform: capitalize;
    color: black;
    border-bottom: 1px solid black;
  }
  .project-creator {
    display: grid;
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: 0.75fr 1fr 1fr; */
  }

  .add-dev {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    justify-self: end;
    background: var(--clr-primary-3);
    border: 1px solid grey;
    font-size: 0.7rem;
    transition: var(--transition);
  }

  .add-dev:hover {
    font-size: 0.75rem;
  }
  .trash-icon {
    color: #871109;
    margin-top: 0.5rem;
    opacity: 0.7;
    cursor: pointer;
    transition: var(--transition);
  }
  .trash-icon:hover {
    transform: scale(1.05);
    color: red;
  }
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: left;
    column-gap: 1rem;
  }

  @media screen and (max-width: 1400px) {
    grid-template-rows: 1fr 7rem auto;
    .project-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 3fr;
      height: 20rem;
    }
    .title {
      align-self: flex-end;
    }
    .medium {
      display: none;
    }
    .ticket-btn {
      width: 30%;
      height: 2rem;
      /* padding-top: 0.3rem; */
      padding-bottom: 0.3rem;
    }
    .ticket {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 7rem auto;
    .ticket-btn {
      width: 50%;
      height: 2rem;
      padding-top: 0.3rem;
    }

    .title-1 {
      font-size: 0.8rem;
    }
    .project-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 3fr;
      height: 20rem;
    }
    .title {
      align-self: flex-end;
    }

    .medium {
      display: none;
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

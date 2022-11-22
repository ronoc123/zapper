import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  grid-template-columns: 1fr;
  text-align: center;
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
    margin-bottom: 1rem;
    /* border: 2px solid red; */
  }

  .ticket-btn {
    display: grid;
    place-content: center;
    justify-self: start;
    align-self: center;
    justify-self: end;
    min-height: 3rem;
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
    /* height: 60vh; */
    margin-top: 1rem;
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
    width: 100%;
  }
  .ticket {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 2fr;
    column-gap: 1rem;
    font-size: 1.2rem;
    align-content: center;
    border-bottom: 1px solid lightgray;
    padding-left: 0.5rem;
    .center1 {
      font-size: 1rem;
    }
  }
  .position {
    justify-self: right;
    align-self: center;
  }
  .no-title {
    text-align: center;
    margin-top: 0.5rem;
  }
  .center {
    display: grid;
    place-items: center;
  }
  .center1 {
    display: grid;
    place-items: center;
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
    font-size: 1.7rem;
    text-transform: capitalize;
    color: black;
  }
  .project-creator {
    display: grid;
  }

  .add-dev {
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
    justify-self: end;
    background: #bffcbb;
    color: #2a5428;
    font-weight: 600;
  }
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: left;
    width: 50%;
  }
  .ticket-link {
    display: grid;
    place-content: center;
    /* text-align: center; */
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
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .blue {
    background: #b3d2ff;
    /* justify-self: left; */
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .red {
    background: #ff9c9c;
    /* justify-self: left; */
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .orange {
    background: #ffecbf;
    /* justify-self: left; */
    padding: 0.3rem;
    border-radius: 0.5rem;
    color: black;
    text-transform: capitalize;
  }

  .trash-icon {
    cursor: pointer;
    padding-bottom: 0.5rem;
  }
  .edit-btn {
    cursor: pointer;
  }

  @media screen and (max-width: 1400px) {
    .project-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 3fr;
      min-height: 20rem;
      width: 100%;

      margin-right: 4rem;
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
    margin-left: 1rem;
    margin-right: 1rem;
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

      margin-right: 1rem;
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
    .ticket-link {
      font-size: 1.2rem;
      display: grid;
      place-content: center;
    }
  }
`;

export default Wrapper;

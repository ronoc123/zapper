import styled from "styled-components";

const Wrapper = styled.div`
  /* margin-left: 15rem; */
  /* margin-right: 15rem; */
  display: grid;

  .project-container {
    width: 80%;
    max-width: 100rem;
    justify-self: center;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 5rem;
  }
  .main-title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .project {
    min-height: 20rem;
    min-width: 17rem;
    background: white;
    box-shadow: var(--dark-shadow);
    color: #232b2b;
    transition: var(--transition);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
  }
  .project:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .project-icon {
    position: absolute;
    font-size: 1.5rem;
    left: 0.5rem;
    top: 0.5rem;
  }
  .project-link {
    display: grid;
    align-items: center;
    color: #377523;
    background: #d6ffc9;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    padding: 1rem;
  }
  .project-link-all {
    display: grid;
    align-items: center;
    background: #fdffcc;
    color: #8b8000;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 0.5rem;
  }

  .stats-container {
    width: 80%;
    justify-self: center;
    max-width: 100rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 1rem;
    gap: 2rem;
    margin-top: 2rem;
    justify-self: center;
  }
  .stat-title {
    justify-self: start;
  }

  .stat {
    background: white;
    box-shadow: var(--dark-shadow);
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-left: 4rem;
    padding-right: 4rem;
    border-bottom: 0.25rem solid black;
    padding-top: 0.5rem;
  }
  .stat-icon {
    font-size: 3rem;
    justify-self: end;
  }
  .stat-amount {
    font-size: 3rem;
    font-weight: 600;
    justify-self: start;
  }
  .icon-container-green {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #d6ffc9;
    color: #377523;
  }
  .icon-container-red {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #ffbcb8;
    color: #871109;
  }
  .icon-container-blue {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    border-radius: 0.5rem;
    align-items: center;
    background: #c4e5ff;
    color: #345d7d;
  }

  .blue {
    color: #345d7d;
  }
  .green {
    color: #377523;
  }
  .red {
    color: #871109;
  }
  .top-container {
    background: #dcecf9;
  }

  .bottom-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 4rem;
    padding: 2rem;
  }

  .project-title {
    position: absolute;
    display: grid;
    align-items: center;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    font-size: 1.3rem;
    background: #3b444b;
    padding: 1rem;
    color: white;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
  .project-creator {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding-left: 0.5rem;
    font-size: 1.2rem;
    padding-right: 0.5rem;
    column-gap: 1rem;
    align-items: center;
  }
  .span-title {
    font-size: 1.6rem;
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 1800px) {
    .project-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
  }

  @media screen and (max-width: 1400px) {
    .project-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .stats-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1000px) {
    .project-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .stats-container {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 0.7rem;
      grid-column-gap: 0rem;
      justify-self: center;
      /* min-width: 22rem; */
    }
  }

  @media screen and (max-width: 700px) {
  }
`;

export default Wrapper;

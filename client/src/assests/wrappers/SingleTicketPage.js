import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    column-gap: 1rem;
  }
  .ticket-dev-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    row-gap: 1rem;
  }
  .ticket-container {
    background: white;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    font-size: 1.2rem;
    font-weight: bold;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr 1fr;
  }
  .text-ticket {
    font-size: 1.1rem;
    font-weight: normal;
  }
  .dev-container {
    background: white;
    width: 100%;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto;
  }

  .form-row-devs {
    height: 1.8rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }
  .devs-btn {
    background: none;
    border: 1px solid grey;
    cursor: pointer;
    font-size: 1rem;
  }

  .single-dev-name {
    text-transform: capitalize;
  }

  .dev-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .dev-names {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 2rem;
  }
  .comment-container {
    display: grid;
    grid-template-rows: 0.5fr 1fr 8fr;
    background: white;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    max-height: 48.5rem;
    width: 100%;
  }
  .comment {
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    overflow-x: hidden;
    grid-auto-rows: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .comment-creator {
    font-weight: bold;
  }
  .comment-date {
    color: #525252;
  }
  .form-label {
    background: #ed9702;
    text-align: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    text-transform: capitalize;
    color: white;
    font-weight: 600;
  }
  .form-input {
    height: 2rem;
    border: none;
    border-bottom: 1px solid lightgrey;
    padding-left: 0.25rem;
  }

  .form-input:focus {
    border: none;
    border-bottom: 1px solid black;
  }

  .form-row {
    display: grid;
    grid-template-columns: 50px 11fr 2fr;
    height: 1rem;
    column-gap: 1rem;
  }

  .comment-btn {
    background: none;
    border: 1px solid lightgrey;
    height: 3rem;
    width: 100%;
    padding-bottom: 0.2rem;
    align-self: center;
    justify-self: center;
    cursor: pointer;
  }

  .comment-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .single-comment {
  }

  @media screen and (max-width: 1400px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      row-gap: 2rem;
    }
    .comment-container {
      width: 100%;
    }
    .comment-btn {
      height: 2rem;
    }
  }
  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      row-gap: 2rem;
      justify-self: center;
    }
    .comment-container {
    }
    .comment-btn {
      height: 2rem;
      font-size: 0.7rem;
      padding: 0.5rem;
    }
    .form-select-devs {
      height: 2rem;
      width: 100%;
    }
    .devs-btn {
      font-size: 0.7rem;
    }
    .form-row-devs {
      grid-template-columns: 2fr 1fr;
    }
    .dev-info {
      grid-template-columns: 1fr;
    }
    .info-container {
      font-size: 0.8rem;
    }
    .text-ticket {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 380px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      row-gap: 2rem;
      justify-self: left;
      margin-left: 0.8rem;
    }
    .comment-container {
    }
    .comment-btn {
      height: 2rem;
      font-size: 0.7rem;
      padding: 0.5rem;
    }
    .form-select-devs {
      height: 2rem;
      width: 100%;
    }
    .devs-btn {
      font-size: 0.7rem;
    }
    .form-row-devs {
      grid-template-columns: 2fr 1fr;
    }
    .dev-info {
      grid-template-columns: 1fr;
    }
    .info-container {
      font-size: 0.8rem;
    }
    .text-ticket {
      font-size: 0.7rem;
    }
  }
`;

export default Wrapper;

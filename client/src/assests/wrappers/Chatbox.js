import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 1rem;
  border: 3px solid white;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background: #a3c0ff;
  width: 20rem;
  transition: var(--transition);

  .click-container {
    display: grid;
    place-items: center;
  }
  .contact-title {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    font-size: 1.5rem;
    padding: 0.3rem;
    cursor: pointer;
    /* border: 2px solid red; */
    width: 100%;
  }
  .title-text {
    justify-self: right;
  }
  .icon {
    display: grid;
    align-items: center;
    justify-self: left;
    margin-left: 1rem;
  }
  .chat-box {
    height: 30rem;
    background: white;
    box-shadow: var(--dark-shadow);
    border: 2px solid white;
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    overflow: scroll;
    overflow-x: hidden;
  }
  .bot-msg {
    background: #e9eaeb;
    padding: 0.5rem;
    margin: 0.5rem 0.2rem;
    border-radius: 0.3rem;
    justify-self: start;
    margin-right: 4rem;
  }
  .text-msg {
    display: flex;
    background: #037cff;
    padding: 0.5rem;
    margin: 0.5rem 0.2rem;
    border-radius: 0.3rem;
    color: white;
    justify-self: end;
    margin-left: 4rem;
  }
  .form-row {
    display: grid;
    place-items: center;
    width: 100%;
  }
  .form-input {
    width: 95%;
    margin-left: 1rem;
    height: 1.5rem;
    border: 1px solid lightgrey;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
  }

  .search-bar {
    display: grid;
    grid-template-columns: 1fr 2rem;

    width: 100%;
    background: #d0d3d9;
  }
  .send-btn {
    background: none;
    border: none;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  input:focus {
    outline-offset: 0px;
    outline: none;
  }
`;

export default Wrapper;

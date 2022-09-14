import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--clr-primary-5);
  column-gap: 5rem;
  .demo-container {
    display: grid;
    padding: 2rem;
    font-size: 2rem;
    gap: 4rem;
    border-top: 0.5rem solid var(--clr-primary-1);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-self: left;
    height: 55vh;
    width: 25vw;
    background: var(--clr-white);
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 30rem;
    min-width: 25rem;
  }
  .demo-btn {
    background: var(--clr-primary-5);
    border: 2px solid var(--clr-primary-1);
    color: var(--clr-primary-black);
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .demo-text {
    text-align: center;
    align-self: center;
  }
  .form-container {
    border-top: 0.5rem solid var(--clr-primary-1);
    display: grid;
    width: 40vw;
    height: 55vh;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    position: relative;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 30rem;
    min-width: 20rem;
    transition: var(--transition);
    text-align: center;
    padding-top: 2rem;
    justify-self: right;
  }

  .form {
    margin-top: -2rem;
    /* border: 2px solid red; */
  }

  .form-row {
    text-align: left;
  }

  .form-container:hover {
    /* transform: scale(1.009); */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  }

  .title {
    text-align: center;
    font-size: 2rem;
    padding-top: 1rem;
  }
  .form-row {
    background-color: transparent;
    display: grid;
    margin: 1rem;
  }

  .form-input {
    color: var(--clr-primary-1);
    border-radius: 0.5rem;
    height: 3.3vh;
    width: 15vw;
    padding-left: 1rem;
    min-height: 1.5rem;
    min-width: 20rem;
  }
  .form-label {
    margin: 0.5rem 0;
    text-transform: capitalize;
  }

  .logo {
    /* position: absolute;
    top: 1.5rem;
    left: 1.5rem; */
  }
  span {
    padding-left: 1.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--clr-primary-1);
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-btn {
    height: 3%;
    width: 60%;
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
    /* align-self: center; */
    transition: var(--transition);
    margin: 1rem 0;
  }

  .login-btn:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .member-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    color: var(--clr-primary-1);
    font-size: 1rem;
    cursor: pointer;
  }

  .alert {
    font-size: 1.2rem;
  }

  .alert-fail {
    background: #eb9683;
    border-radius: 0.5rem;
    color: white;
  }

  .alert-success {
    background: #65b876;
    border-radius: 0.5rem;
    color: white;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-self: center;
    margin-top: 3rem;
    background: var(--clr-primary-5);
    column-gap: 0rem;
    row-gap: 5rem;
    .demo-container {
      justify-self: center;
      height: 55vh;
      width: 25vw;
      background: var(--clr-white);
      border-radius: 0.5rem;
      background: white;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      min-height: 30rem;
      min-width: 25rem;
    }
    .form-container {
      border-top: 0.5rem solid var(--clr-primary-1);
      display: grid;
      width: 40vw;
      height: 55vh;
      justify-self: center;
      max-width: 450px;
      position: relative;
      border-radius: 0.5rem;
      background: white;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      min-height: 30rem;
      min-width: 25rem;
      transition: var(--transition);
      text-align: center;
      padding-top: 2rem;
    }
  }
`;
export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.nav`
  height: 7rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: var(--clr-primary-3);
  padding-left: 3rem;
  margin-bottom: 1rem;
  border-top: 1px solid #dfe6ed;
  border-bottom: 1px solid #dfe6ed;
  .center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
  }
  .position {
    margin-right: 1rem;
    justify-self: right;
    border: none;
  }

  span {
    padding-left: 1.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--clr-primary-1);
  }

  .nav-link {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    display: flex;
    justify-content: flex-start;
    font-size: 0.8rem;
    justify-self: center;
  }

  .icon {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }

  .link {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    padding-right: 2.5rem;
    gap: 1rem;
    transition: var(--transition);
  }

  .link:hover {
    background: #87888a;
    .icon {
      color: var(--clr-primary-3);
    }
    .text {
      color: white;
    }
  }
  .text {
    color: #545d63;
  }

  .about {
    justify-self: right;
    padding-right: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .user-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
  .item-1:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .icon-1 {
  }

  .profile-link {
    display: grid;
    grid-template-columns: 2fr 1fr;
    color: #545d63;
    font-size: 1.2rem;
  }

  .name {
    color: black;
    font-size: 1.3rem;
    padding-left: 0.5rem;
  }
  .icon-1 {
    font-size: 2rem;
    justify-self: right;
    color: var(--clr-primary-1);
  }

  .item {
    padding-left: 2rem;
  }
  .notification {
    position: absolute;
    top: -0.5rem;
    right: -0.3rem;
    font-size: 0.8rem;
    color: black;
    color: #545d63;
  }

  .logout-btn {
    width: 5.5rem;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.2rem;
    background: var(--clr-primary-1);
    color: white;
    justify-self: right;
    margin-right: 1rem;
    padding-bottom: 0.8rem;
    /* margin-top: 0.5rem; */
  }

  .logout-btn:hover {
    transform: scale(1.1);
  }
  .small-screen {
    align-self: center;
    justify-self: end;
    font-size: 2rem;
    margin-left: 2rem;
    transition: var(--transition);
  }

  .small-screen:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    .small-screen {
      display: none;
    }
  }

  @media screen and (max-width: 1600px) {
    .nav-link {
      display: none;
    }
    .user-info {
      display: none;
    }
  }
`;

export default Wrapper;

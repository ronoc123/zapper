import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-primary-1);
  height: 100vh;
  display: grid;
  align-items: center;

  .grid {
    text-align: center;
  }
  .title {
    font-size: 5rem;
  }
  .home-btn {
    background: var(--clr-primary-2);
    font-size: 2rem;
    transition: var(--transition);
  }
  .home-btn:hover {
    background: var(--clr-primary-3);
    color: white;
    font-size: 2.2rem;
  }
`;

export default Wrapper;

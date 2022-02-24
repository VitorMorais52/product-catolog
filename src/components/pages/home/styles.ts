import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem 0;
  background-color: #e1e0e0;

  @media (max-width: 1375px) {
    width: 100%;
    padding: 1rem;
  }

  @media (min-width: 1375px) {
    min-width: 1375px;
  }

  .content {
    max-width: 1075px;
    margin: 0 auto;
  }

  .title-grid {
    margin: 2rem 0;

    h1 {
      font-weight: 400;
    }

    hr {
      border-width: 1px;
      background-color: white;
      border-style: solid;
      border-color: white;
    }
  }

  .container-grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 25px;

  @media (min-width: 1075px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1075px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

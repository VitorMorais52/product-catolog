import styled from "styled-components";

export const Container = styled.header`
  margin-top: 1rem;
  padding: 2rem 0;
  border-style: solid;
  border-width: 3px 3px 0 3px;
  border-color: white;

  @media (max-width: 1375px) {
    width: 100%;
    padding: 1rem;
  }

  @media (min-width: 1375px) {
    min-width: 1375px;
  }

  .content {
    display: flex;
    max-width: 1075px;
    margin: 0 auto;
  }

  img {
    filter: invert(1);
  }

  button {
    border: none;
    overflow: visible;
    background: transparent;
    cursor: pointer;
  }

  .left {
    @media (max-width: 600px) {
      justify-content: flex-start;
    }
  }
  .right {
    justify-content: end;
  }
  .mid {
    justify-content: center;
  }
  .info {
    display: flex;
    align-items: center;
    flex: 1;

    span {
      font-size: 18px;
      font-weight: 500;
    }

    * ~ * {
      @media (max-width: 600px) {
        padding-left: 1rem;
      }

      @media (min-width: 600px) {
        padding-left: 3rem;
      }
    }
  }
  .pages {
    @media (max-width: 600px) {
      visibility: hidden;
      display: none;
    }
  }
`;

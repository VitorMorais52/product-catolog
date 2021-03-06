import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  font-size: 12px;
  @media (max-width: 300px) {
    max-width: 70vw;
  }
  @media (min-width: 300px) {
  }

  .addButton {
    display: flex;
    margin: 2rem 0;

    button {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.32);
      color: white;
      font-weight: 700;
    }
  }
`;

export const ContainerProduct = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.32);

  div ~ & {
    margin-top: 1rem;
  }

  .remove-product {
    width: 100%;
    padding: 4px 4px 0 0;
    display: flex;
    justify-content: flex-end;
    color: rgba(0, 0, 0, 0.32);
  }
`;

export const NoProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  height: 100%;
  span {
    font-style: bold;
    margin-right: 0.5rem;
  }
`;

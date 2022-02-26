import styled from "styled-components";

type Props = {
  activateEffects?: boolean;
};

type PropsImage = {
  isLoaded: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  cursor: pointer;

  ${({ activateEffects }) =>
    activateEffects &&
    `&:hover {
      box-shadow: 0 0 20px rgba(33, 33, 33, 0.2);

      img {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }`}

  img {
    width: 250px;
    max-height: 270px;
    padding: 1rem 1rem 0 1rem;
  }

  .legend {
    padding: 1rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 500;

    .detail-products {
      padding: 0.5rem 0;
      color: gray;
    }

    .addButton {
      display: flex;

      button {
        width: 100%;
        background-color: #e1e0e0;
        color: black;
        font-weight: 700;
      }
    }
  }

  .legend-cart {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #e1e0e0;
    padding: 0 1rem;
    border-radius: 4px;

    span {
      font-weight: bold;
    }
  }
`;

export const InputQuantity = styled.input`
  max-width: 80px;
  border: none;
  background: inherit;
  cursor: inherit;
  text-align: center;
  background: rgba(0, 0, 0, 0.32);
  color: white;
  border-radius: 4px;
`;

export const Image = styled.div<PropsImage>`
  ${({ isLoaded }) =>
    !isLoaded &&
    `
    {
    visibility: hidden;
    display: none;
  }

  `}
`;

export const LoadingImg = styled.div<PropsImage>`
  height: 100%;
  display: flex;
  padding-top: 1rem;
  justify-content: flex-end;
  ${({ isLoaded }) =>
    isLoaded &&
    `
    {
    visibility: hidden;
    display: none;
  }

  `}
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(33, 33, 33, 0.2);

    img {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

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
`;

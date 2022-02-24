import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);

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

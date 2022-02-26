import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 400;
  top: 50%;
  left: 50%;
  padding: 3rem;
  text-align: center;
  background-color: white;
  border-radius: 4px;
  transform: translate(-50%, -50%);

  .content {
    justify-content: center;
    span {
      margin-right: 0.5rem;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

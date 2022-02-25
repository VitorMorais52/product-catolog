import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  @media (max-width: 300px) {
    max-width: 70vw;
  }
  @media (min-width: 300px) {
    max-width: 250px;
  }
`;

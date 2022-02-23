import styled from "styled-components";
import Badge from "@mui/material/Badge";

export const Container = styled.header`
  margin-top: 1rem;
  padding: 2rem 0;

  @media (max-width: 1375px) {
    width: 100%;
    padding: 1rem;
  }

  @media (min-width: 1375px) {
    min-width: 1375px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1075px;
  margin: 0 auto;

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

    * ~ * {
      @media (max-width: 600px) {
        padding-left: 1rem;
      }

      @media (min-width: 600px) {
        padding-left: 3rem;
      }
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
  }
  .pages {
    @media (max-width: 600px) {
      visibility: hidden;
      display: none;
    }
  }
`;

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "black",
    color: "white",
    top: 26,
    padding: "0 4px",
    margin: "0 4px",
  },
}));

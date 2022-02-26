import styled from "styled-components";
import Badge from "@mui/material/Badge";

export const Container = styled.header`
  width: 100%;
  top: 0;
  padding: 1rem 0;
  position: fixed;
  background-color: white;
  z-index: 1;
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
        margin-left: 1rem;
      }

      @media (min-width: 600px) {
        margin-left: 3rem;
      }
    }
  }
  .right {
    justify-content: end;
    @media (max-width: 1075px) {
      margin-right: 10px;
    }
  }
  .mid {
    justify-content: center;
  }
  .info {
    display: flex;
    align-items: center;
    flex: 1;

    svg {
      fill: black;
    }

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

    a {
      color: #000;
      text-decoration: none;
      font-size: 18px;
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

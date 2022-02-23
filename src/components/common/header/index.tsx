import { useState } from "react";
import Drawer from "@mui/material/Drawer";

//stylesheets and Icons
import { Container } from "./styles";

import logoIcon from "../../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(!isOpenDrawer)}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: "1rem",
          }}
        >
          Menu
        </div>
      </Drawer>
      <div className="content">
        <div className="left info">
          <button type="button" onClick={() => setIsOpenDrawer(!isOpenDrawer)}>
            <MenuIcon fontSize="large" />
          </button>
          <div className="pages">
            <span>Collections</span>
            <span>Categories</span>
          </div>
        </div>
        <div className="mid info">
          <img src={logoIcon} alt="logo" />
        </div>
        <div className="right info">
          <button type="button">
            <SearchIcon fontSize="large" />
          </button>
          <button type="button">
            <ShoppingBagOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Header;

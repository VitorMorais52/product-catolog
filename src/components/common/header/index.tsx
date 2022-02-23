import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

//components
import Menu from "../menu";

//stylesheets and Icons
import { Container, Content, StyledBadge } from "./styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import logoIcon from "../../../assets/logo.svg";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenDrawer(true);
  };
  const handleCloseMenu = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Container>
      <Menu isOpen={isOpenDrawer} requestClose={handleCloseMenu} />

      <Content>
        <div className="left info">
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className="pages">
            <span>Collections</span>
            <span>Categories</span>
          </div>
        </div>
        <div className="mid info">
          <img src={logoIcon} alt="logo" />
        </div>
        <div className="right info">
          <IconButton>
            <SearchIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <StyledBadge badgeContent={3}>
              <ShoppingBagOutlinedIcon fontSize="large" />
            </StyledBadge>
          </IconButton>
        </div>
      </Content>
    </Container>
  );
}

export default Header;

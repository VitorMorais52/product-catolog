import { useState, useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//common components
import Menu from "../menu";
import MenuCart from "../menuCart";

//@mui components
import IconButton from "@mui/material/IconButton";

//stylesheets and Icons
import { Container, Content, StyledBadge } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logoIcon from "../../../assets/logo.svg";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  const { quantityItems } = useContext(ProductsContext);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenCart = () => {
    setIsOpenCart(true);
  };
  const handleCloseCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <Container>
      <Menu isOpen={isOpenMenu} requestClose={handleCloseMenu} />

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
          <IconButton onClick={handleOpenCart}>
            <StyledBadge badgeContent={quantityItems()}>
              <ShoppingBagOutlinedIcon fontSize="large" />
            </StyledBadge>
          </IconButton>
        </div>
      </Content>

      <MenuCart isOpen={isOpenCart} requestClose={handleCloseCart} />
    </Container>
  );
}

export default Header;

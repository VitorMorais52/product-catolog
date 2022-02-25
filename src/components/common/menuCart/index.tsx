import Drawer from "@mui/material/Drawer";
import { useState, useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//components
import Product from "../product";

//@mui components
import Button from "@mui/material/Button";

//stylesheets and icons
import { Container, NoProducts } from "./styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

type MenuCartProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuCartProps) {
  const { products } = useContext(ProductsContext);
  return (
    <Drawer open={isOpen} onClose={requestClose} anchor="right">
      {products.length > 0 ? (
        <Container>
          {products.map((product) => (
            <Product product={product} key={product.id} renderInCart={true} />
          ))}
          <div className="addButton">
            <Button variant="contained">
              <span>FINALIZAR COMPRA</span>
            </Button>
          </div>
        </Container>
      ) : (
        <NoProducts>
          <span>Seu carrinho está vazio</span>
          <SentimentVeryDissatisfiedIcon />
        </NoProducts>
      )}
    </Drawer>
  );
}

export default Menu;

import Drawer from "@mui/material/Drawer";
import { useState, useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//components
import Product from "../product";

//stylesheets
import { Container } from "./styles";

type MenuCartProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuCartProps) {
  const { products } = useContext(ProductsContext);
  return (
    <Drawer open={isOpen} onClose={requestClose} anchor="right">
      <Container>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    </Drawer>
  );
}

export default Menu;

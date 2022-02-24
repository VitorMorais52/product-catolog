import { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../../services/context/products";

//@mui components
import Button from "@mui/material/Button";

//stylesheets
import { Container } from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type ProductProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Record<string, number>;
  title: string;
};

type ProductComponentProps = {
  product: ProductProps;
};

function Product({ product }: ProductComponentProps) {
  console.log(product);

  const { products, storeProducts } = useContext(ProductsContext);

  const addProductCart = (product: ProductProps) => {
    storeProducts([...products, product]);
  };

  return (
    <Container key={product.id} onClick={() => addProductCart(product)}>
      <div className="image">
        <img src={product.image} alt="product" />
      </div>
      <div className="legend">
        <span>{product.title}</span>
        <span>R$ {product.price}</span>
        <div className="addButton">
          <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Product;

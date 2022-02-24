import { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../../services/context/products";

//@mui components
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

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
  product?: ProductProps;
  index?: number;
};

function Product({ product, index }: ProductComponentProps) {
  const { products, storeProducts } = useContext(ProductsContext);

  const addProductCart = (product: ProductProps) => {
    storeProducts([...products, product]);
  };

  return (
    <>
      {product?.id ? (
        <Container key={product.id}>
          <div className="image">
            <img src={product.image} alt="product" />
          </div>
          <div className="legend">
            <span>{product.title}</span>
            <span>R$ {product.price}</span>
            <div className="addButton">
              <Button
                variant="contained"
                endIcon={<AddShoppingCartIcon />}
                onClick={() => addProductCart(product)}
              >
                <span>Add to cart</span>
              </Button>
            </div>
          </div>
        </Container>
      ) : (
        <Container key={index}>
          <Skeleton variant="rectangular" width={250} height={415}></Skeleton>
        </Container>
      )}
    </>
  );
}

export default Product;

import { useEffect, useState, useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//@mui components
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

//stylesheets and icons
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
  quantity: number;
};

type ProductComponentProps = {
  product?: ProductProps;
};

function Product({ product }: ProductComponentProps) {
  const { addSingleProduct } = useContext(ProductsContext);

  const addProductCart = (product: ProductProps) => {
    addSingleProduct(product);
  };

  return (
    <>
      {product?.id ? (
        <Container>
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
        <Container>
          <Skeleton variant="rectangular" width={250} height={415}></Skeleton>
        </Container>
      )}
    </>
  );
}

export default Product;

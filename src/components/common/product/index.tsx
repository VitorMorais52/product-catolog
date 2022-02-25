import { useEffect, useState, useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//@mui components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";

//stylesheets and icons
import { Container, InputQuantity } from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
  renderInCart?: boolean;
};

function Product({ product, renderInCart }: ProductComponentProps) {
  const { addSingleProduct, removeSingleProduct } = useContext(ProductsContext);

  const addProductCart = (product: ProductProps, quantity?: number) => {
    addSingleProduct(product, quantity);
  };

  const removeProductCart = (product: ProductProps) => {
    removeSingleProduct(product);
  };

  return (
    <>
      {product?.id ? (
        <Container activateEffects={!renderInCart}>
          <div className="image">
            <img src={product.image} alt="product" />
          </div>
          {!renderInCart ? (
            <div className="legend">
              <span>{product.title}</span>
              <span className="detail-products">$ {product.price}</span>
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
          ) : (
            <div className="legend-cart">
              <span>$ {product.price}</span>
              <IconButton>
                <RemoveIcon onClick={() => removeProductCart(product)} />
              </IconButton>
              <InputQuantity
                value={product.quantity}
                onChange={({ target }) =>
                  addProductCart(product, parseInt(target.value))
                }
              />
              <IconButton onClick={() => addProductCart(product)}>
                <AddIcon />
              </IconButton>

              <span>$ {product.price * product.quantity}</span>
            </div>
          )}
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

import Drawer from "@mui/material/Drawer";
import { useContext } from "react";

//services
import { ProductsContext } from "../../../services/context/products";

//components
import Product from "../product";

//@mui components
import Button from "@mui/material/Button";

//stylesheets and icons
import { Container, ContainerProduct, NoProducts } from "./styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CancelIcon from "@mui/icons-material/Cancel";

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

type MenuCartProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuCartProps) {
  const { products, removeSingleProduct } = useContext(ProductsContext);

  const removeTottalyProduct = (product: ProductProps) => {
    removeSingleProduct(product, true);
  };
  return (
    <Drawer open={isOpen} onClose={requestClose} anchor="right">
      {products.length > 0 ? (
        <Container>
          {products.map((product) => (
            <ContainerProduct>
              <div
                className="remove-product"
                onClick={() => removeTottalyProduct(product)}
              >
                <CancelIcon />
              </div>
              <Product product={product} key={product.id} renderInCart={true} />
            </ContainerProduct>
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

import { useEffect, useState } from "react";

//stylesheets
import { Container, Grid } from "./styles";

type Products = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Record<string, number>;
  title: string;
};

function Home() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    if (products.length > 0) console.log(products[0]);
  }, [products]);

  return (
    <Container>
      <div className="content">
        <div className="title-grid">
          <h1>Products</h1>
          <hr />
        </div>
        <div className="container-grid">
          <Grid>
            {products.map((product) => (
              <div className="product">
                <img src={product.image} alt="product" />
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Home;

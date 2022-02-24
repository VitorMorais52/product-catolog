import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

//components
import MenuCart from "../../common/menuCart";

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

  const { data, isFetching } = useQuery<Products[]>(
    "products",
    async () => {
      const response = await axios.get("https://fakestoreapi.com/products");

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <Container>
      <div className="content">
        <div className="title-grid">
          <h1>Products</h1>
          <hr />
        </div>
        <div className="container-grid">
          <Grid>
            {data?.map((product) => (
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

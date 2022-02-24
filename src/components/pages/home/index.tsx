import axios from "axios";
import { useQuery } from "react-query";

//components
import Product from "../../common/product";

//stylesheets
import { Container, Grid } from "./styles";

type ProductProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Record<string, number>;
  title: string;
};

function Home() {
  const { data, isFetching } = useQuery<ProductProps[]>(
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
            {(data || Array.from({ length: 8 })).map((product, index) => (
              <Product product={product} index={index} />
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Home;

import React from "react";
import ReactDOM from "react-dom";

//services
import { ProductsProvider } from "./services/context/products";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

import App from "./App";

//stylesheets
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </QueryClientProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

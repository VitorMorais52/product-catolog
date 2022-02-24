import React from "react";
import ReactDOM from "react-dom";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

import App from "./App";

//stylesheets
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

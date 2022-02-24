import React, { createContext, useState, useEffect, ReactNode } from "react";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Record<string, number>;
  title: string;
};

type ProductsContextProps = {
  products: Product[];
  storeProducts: (data: Product[]) => void;
};

const DEFAULT_VALUE = {
  products: [] as Product[],
  storeProducts: () => {},
};

export const ProductsContext =
  createContext<ProductsContextProps>(DEFAULT_VALUE);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(DEFAULT_VALUE.products);

  const storeProducts = (data: Product[]) => {
    setProducts(data);
  };

  return (
    <ProductsContext.Provider value={{ products, storeProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

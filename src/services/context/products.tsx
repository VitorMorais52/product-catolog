import React, { createContext, useState, useEffect, ReactNode } from "react";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Record<string, number>;
  title: string;
  quantity: number;
};

type ProductsContextProps = {
  products: Product[];
  storeProducts: (data: Product[]) => void;
  addSingleProduct: (data: Product, quantity?: number) => void;
  removeSingleProduct: (data: Product, isTottaly?: boolean) => void;
  quantityItems: () => number;
};

const DEFAULT_VALUE = {
  products: [] as Product[],
  storeProducts: () => {},
  addSingleProduct: () => {},
  removeSingleProduct: () => {},
  quantityItems: () => 0,
};

export const ProductsContext =
  createContext<ProductsContextProps>(DEFAULT_VALUE);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(DEFAULT_VALUE.products);

  const storeProducts = (data: Product[]) => {
    setProducts(data);
  };

  const addSingleProduct = (data: Product, quantity?: number) => {
    const indexAlreadyExists = products.findIndex(
      (product) => product.id === data.id
    );

    if (indexAlreadyExists !== -1) {
      const oldProduct = products[indexAlreadyExists];

      const hasPropertyQuantity = Reflect.has(oldProduct, "quantity");

      const newProducts = products;

      if (hasPropertyQuantity) {
        const newQuantity = quantity ? quantity : oldProduct.quantity + 1;

        newProducts[indexAlreadyExists].quantity = newQuantity;
      } else
        newProducts[indexAlreadyExists] = {
          ...oldProduct,
          quantity: 1,
        };

      setProducts([...newProducts]);
    } else {
      setProducts([...products, { ...data, quantity: 1 }]);
    }
  };

  const removeSingleProduct = (data: Product, isTotally?: boolean) => {
    const indexProduct = products.findIndex(
      (product) => product.id === data.id
    );

    if (products[indexProduct]?.quantity === 1 || isTotally) {
      const newProducts = products.filter((product) => product.id !== data.id);
      setProducts([...newProducts]);
    } else {
      const newProducts = products;
      newProducts[indexProduct].quantity -= 1;
      setProducts([...newProducts]);
    }
  };

  const quantityItems = () => {
    const quantity = products.reduce(
      (previousValue, { quantity: currentValue }) =>
        previousValue + currentValue,
      0
    );
    return quantity;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        storeProducts,
        addSingleProduct,
        removeSingleProduct,
        quantityItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

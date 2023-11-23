import React, { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);

  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  const handleClearBasket = () => {
    setOrderedProducts([]);
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
        onProductSelect={handleProductSelect}
        onClearBasket={handleClearBasket}
      />
      <main>
        <header>
          <h1>Witaj!</h1>
        </header>
        <hr />

        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onProductSelect={handleProductSelect}
              orderedProducts={orderedProducts}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;

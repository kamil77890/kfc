// Product.jsx
import React, { useState } from "react";
import "./Product.scss";
import ProductModal from "../ProductModal/ProductModal";

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);

  const { id, name, price, description, imageUrl } = product;
  const isOrdered = orderedProducts.some(
    (orderedProduct) =>
      orderedProduct.id === id && orderedProduct.count === count
  );

  const orderCount = orderedProducts
    .filter((orderedProduct) => orderedProduct.id === id)
    .reduce((total, orderedProduct) => total + orderedProduct.count, 0);

  const handleButtonClick = () => {
    onProductSelect({ ...product, count }, true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <div>
            <button onClick={handleButtonClick}>
              {isOrdered ? `In Basket (${orderCount})` : "+"}
            </button>
            <span>{count}</span>
          </div>
        </footer>
      </div>
      {isModalOpen && (
        <ProductModal
          product={product}
          orderedProducts={orderedProducts}
          count={count}
          onClose={handleCloseModal}
          onProductSelect={onProductSelect}
        />
      )}
    </article>
  );
};

export default Product;

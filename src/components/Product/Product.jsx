// Product.jsx
import React, { useState } from "react";
import "./Product.scss";
import ProductModal from "../ProductModal/ProductModal";

const Product = (props) => {
  const { product, onProductSelect, onProductAddToBasket } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);

  const { id, name, price, description, imageUrl } = product;

  const handleButtonClick = () => {
    onProductSelect(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="product" data-ordered={false}>
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
              {count > 1 ? count : "+"}
            </button>
            {count > 1 && <span>{count}</span>}
          </div>
        </footer>
      </div>
      {isModalOpen && (
        <ProductModal
          product={product}
          count={count}
          onClose={handleCloseModal}
          onProductAddToBasket={onProductAddToBasket}
        />
      )}
    </article>
  );
};

export default Product;

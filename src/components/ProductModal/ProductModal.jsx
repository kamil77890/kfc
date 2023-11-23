import React, { useState } from "react";

import "./ProductModal.scss";

import products from "../../mocks/products.json";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaArrowLeft, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa";

const ProductModal = (props) => {
  const { orderedProducts, onClose } = props;
  const product =
    orderedProducts && orderedProducts.length > 0 ? orderedProducts[0] : null;

  if (!product) {
    return null;
  }
  const { name, price, description, imageUrl } = product;

  const [count, setCount] = useState(1);
  const [isHeartChange, setHeartChange] = useState(false);

  const changingHeart = () => {
    setHeartChange((prevHeartChange) => !prevHeartChange);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  };
  const imageUrlProduct = products.map((product) => product.imageUrl);

  const sumPrice = count * price;

  return (
    <section className="ProductModal">
      <div>
        <main>
          <div className="background">
            <footer className="ProductIcons">
              <FaArrowLeft onClick={onClose} />
              {isHeartChange ? (
                <FaHeart onClick={changingHeart} />
              ) : (
                <FaRegHeart onClick={changingHeart} />
              )}
            </footer>
            <img src={imageUrl} alt={name} />
            <div className="ProductDescription">
              <strong>{name}</strong>
              <strong>{price}</strong>
            </div>
            <p>{description}</p>
          </div>
          <div className="background2">
            <nav>
              <div className="styles">
                <h3>DODAJ TO CO LUBISZ </h3>
                <div>
                  <FaArrowLeft />
                  <FaArrowRight />
                </div>
              </div>

              <div className="Carousel">
                <Carousel>
                  <img src={imageUrlProduct[0]} />

                  <img src={imageUrlProduct[1]} />

                  <img src={imageUrlProduct[2]} />

                  <img src={imageUrlProduct[4]} />
                  <img src={imageUrlProduct[5]} />
                </Carousel>
              </div>
            </nav>
            <div className="footer2">
              <div className="footer">
                <div>
                  <button onClick={decrement}>-</button>
                  <span>{count}</span>
                  <button onClick={increment}>+</button>
                </div>
                <button className="button" onClick={onClose}>
                  DODAJ DO KOSZYKA {sumPrice.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProductModal;

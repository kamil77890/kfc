// ProductModal.jsx
import React, { useState } from "react";
import "./ProductModal.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa";
import products from "../../mocks/products.json";

const ProductModal = (props) => {
  const { product, onClose, onProductAddToBasket } = props;
  const { name, price, description, imageUrl } = product;
  const [count, setCount] = useState(1);

  const [isHeartChange, setHeartChange] = useState(false);

  const imageUrlProduct = products.map((product) => product.imageUrl);

  const sumPrice = count * price;

  const handleAddToBasket = () => {
    onProductAddToBasket(product, count);
    onClose();
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="ProductModal">
      <div>
        <main>
          <div className="overscrollMachine">
            <div className="background">
              <footer className="ProductIcons">
                <FaArrowLeft onClick={onClose} />
                <p>{name}</p>
                {isHeartChange ? (
                  <FaHeart onClick={() => setHeartChange(!isHeartChange)} />
                ) : (
                  <FaRegHeart onClick={() => setHeartChange(!isHeartChange)} />
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
                  <Carousel responsive={responsive}>
                    {imageUrlProduct.map((url, index) => (
                      <div key={index}>
                        <img src={url} alt={name} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </nav>
            </div>

            <div className="footer2">
              <div className="footer">
                <div>
                  <button
                    onClick={() =>
                      setCount((prevCount) => Math.max(prevCount - 1, 1))
                    }
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="button" onClick={handleAddToBasket}>
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

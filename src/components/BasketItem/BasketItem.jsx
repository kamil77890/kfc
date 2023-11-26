import React from "react";
import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderedProduct, onProductRemove } = props;
  const { name, price, count } = orderedProduct;

  function handleButtonClick() {
    onProductRemove(orderedProduct);
  }

  return (
    <li className="basket-item">
      <div className="info">
        <span>{count}x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;

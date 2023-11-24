import React from "react";
import { groupBy } from "../../utils";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";

const Basket = (props) => {
  const { orderedProducts, onProductRemove, onClearBasket } = props;

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price * orderedProduct.count,
    0
  );

  const groupedOrderedProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.name)
  );

  const handleRemoveProduct = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderedProducts.length} products)</span>
        </h5>
        <button onClick={onClearBasket}>X</button>
      </header>
      <div>
        <ul>
          {groupedOrderedProducts.map(([name, orderedProducts], index) => (
            <BasketItem
              key={`${name}-${index}`}
              orderedProduct={orderedProducts[0]}
              orderCount={orderedProducts.length}
              onProductRemove={handleRemoveProduct}
            />
          ))}
        </ul>
      </div>
      <footer>
        {orderedProducts.length > 0 && (
          <button>Order and Pay ({totalCost.toFixed(2)})</button>
        )}
      </footer>
    </div>
  );
};

export default Basket;

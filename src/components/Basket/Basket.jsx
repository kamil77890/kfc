// Basket.jsx
import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";
import { groupBy } from "../../utils";

export const Basket = (props) => {
  const { onProductAddToBasket, onProductRemove, onClearBasket } = props;

  const orderedProducts = onProductAddToBasket() || [];
  const { count } = orderedProducts;
  console.log(count)

  const groupedOrderedProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.name)
  );

  const handleRemoveProduct = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  const totalCost = orderedProducts.reduce(
    (sum, orderedProduct) => sum + orderedProduct.price * orderedProduct.count,
    0
  );

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
          {groupedOrderedProducts.map(([name, product], index) => (
            <BasketItem
              key={`${name}-${index}`}
              orderedProduct={product[0]}
              orderCount={count}
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

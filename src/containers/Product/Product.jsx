import { useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

import "./product.css";

const Product = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <section className="product">
      <strong className="product-logo">Sneaker Company</strong>

      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <h3 className="product-current_price">
        $125.00 <span>50%</span>
      </h3>
      <h5 className="product-old_price">$250.00</h5>

      <div className="product__checkout">
        <div className="product__checkout-quantity">
          <button>
            <FaMinus className="quantity-btn" onClick={decrement} />
          </button>

          <span>{count}</span>

          <button>
            <FaPlus className="quantity-btn" onClick={increment} />
          </button>
        </div>

        <button className="product__checkout-cta">
          <AiOutlineShoppingCart className="cta-icon" size={22} />
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default Product;

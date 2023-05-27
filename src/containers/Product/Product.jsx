import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

import "./product.css";

const Product = () => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const addItemToCart = () => {
    const newItem = { id: 1, name: "Sneakers", price: 125, count };

    addToCart(newItem);
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

        <button className="product__checkout-cta" onClick={addItemToCart}>
          <AiOutlineShoppingCart className="cta-icon" size={22} />
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default Product;

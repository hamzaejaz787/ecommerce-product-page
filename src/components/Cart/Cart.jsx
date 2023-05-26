import { useState } from "react";
import itemThumbnail from "../../assets/image-product-1-thumbnail.jpg";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="cart__wrapper">
      <h3>Cart</h3>

      <div className="cart__wrapper_contents">
        {isEmpty ? (
          <strong className="empty-message">Your cart is empty.</strong>
        ) : (
          <div className="cart__wrapper_contents-filled">
            <div className="cart__content">
              <img src={itemThumbnail} alt="" className="cart__content-image" />

              <div className="cart__content_details">
                <p className="item-description">
                  Fall Limited Edition Sneakers
                </p>

                <p className="item-price">
                  $125.00 x 3 <span className="item-price-total">$375.00</span>
                </p>
              </div>

              <FaTrashAlt fill="#b6bcc8" cursor="pointer" size={15} />
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

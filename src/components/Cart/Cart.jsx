import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { FaTrashAlt } from "react-icons/fa";
import itemThumbnail from "../../assets/image-product-1-thumbnail.jpg";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart__wrapper">
      <h3>Cart</h3>

      <div className="cart__wrapper_contents">
        {cartItems.length === 0 ? (
          <strong className="empty-message">Your cart is empty.</strong>
        ) : (
          <div className="cart__wrapper_contents-filled">
            {cartItems.map((item) => (
              <div className="cart__content">
                <img
                  src={itemThumbnail}
                  alt=""
                  className="cart__content-image"
                />

                <div className="cart__content_details">
                  <p className="item-description">{item.name}</p>

                  <p className="item-price">
                    ${item.price.toFixed(2)} x {item.count}{" "}
                    <span className="item-price-total">
                      ${(item.price * item.count).toFixed(2)}
                    </span>
                  </p>
                </div>

                <FaTrashAlt
                  fill="#b6bcc8"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  cursor="pointer"
                  size={15}
                />
              </div>
            ))}

            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

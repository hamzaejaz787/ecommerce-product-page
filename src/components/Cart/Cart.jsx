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

  const handleCheckout = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    const { sessionId } = await res.json();

    const stripe = window.Stripe(
      "pk_test_51HjmbpFUvqoJQ8qnx3pJsdPS9vtgOH6oEmHyQ22Lt1oBsmVbOHkLDsHWGJfqlCAjSCxj4rR5Q5vkUdGiP5TIyOSB00iWdZ4MXc"
    );
    stripe.redirectToCheckout({ sessionId: sessionId });
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

            <form onSubmit={handleCheckout}>
              <button className="checkout-btn" type="submit">
                Checkout
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

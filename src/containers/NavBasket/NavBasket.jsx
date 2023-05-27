import { useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../../assets/image-avatar.png";
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../CartContext";

import "./nav-basket.css";

const NavBasket = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="basket__container">
      <div className="cart">
        <AiOutlineShoppingCart
          size={27}
          className="cart-icon"
          onClick={
            !showCart
              ? () => {
                  setShowCart(true);
                }
              : () => setShowCart(false)
          }
        />
        {cartItems.length === 0 ? (
          ""
        ) : (
          <span className="cart-count">
            {cartItems.map((item) => item.count)}
          </span>
        )}
      </div>

      {showCart ? <Cart /> : ""}
      <img src={avatar} alt="" className="user-avatar" />
    </div>
  );
};

export default NavBasket;

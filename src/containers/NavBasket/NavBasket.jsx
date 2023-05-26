import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../../assets/image-avatar.png";
import Cart from "../../components/Cart/Cart";

import "./nav-basket.css";

const NavBasket = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="basket__container">
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

      {showCart ? <Cart /> : ""}

      <img src={avatar} alt="" className="user-avatar" />
    </div>
  );
};

export default NavBasket;

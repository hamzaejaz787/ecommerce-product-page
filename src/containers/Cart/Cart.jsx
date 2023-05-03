import avatar from "../../assets/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <AiOutlineShoppingCart size={27} className="cart-icon" />
      <img src={avatar} alt="" className="cart-avatar" />
    </div>
  );
};

export default Cart;

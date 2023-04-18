import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import user from "../../assets/image-avatar.png";
import NavMenu from "../../components/NavMenu/NavMenu";
import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="sneakers" className="logo" />
      </a>

      <nav className="navbar">
        <NavMenu />

        <div className="navbar-side">
          <a href="#" className="nav-cart">
            <img src={cart} alt="" className="cart" />
          </a>

          <a href="#" className="nav-avatar">
            <img src={user} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

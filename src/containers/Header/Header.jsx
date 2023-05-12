import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import Navbar from "../../components/Navbar/Navbar";
import Cart from "../Cart/Cart";

import "./header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className="header__navbar">
        <div className="header-wrapper">
          <a href="/" className="logo">
            <img src={logo} alt="sneakers" />
          </a>

          <Navbar />
        </div>

        <Cart />
      </div>

      <div className="header__navbar-menu">
        <div className="header-wrapper">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              className="menu-close"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              size={27}
              className="menu-open"
              onClick={() => setToggleMenu(true)}
            />
          )}

          <a href="/" className="logo">
            <img src={logo} alt="sneakers" />
          </a>
        </div>

        {toggleMenu && <Navbar className={"transform-slide-right"} />}

        <Cart />
      </div>
    </header>
  );
};

export default Header;

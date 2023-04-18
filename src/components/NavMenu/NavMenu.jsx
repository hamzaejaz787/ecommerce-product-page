import "./navMenu.css";

const NavMenu = () => {
  return (
    <>
      <ul className="nav-lists">
        <li>
          <a href="#" className="nav-link">
            Collections
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;

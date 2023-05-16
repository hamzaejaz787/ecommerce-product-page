import ProductImage from "../ProductImage/ProductImage";
import Product from "../Product/Product";

import "./main-content.css";

const MainContent = () => {
  return (
    <main className="main">
      <ProductImage />
      <Product />
    </main>
  );
};

export default MainContent;

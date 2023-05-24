import productImage1 from "../../assets/image-product-1.jpg";
import productImageThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./product-image.css";

const ProductImage = () => {
  return (
    <div className="product__image">
      <div className="main__image-container">
        <img src={productImage1} alt="" className="product__image-main" />
        <button className="image-nav previous">
          <GrFormPrevious size={27} />
        </button>
        <button className="image-nav next">
          <GrFormNext size={27} />
        </button>
      </div>

      <div className="product__image-thumbnails">
        <div className="product__image-thumbnail">
          <img src={productImageThumbnail1} alt="" />
        </div>
        <div className="product__image-thumbnail">
          <img src={productImageThumbnail2} alt="" />
        </div>
        <div className="product__image-thumbnail">
          <img src={productImageThumbnail3} alt="" />
        </div>
        <div className="product__image-thumbnail">
          <img src={productImageThumbnail4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;

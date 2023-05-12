import productImage1 from "../../assets/image-product-1.jpg";
import productImageThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import "./lightbox.css";

const Lightbox = () => {
  return (
    <div className="lightbox">
      <img src={productImage1} alt="" />

      <div className="lightbox-thumbnails">
        <img
          src={productImageThumbnail1}
          alt=""
          className="lightbox-thumbnail"
        />
        <img
          src={productImageThumbnail2}
          alt=""
          className="lightbox-thumbnail"
        />
        <img
          src={productImageThumbnail3}
          alt=""
          className="lightbox-thumbnail"
        />
        <img
          src={productImageThumbnail4}
          alt=""
          className="lightbox-thumbnail"
        />
      </div>
    </div>
  );
};

export default Lightbox;

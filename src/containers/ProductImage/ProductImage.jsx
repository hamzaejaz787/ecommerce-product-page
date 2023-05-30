import { useState } from "react";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./product-image.css";

const ProductImage = ({ images, thumbnailImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product__image">
      <div className="main__image-container">
        <img
          src={images[currentImageIndex]}
          alt="main image"
          className="product__image-main"
        />

        <button className="image-nav previous" onClick={() => goToPrevImage()}>
          <GrFormPrevious size={27} />
        </button>
        <button className="image-nav next" onClick={goToNextImage}>
          <GrFormNext size={27} />
        </button>
      </div>

      <div className="product__image-thumbnails">
        {thumbnailImages.map((image, index) => (
          <div
            className={
              index === currentImageIndex
                ? "product__image-thumbnail active-thumbnail"
                : "product__image-thumbnail"
            }
          >
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => goToImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;

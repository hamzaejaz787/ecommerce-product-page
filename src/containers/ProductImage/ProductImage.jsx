import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./product-image.css";
import Lightbox from "../../components/Lightbox/Lightbox";

const ProductImage = ({ images, thumbnailImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationFade, setAnimationFade] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToImage = (index) => {
    setAnimationFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);

      setAnimationFade(false);
    }, 300);
  };

  const goToNextImage = () => {
    setAnimationFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationFade(false);
    }, 300);
  };

  const goToPrevImage = () => {
    setAnimationFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimationFade(false);
    }, 300);
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="product__image">
      <div className="main__image-container">
        <img
          src={images[currentImageIndex]}
          alt="main image"
          onAnimationEnd={() => setAnimationFade(false)}
          className={`product__image-main ${
            animationFade ? "fade-out" : "fade-in"
          }`}
          onClick={openLightbox}
        />

        <button className="image-nav previous" onClick={() => goToPrevImage()}>
          <GrFormPrevious size={27} />
        </button>
        <button className="image-nav next" onClick={goToNextImage}>
          <GrFormNext size={27} />
        </button>
      </div>

      {lightboxOpen && (
        <Lightbox
          currentImage={images[currentImageIndex]}
          closeLightbox={closeLightbox}
        />
      )}

      <div className="product__image-thumbnails">
        {thumbnailImages.map((image, index) => (
          <div
            key={index}
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

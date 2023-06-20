import { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./product-image.css";
import Lightbox from "../../components/Lightbox/Lightbox";

const ProductImage = ({ images, thumbnailImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationFade, setAnimationFade] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  //Check screen width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToImage = (index) => {
    setAnimationFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);

      setAnimationFade(false);
    }, 300);
  };

  const goToNextImage = () => {
    setAnimationFade(true);
    //Wait 3s before loading next image
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationFade(false);
    }, 300);
  };

  const goToPrevImage = () => {
    setAnimationFade(true);
    //Wait 3s before loading previous image
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimationFade(false);
    }, 300);
  };

  const openLightbox = () => {
    //Only open lightbox for larger screen sizes
    if (isDesktop) {
      setLightboxOpen(true);
      document.body.style.overflow = "hidden";
    }
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
          loading="lazy"
          onClick={openLightbox}
        />

        <button className="image-nav previous" onClick={goToPrevImage}>
          <GrFormPrevious size={27} />
        </button>
        <button className="image-nav next" onClick={goToNextImage}>
          <GrFormNext size={27} />
        </button>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          closeLightbox={closeLightbox}
          thumbnailImages={thumbnailImages}
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

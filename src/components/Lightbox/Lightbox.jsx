import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";

import "./lightbox.css";

const Lightbox = ({ images, closeLightbox, thumbnailImages }) => {
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
    <div className="lightbox-overlay">
      <div className="lightbox">
        <div className="lightbox__main">
          <RiCloseLine
            size={30}
            className="lightbox-close"
            onClick={closeLightbox}
          />
          <img
            src={images[currentImageIndex]}
            alt=""
            loading="lazy"
            className="main-image"
          />
          <button
            className="lightbox-nav lightbox-previous"
            onClick={goToPrevImage}
          >
            <GrFormPrevious size={27} />
          </button>
          .
          <button
            className="lightbox-nav lightbox-next"
            onClick={goToNextImage}
          >
            <GrFormNext size={27} />
          </button>
        </div>
        <div className="lightbox__image-thumbnails">
          {thumbnailImages.map((image, index) => (
            <div
              key={index}
              className={
                index === currentImageIndex
                  ? "lightbox__image-thumbnail active-thumbnail"
                  : "lightbox__image-thumbnail"
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
    </div>
  );
};

export default Lightbox;

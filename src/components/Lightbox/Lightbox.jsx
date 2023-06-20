import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import "./lightbox.css";

const Lightbox = ({ currentImage, closeLightbox }) => {
  return (
    <div className="lightbox-overlay">
      <div className="lightbox">
<<<<<<< HEAD
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
=======
        <RiCloseLine
          size={30}
          className="lightbox-close"
          onClick={closeLightbox}
        />
        <img src={currentImage} alt="" />

        <button className="lightbox-nav previous">
          <GrFormPrevious size={27} />
        </button>
        <button className="lightbox-nav next">
          <GrFormNext size={27} />
        </button>
>>>>>>> parent of 11ec65c (added lightbox and bugfixes)
      </div>
    </div>
  );
};

export default Lightbox;

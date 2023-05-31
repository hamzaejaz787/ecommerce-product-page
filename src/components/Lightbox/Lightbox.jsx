import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./lightbox.css";

const Lightbox = ({ currentImage, closeLightbox }) => {
  return (
    <div className="lightbox-overlay">
      <div className="lightbox" onClick={closeLightbox}>
        <img src={currentImage} alt="" />

        <button className="image-nav previous">
          <GrFormPrevious size={27} />
        </button>
        <button className="image-nav next">
          <GrFormNext size={27} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;

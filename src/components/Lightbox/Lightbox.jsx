import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import "./lightbox.css";

const Lightbox = ({ currentImage, closeLightbox }) => {
  return (
    <div className="lightbox-overlay">
      <div className="lightbox">
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
      </div>
    </div>
  );
};

export default Lightbox;

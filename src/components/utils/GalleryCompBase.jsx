import {
  img_111,
  img_112,
  img_113,
  img_114,
  
} from "../../assests/gallery";
const GalleryCompBase = (props) => {
  if (!props.isTransform) {
  }
  return (
    <div className="grallery-box pb-8">
      <div className="grid  grid-cols-3 gap-8">
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_111}
            alt="img_111"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_112}
            alt="img_112"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_113}
            alt="img_113"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_114}
            alt="img_114"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_114}
            alt="img_114"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img
            src={img_114}
            alt="img_114"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryCompBase;


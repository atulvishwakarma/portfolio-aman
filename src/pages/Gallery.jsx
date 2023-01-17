import { amanImg } from "../assests/aman/index";
import GalleryComp from "../components/utils/GalleryComp";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-wrapper container max-w-full px-4">
        <div className="gallery-wrapper max-w-4xl mx-auto">
          <GalleryComp galleryData={amanImg} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

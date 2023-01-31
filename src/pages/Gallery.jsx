import { amanImg } from "../assests/aman/index";
// import ModalPopUp from "../components/modal/ModalPopUp";
import GalleryComp from "../components/utils/GalleryComp";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-wrapper container max-w-full px-4">
        <div className="gallery-wrapper max-w-4xl mx-auto">
          {/* <ModalPopUp /> */}
          <GalleryComp galleryData={amanImg} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

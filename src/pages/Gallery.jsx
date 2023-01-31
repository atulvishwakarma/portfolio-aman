import { amanImg } from "../assests/aman/index";
import GalleryComp from "../components/utils/GalleryComp";
import GallerySlider from "../components/utils/GallerySlider";
import GallerySliderCard from "../components/utils/GallerySliderCard";
import GallerySliderCube from "../components/utils/GallerySliderCube";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-wrapper container max-w-full px-4">
        <div className="gallery-wrapper max-w-4xl mx-auto">
          <GalleryComp galleryData={amanImg} />
          <br /><br />
          <GallerySlider galleryData={amanImg} />
          <br /><br />
          <GallerySliderCard galleryData={amanImg} />
          <br /><br />
          <GallerySliderCube galleryData={amanImg} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

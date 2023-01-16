import {
  img_111,
  img_112,
  img_113,
  img_114,
  img_115,
} from "../../assests/gallery";
const GalleryComp = (props) => {
  console.log(props);
  if (!props.isTransform) {
  }
  return (
    <div className="grallery-box pb-8">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img src={img_111} alt="img_111" loading="lazy" className="rounded-lg" />
        </div>
        <div className="col-start-3 transition-all scale-100 ease-in-out hover:scale-105">
          <img src={img_112} alt="img_112" loading="lazy" className="rounded-lg" />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img src={img_113} alt="img_113" loading="lazy" className="rounded-lg" />
        </div>
        <div className="transition-all scale-100 ease-in-out hover:scale-105">
          <img src={img_114} alt="img_114" loading="lazy" className="rounded-lg" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transition-all scale-100 ease-in-out hover:scale-105">
          <img src={img_115} alt="img_115" loading="lazy" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default GalleryComp;

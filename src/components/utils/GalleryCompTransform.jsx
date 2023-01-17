import {
  img_111,
  img_112,
  img_113,
  img_114,
  img_115,
} from "../../assests/gallery";
const GalleryCompTransform = () => {
  return (
    <div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="transform scale-110 -rotate-6">
          <img src={img_111} alt="img_111" loading="lazy" />
        </div>
        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <img src={img_112} alt="img_112" loading="lazy" />
        </div>
        <div className="transform scale-150 translate-y-11">
          <img src={img_113} alt="img_113" loading="lazy" />
        </div>
        <div className="transform translate-y-24">
          <img src={img_114} alt="img_114" loading="lazy" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          <img src={img_115} alt="img_115" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default GalleryCompTransform;

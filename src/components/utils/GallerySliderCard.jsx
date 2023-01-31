import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const GallerySliderCard = ({ galleryData }) => {
  const commonCss =
    "flex items-center justify-center font-bold text-white text-lg bg-slate-500";
  const gData = galleryData.map((item) => {
    return (
      <SwiperSlide key={item} className={commonCss}>
        <img src={item} alt={item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        className="gallery-slider max-w-[280px] md:max-w-sm"
        modules={[EffectCards]}
      >
        {gData}
      </Swiper>
    </>
  );
};

export default GallerySliderCard;

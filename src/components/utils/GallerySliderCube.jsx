import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/effect-cube";
import { EffectCube } from "swiper";

const GallerySliderCube = ({ galleryData }) => {
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
      {/* Effect cube */}

      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="gallery-slider max-w-[290px] md:max-w-sm"
        modules={[EffectCube]}
      >
        {gData}
      </Swiper>
    </>
  );
};

export default GallerySliderCube;

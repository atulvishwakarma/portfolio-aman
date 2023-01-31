import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import { EffectCreative } from "swiper";

const GallerySlider = ({ galleryData }) => {
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
      {/* Effect creative */}

      <Swiper
        effect={"creative"}
        grabCursor={true}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="gallery-slider max-w-[280px] md:max-w-sm"
        modules={[EffectCreative]}
      >
        {gData}
      </Swiper>
    </>
  );
};

export default GallerySlider;

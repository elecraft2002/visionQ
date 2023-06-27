// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrismicNextImage } from "@prismicio/next";
import useWindowSize from "@/functions/useWindowSize";
/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param {SliderProps}
 */
const Slider = ({ slice }) => {
  const { width, height } = useWindowSize();
  const maxSlidesPerView = width / 400 > 5 ? 5 : width / 400;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-slate-100/70 py-20 flex flex-col justify-center items-center"
    >
      <div className="box-border max-w-7xl bg-slate-200/50 p-4 rounded-md border w-full">
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={maxSlidesPerView}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
        >
          {slice.items.map((item, index) => {
            return (
              <SwiperSlide key={index} className="flex h-full items-center justify-center">
                <PrismicNextImage
                  field={item.image.Small}
                  className="rounded-md"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

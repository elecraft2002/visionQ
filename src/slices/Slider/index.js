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

  let array = [];
  const loop = 10;
  for (let i = 0; i < slice.items.length * 5; i++) {
    const element = slice.items[i % slice.items.length];
    array[i] = element;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center bg-slate-100/70 py-20"
    >
      <div className="box-border w-full max-w-7xl rounded-md border bg-slate-400/50 p-4">
        <Swiper
          modules={[  A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={maxSlidesPerView}
          speed={2000}
          loop
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
        >
          {array.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex h-full items-center justify-center"
              >
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

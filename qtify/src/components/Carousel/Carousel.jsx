import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const { swiper } = useSwiper();
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line
  }, [data]);
  return <></>;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialState={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((element, idx) => (
          <SwiperSlide key={idx}>{renderComponent(element)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Slider.css";

const PostItem = ({ title, body }) => {
  return (
    <div className="swiper-card">
      <p>{title}</p> <p>{body}</p>
    </div>
  );
};

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className="post-slider"
      spaceBetween={50}
      slidesPerView={3}
      pagination={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
    >
      {slides.map((item) => (
        <SwiperSlide>
          <PostItem title={item.title} body={item.body} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

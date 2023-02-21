import React from "react";
import CardReview from "./CardReview";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

function SliderReviews() {

  const reviews = [
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    },
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    },
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    },
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    },
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    },
    {
      imageUrl: 'https://pixabay.com/get/g7a358604c8c8e2f89e28268d6398bc9d472deb87c595c092f760931fd869640701a44a48c22d2e0cb41bb7f10681b9fd.svg',
      rating: 4,
      name: 'John Doe',
      position: 'CEO, ABC Company'
    }
  ]

  return (
    <div className="slider">
      <h2>TESTIMONIOS</h2>
      <h3>Estas son las opiniones de nuestros clientes</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <CardReview
              imageUrl={review.imageUrl}
              rating={review.rating}
              name={review.name}
              position={review.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderReviews;
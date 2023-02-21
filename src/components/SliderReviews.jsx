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
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/jenifer.jpeg"),
            comment:
                "La verdad es que al principio desconfié de la empresa, pero me sorprendió gratamente, el servicio es muy bueno y el precio muy competitivo, lo recomiendo 100%.",
            rating: 4,
            name: "Jenifer Peralta",
            position: "CEO, ABC Company",
        },
    ];

    return (
        <div className="slider">
            <h5>TESTIMONIOS</h5>
            <h3>OPINIONES DE CLIENTES FELICES</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <CardReview
                            imageUrl={review.imageUrl}
                            comment={review.comment}
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

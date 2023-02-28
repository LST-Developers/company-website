import React, { useState, useEffect } from "react";
import CardReview from "./CardReview";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

function SliderReviews() {
    const [slidesPerView, setSlidesPerView] = useState(0);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && window.innerWidth > 433) {
                setSlidesPerView(2);
            } else if (window.innerWidth <= 433) {
                setSlidesPerView(1);
            } else if (window.innerWidth > 768) {
                setSlidesPerView(3);
            }
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="slider">
            <div className="title">
                <h3>TESTIMONIOS</h3>
                <h5>OPINIONES DE CLIENTES FELICES</h5>
            </div>

            <Swiper
                slidesPerView={slidesPerView}
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

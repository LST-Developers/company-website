import React, { useState, useEffect } from "react";
import CardMember from "./CardMember";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

function SliderTeam() {
    const [slidesPerView, setSlidesPerView] = useState(0);

    const members = [
        {
            imageUrl: require("../assets/img/persona1.jpg"),
            facebookLink: "https://www.facebook.com/",
            twitterLink: "https://twitter.com/",
            linkedinLink: "https://www.linkedin.com/",
            name: "Simón Bolívar",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/persona1.jpg"),
            facebookLink: "https://www.facebook.com/",
            twitterLink: "https://twitter.com/",
            linkedinLink: "https://www.linkedin.com/",
            name: "Simón Bolívar",
            position: "CEO, ABC Company",
        },
        {
            imageUrl: require("../assets/img/persona1.jpg"),
            facebookLink: "https://www.facebook.com/",
            twitterLink: "https://twitter.com/",
            linkedinLink: "https://www.linkedin.com/",
            name: "Simón Bolívar",
            position: "CEO, ABC Company",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 768 && window.innerWidth > 550){
                setSlidesPerView(2);
            }else if(window.innerWidth <= 550){
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
                <h3>TEAM MEMBER</h3>
                <h5>Our Awesome Creative Team Member</h5>
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
                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <CardMember
                            imageUrl={member.imageUrl}
                            facebookLink={member.facebookLink}
                            twitterLink={member.twitterLink}
                            linkedinLink={member.linkedinLink}
                            name={member.name}
                            position={member.position}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderTeam;
"use client";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper } from "swiper/react";
import { Controller, Autoplay, Navigation, Pagination } from "swiper/modules";
import ImageSlide from "./ImageSlide";

export interface IMainSlide {
    id: number;
    image: string;
}

export interface IMainSlider {
    slideContent: IMainSlide[];
}

export default function MainSlider({ slideContent }: IMainSlider) {
    return (
        <div className="main-slider w-full min-w-screen overflow-hidden bg-gradient-to-b from-[#FFEDC9] via-[rgba(255,138,0,0.30)] p-primary-mobile pt-slider-top-mobile lg:p-primary lg:pt-slider-top">
            <Swiper
                className="image-swiper w-full rounded-primary lg:w-navbar-width lg:max-w-navbar-width"
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={16}
                modules={[Controller, Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{
                    pauseOnMouseEnter: true,
                    delay: 10000,
                }}
                speed={1000}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
            >
                {slideContent?.map((slide) => {
                    return (
                        <ImageSlide
                            key={slide.id}
                            image={slide.image}
                        />
                    );
                })}
            </Swiper>
        </div>
    );
}

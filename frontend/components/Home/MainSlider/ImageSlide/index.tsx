"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

export interface ImageSlideProps {
    image: string;
}

function ImageSlide({ image }: ImageSlideProps) {
    return (
        <SwiperSlide className="slide-image aspect-h-1 aspect-w-2 lg:aspect-w-4">
            <Image
                className="rounded-primary object-cover"
                src={image}
                quality={100}
                fill={true}
                alt=""
            />
        </SwiperSlide>
    );
}

ImageSlide.displayName = "SwiperSlide";

export default ImageSlide;

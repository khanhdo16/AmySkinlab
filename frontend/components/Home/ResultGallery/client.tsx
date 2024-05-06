"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import classNames from "classnames";
import Section from "../Section";
import { myTheme } from "@/tailwind.config";

export interface IResult {
    id: number;
    image: string;
}

interface ResultGalleryClientProps {
    results: IResult[];
}

export default function ResultGalleryClient({ results }: ResultGalleryClientProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Section name="Hình ảnh khách hàng">
            <Swiper
                className={classNames("result-slider transition-opacity ease-in-out", isLoading ? "opacity-0" : "opacity-100")}
                modules={[Autoplay]}
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={16 * parseFloat(myTheme.primaryMobileSpacing)}
                loop={true}
                autoplay={true}
                onAfterInit={() => setLoading(false)}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: false,
                        spaceBetween: 16 * parseFloat(myTheme.primarySpacing),
                    },
                }}
            >
                {results.map((result) => (
                    <SwiperSlide
                        key={result.id}
                        className="result-card my-px !h-auto overflow-hidden rounded-primary border border-secondary bg-white text-center"
                    >
                        <div className="aspect-h-9 aspect-w-16">
                            <Image
                                src={result.image}
                                fill={true}
                                className="object-cover"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
}

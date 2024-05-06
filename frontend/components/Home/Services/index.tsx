"use client";

import SkinProblemIcon from "@/public/services/skin-problem.svg";
import PeelIcon from "@/public/services/peel.svg";
import FacialIcon from "@/public/services/facial.svg";
import MesotherapyIcon from "@/public/services/mesotherapy.svg";
import BotoxIcon from "@/public/services/botox.svg";
import LaserIcon from "@/public/services/laser.svg";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import classNames from "classnames";
import ServiceCard from "./ServiceCard";
import Section from "../Section";
import { myTheme } from "@/tailwind.config";

export interface IService {
    title: string;
    description: string;
    icon: string;
}

export default function Services() {
    const [isLoading, setLoading] = useState(true);

    const services: IService[] = [
        {
            title: "Chăm sóc da",
            description: "Điều trị mụn, phục hồi da.",
            icon: SkinProblemIcon,
        },
        {
            title: "Thay da sinh học",
            description: "Kích thích tái tạo lớp da mới, giúp cải thiện bề mặt, kết cấu da.",
            icon: PeelIcon,
        },
        {
            title: "Mesotherapy",
            description: "Làm căng bóng, thu nhỏ lỗ chân lông, trẻ hóa da và giảm mỡ.",
            icon: MesotherapyIcon,
        },
        {
            title: "Botox",
            description: "Xoá nếp nhăn, thon gọn gương mặt, trẻ hoá toàn diện.",
            icon: BotoxIcon,
        },
        {
            title: "Laser",
            description: "Điều trị sẹo, dày sừng, rám má, tàn nhang.",
            icon: LaserIcon,
        },
        {
            title: "Căng chỉ",
            description: "Nâng cơ, cung chân mày, nâng mũi 3D.",
            icon: FacialIcon,
        },
    ];

    return (
        <Section name="Dịch vụ thẩm mỹ">
            <Swiper
                className={classNames("service-slider transition-opacity ease-in-out", isLoading ? "opacity-0" : "opacity-100")}
                modules={[Autoplay]}
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={16 * parseFloat(myTheme.primaryMobileSpacing)}
                loop={true}
                autoplay={true}
                onAfterInit={() => setLoading(false)}
                breakpoints={{
                    768: {
                        slidesPerView: 6,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 6,
                        centeredSlides: false,
                        spaceBetween: 16 * parseFloat(myTheme.primarySpacing),
                    },
                }}
            >
                {services.map((service) => (
                    <SwiperSlide
                        key={service.title}
                        className="service-card !h-auto rounded-primary border border-secondary bg-white text-center"
                    >
                        <ServiceCard {...service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
}

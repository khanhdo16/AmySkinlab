import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import classnames from "classnames";
import { SwiperClass } from "swiper/react";

export interface SliderNavigationProps {
    masterSwiper?: SwiperClass;
    activeIndex: number;
    length: number;
}

export interface SliderPaginationBulletProps {
    isActive?: boolean;
}

export function SliderPaginationBullet({ isActive }: SliderPaginationBulletProps) {
    const className = classnames("flex w-3 h-3 rounded-full opacity-80", isActive ? "bg-darkBackground" : "bg-white");

    return <span className={className} />;
}

export default function SliderNavigation({ masterSwiper, activeIndex, length }: SliderNavigationProps) {
    const sliderNavClassnames = "h-12 text-stone-500 fill-white/50 hover:text-stone-600 hover:fill-white/30";

    return (
        <div className="main-slider__navigation relative z-10 col-span-full row-span-full flex w-full items-center justify-between self-end">
            <ArrowLeftCircleIcon
                className={sliderNavClassnames}
                onClick={() => masterSwiper?.slidePrev()}
            />
            <div className="main-slider__pagination flex gap-2">
                {Array.from({ length }).map((_, index) => (
                    <SliderPaginationBullet
                        key={index}
                        isActive={index === activeIndex}
                    />
                ))}
            </div>
            <ArrowRightCircleIcon
                className={sliderNavClassnames}
                onClick={() => masterSwiper?.slideNext()}
            />
        </div>
    );
}

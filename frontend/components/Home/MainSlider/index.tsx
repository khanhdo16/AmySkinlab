import { SETTING_API_URL } from "@/components/util/constants";
import MainSliderClient, { IMainSlide } from "./client";
import { queryParams, requestHandler } from "@/components/util";
import { Setting } from "@/types/api/setting";
import { Payload } from "@/types/common/Payload";
import { Media } from "@/types/common/Media";

const getData = async (): Promise<Payload<Setting>> => {
    const res = await fetch(
        SETTING_API_URL +
            queryParams({
                populate: {
                    homepageBanners: true,
                },
            }),
    );

    return await requestHandler<Payload<Setting>>(res);
};

const getSlideContent = async (): Promise<IMainSlide[]> => {
    const { data } = await getData();
    const { homepageBanners } = data.attributes;

    return homepageBanners.data.map((banner: Media) => ({
        id: banner.id,
        image: process.env.SERVER_URL + banner.attributes.url,
    }));
};

export default async function MainSlider() {
    const slideContent = await getSlideContent();

    return <MainSliderClient slideContent={slideContent} />;
}

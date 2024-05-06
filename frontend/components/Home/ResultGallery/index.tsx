import { SETTING_API_URL } from "@/components/util/constants";
import { queryParams, requestHandler } from "@/components/util";
import ResultGalleryClient, { IResult } from "./client";
import { Payload } from "@/types/common/Payload";
import { Setting } from "@/types/api/setting";
import { Media } from "@/types/common/Media";

const getData = async (): Promise<Payload<Setting>> => {
    const res = await fetch(
        SETTING_API_URL +
            queryParams({
                populate: {
                    homepageCustomerPhotos: true,
                },
            }),
    );

    return await requestHandler<Payload<Setting>>(res);
};

const getResultGallery = async (): Promise<IResult[]> => {
    const { data } = await getData();
    const { homepageCustomerPhotos } = data.attributes;

    return homepageCustomerPhotos.data.map((photo: Media) => ({
        id: photo.id,
        image: process.env.SERVER_URL + photo.attributes.url,
    }));
};

export default async function ResultGallery() {
    const results = await getResultGallery();

    return <ResultGalleryClient results={results} />;
}

export interface StrapiImage {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
}

export interface StrapiImageFormat extends StrapiImage {
    path?: string;
}

export interface StrapiSlideContentAttrs extends StrapiImage {
    formats: {
        small: StrapiImageFormat;
        thumbnail: StrapiImageFormat;
    };
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
}

export interface StrapiSlideContent extends StrapiImage {
    id: number;
    attributes: StrapiSlideContentAttrs;
}

export interface StrapiSlider {
    data: StrapiSlideContent[];
}

export interface GlobalSettings {
    data: {
        id: number;
        attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            notification: any;
            homepageBanners: StrapiSlider;
            homepageCustomerPhotos: StrapiSlider;
        };
    };
}

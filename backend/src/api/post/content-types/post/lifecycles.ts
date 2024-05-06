import slugify from "slugify";
import { errors } from "@strapi/utils";
const { ApplicationError } = errors;

const generateSlug = (data) => {
    if (!data?.title) return;

    data.slug = slugify(data.slug || data.title, {
        lower: true,
        locale: "vi",
        trim: true,
    });
};

const populateSeoFields = async (data, isCreate = false) => {
    if (!data?.title || !data?.description || !data?.cover || !data?.body) return;

    const seoData = {
        metaTitle: data.title.length > 60 ? `${data.title.slice(0, 60 - 3)}...` : data.title,
        metaDescription: data.description.length > 160 ? `${data.description.slice(0, 160 - 3)}...` : data.description,
        metaImage: data.cover,
        metaSocial: [
            {
                socialNetwork: "Facebook",
                title: data.title.length > 60 ? `${data.title.slice(0, 60 - 3)}...` : data.title,
                description: data.description.length > 65 ? `${data.description.slice(0, 65 - 3)}...` : data.description,
                image: data.cover,
            },
            {
                socialNetwork: "Twitter",
                title: data.title.length > 60 ? `${data.title.slice(0, 60 - 3)}...` : data.title,
                description: data.description.length > 65 ? `${data.description.slice(0, 65 - 3)}...` : data.description,
                image: data.cover,
            },
        ],
    };

    if (!data?.seo) {
        // @ts-ignore
        const newSeo = await strapi.entityService.create("shared.seo", {
            data: seoData,
        });

        data.seo = {
            id: newSeo.id,
            __pivot: {
                field: "seo",
                component_type: "shared.seo",
            },
        };

        return;
    }

    if (!data?.id) return;

    const { id, seo, ...rest } = data;
    const { __pivot, ...restSeo } = seo;

    await strapi.entityService.update("api::post.post", id, {
        data: {
            ...rest,
            seo: {
                ...restSeo,
                ...seoData,
            },
        },
    });
};

const validateAuthor = async (data, where) => {
    if (data.publishedAt || !data?.author?.connect?.length) {
        // @ts-ignore
        const { publishedAt, author } =
            // @ts-ignore
            (await strapi.entityService.findOne("api::post.post", data?.id || where?.id, { populate: { author: "*", publishedAt: true } })) || {};

        // If not unpublishing a published post
        if (!(publishedAt && data?.publishedAt === null)) {
            // Publishing post with invalid author
            if ((publishedAt && !data?.author?.connect?.length && !!data?.author?.disconnect?.length) || (data.publishedAt && !author))
                throw new ApplicationError("author is a required field", {
                    errors: [
                        {
                            path: ["author"],
                            message: "author is a required field",
                            name: "ValidationError",
                        },
                    ],
                });
        }
    }
};

export default {
    beforeCreate: async (event) => {
        const { data } = event.params;
        const isCreate = true;

        generateSlug(data);
        await populateSeoFields(data, isCreate);
    },
    beforeUpdate: async (event) => {
        const { data, where } = event.params;

        await validateAuthor(data, where);
        generateSlug(data);
        await populateSeoFields(data);
    },
};

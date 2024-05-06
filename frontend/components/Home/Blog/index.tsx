import Section from "../Section";
import BlogCard from "./BlogCard";
import { POST_API_URL } from "../../util/constants";
import { queryParams, requestHandler } from "@/components/util";
import { Payload } from "@/types/common/Payload";
import { Post } from "@/types/api/post";

export interface IBlog {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

async function getData(): Promise<Payload<Post[]>> {
    const res = await fetch(POST_API_URL + queryParams({ populate: "*" }));
    return await requestHandler<Payload<Post[]>>(res);
}

export default async function Blog() {
    const { data: blogs } = await getData();

    return (
        <Section name="Kiến thức về da">
            <div className="grid grid-cols-1 gap-primary-mobile lg:grid-cols-2 lg:gap-primary">
                {blogs.map((blog: Post) => {
                    const blogProps: IBlog = {
                        id: blog.id,
                        image: process.env.SERVER_URL + blog.attributes.cover.data.attributes.url,
                        title: blog.attributes.title,
                        description: blog.attributes.description,
                        link: blog.attributes.slug!,
                    };

                    return (
                        <BlogCard
                            key={blog.id}
                            {...blogProps}
                        />
                    );
                })}
            </div>
        </Section>
    );
}

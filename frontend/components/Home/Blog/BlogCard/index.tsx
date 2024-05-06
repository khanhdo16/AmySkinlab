import Image from "next/image";
import Link from "next/link";
import { IBlog } from "..";
import { BLOG_CARD_DESC_LENGTH, BLOG_CARD_TITLE_LENGTH } from "@/components/util/constants";

export interface IBlogCardProps extends IBlog {}

export default function BlogCard({ image, title, description, link }: IBlogCardProps) {
    function getShortText(text: string, length: number): string {
        const shorten = text.split(" ").slice(0, length);
        return text.split(" ").length > length ? `${shorten.join(" ")}...` : shorten.join(" ");
    }

    return (
        <Link
            href={link}
            className="rounded-primary border border-secondary bg-white p-primary-mobile lg:p-primary"
        >
            <div className="aspect-h-2 aspect-w-5 mb-3 overflow-hidden rounded-2xl">
                <Image
                    className="h-auto w-full object-cover"
                    src={image}
                    alt={title}
                    fill={true}
                />
            </div>
            <div>
                <h3
                    className="w-max max-w-full text-2xl font-bold text-primary lg:text-3xl"
                    title={title}
                >
                    {getShortText(title, BLOG_CARD_TITLE_LENGTH)}
                    <hr className="my-3 w-full border-t-2 border-black" />
                </h3>
                <p title={description}>{getShortText(description, BLOG_CARD_DESC_LENGTH)}</p>
            </div>
        </Link>
    );
}

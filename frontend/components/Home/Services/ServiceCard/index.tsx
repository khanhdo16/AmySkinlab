import Image from "next/image";
import { IService } from "..";

export interface IServiceCardProps extends IService {}

export default function ServiceCard({ title, description, icon }: IServiceCardProps) {
    return (
        <div className="flex flex-col items-center p-primary-mobile lg:p-primary">
            <Image
                className="h-20 p-primary-mobile lg:h-24"
                src={icon}
                alt={title}
            />
            <div className="">
                <span className="mb-1 block break-words text-sm font-medium lg:text-xl lg:font-bold">{title}</span>
                <span className="block text-xs lg:text-sm">{description}</span>
            </div>
        </div>
    );
}

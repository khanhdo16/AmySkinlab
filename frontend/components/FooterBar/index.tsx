import Logo from "../Logo";
import Image from "next/image";
import FacebookIcon from "@/public/social/facebook.svg";
import InstagramIcon from "@/public/social/instagram.svg";
import ZaloIcon from "@/public/social/zalo.svg";
import { LOCATIONS, NAV_ITEMS } from "../util/constants";
import Link from "next/link";

interface ISocialIconProps {
    icon: any;
    link: string;
}
const SocialIcon = ({ icon, link }: ISocialIconProps) => {
    return (
        <a href={link}>
            <Image
                className="h-9 w-9 lg:h-10 lg:w-10"
                src={icon}
                alt=""
            />
        </a>
    );
};

interface IFooterLocationProps {
    name: string;
    address: string;
    tel: string;
}

const FooterLocation = ({ name, address, tel }: IFooterLocationProps) => {
    return (
        <div className="rounded-lg bg-accent p-primary-mobile lg:p-primary">
            <div className="mb-3 last:mb-0">
                <strong className="underline">CN {name}</strong>
                <span className="text-sm">
                    <br />
                    {address}
                    <br />
                    Hotline: {tel}
                </span>
            </div>
        </div>
    );
};

const FooterMenu = () => {
    return (
        <nav className="col-span-2">
            <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                    return (
                        <li key={item.path}>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default function FooterBar() {
    return (
        <div className="max-w-screen mx-auto mt-primary w-full bg-primary p-primary-mobile lg:w-navbar-width lg:max-w-navbar-width lg:p-primary">
            <div className="grid grid-cols-1 gap-y-primary-mobile text-primaryText lg:grid-cols-4 lg:gap-x-primary lg:gap-y-0">
                <div className="row-start-3 flex flex-wrap items-end justify-between lg:row-start-auto lg:h-full lg:flex-col lg:items-start">
                    <div className="h-10 shrink-0 lg:h-16">
                        <Logo switchMobile={false} />
                    </div>
                    <div>
                        <div className="flex justify-end gap-2 lg:mb-3 lg:justify-normal">
                            <SocialIcon
                                icon={FacebookIcon}
                                link="https://www.facebook.com/amyskinlab.spa"
                            />
                            <SocialIcon
                                icon={ZaloIcon}
                                link="https://zalo.me/4213322179999611320"
                            />
                            <SocialIcon
                                icon={InstagramIcon}
                                link="https://www.instagram.com/amyskinlab.spa/"
                            />
                        </div>
                        <div className="hidden text-xs text-primaryText lg:block lg:text-base">{`© ${new Date().getFullYear()} Amy Skinlab • All rights reserved`}</div>
                    </div>
                    <div className="mt-3 block basis-full text-center text-xs text-primaryText lg:hidden lg:text-base">{`© ${new Date().getFullYear()} Amy Skinlab • All rights reserved`}</div>
                </div>
                <FooterMenu />
                <div className="flex flex-col gap-primary-mobile lg:gap-primary">
                    <FooterLocation
                        name={LOCATIONS.HaNoi.Name}
                        address={LOCATIONS.HaNoi.Address}
                        tel={LOCATIONS.HaNoi.Tel}
                    />
                    <FooterLocation
                        name={LOCATIONS.VinhPhuc.Name}
                        address={LOCATIONS.VinhPhuc.Address}
                        tel={LOCATIONS.VinhPhuc.Tel}
                    />
                </div>
            </div>
        </div>
    );
}

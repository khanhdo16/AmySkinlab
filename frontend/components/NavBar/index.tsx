"use client";

import "./index.css";
import "react-horizontal-scrolling-menu/dist/styles.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import classnames from "classnames";
import Logo from "../Logo";
import { NAV_ITEMS } from "../util/constants";

export interface INavItem {
    title: string;
    path: string;
    items?: INavItem[];
}

export interface INavMenuProps {
    navList: INavItem[];
    path: string;
}

export default function NavBar() {
    const path = usePathname();
    const [isExpanded, setExpanded] = useState(false);

    return (
        <nav
            className={classnames(
                "navbar",
                "fixed z-[999]",
                "flex flex-col",
                "bg-primary text-primaryText",
                "transition-all duration-500 ease-in-out",
                isExpanded ? "h-screen" : "h-navbar-height",
                isExpanded ? "w-screen rounded-none" : "w-navbar-width-mobile rounded-primary",
                isExpanded ? "m-0 p-primary-mobile" : "m-primary-mobile p-0",
                isExpanded && "divide-y",
                "lg:transtion-0 lg:left-1/2 lg:m-primary lg:w-navbar-width lg:max-w-navbar-width lg:-translate-x-navbar-translate lg:justify-normal lg:transition-none",
            )}
        >
            <div className="flex h-navbar-height shrink-0 flex-row items-center justify-between rounded-primary p-primary">
                <Logo />
                <DesktopMenu
                    navList={NAV_ITEMS}
                    path={path}
                />
                <MobileMenu
                    navList={NAV_ITEMS}
                    path={path}
                    isExpanded={isExpanded}
                    setExpanded={setExpanded}
                />
            </div>
            <div
                className={classnames(
                    "navmenu",
                    "flex flex-col items-center gap-3",
                    "h-full w-full p-primary",
                    "origin-top overflow-hidden text-center transition-all duration-500 ease-in-out",
                    "lg:hidden",
                    isExpanded ? "scale-100" : "scale-0 opacity-0",
                )}
            >
                {NAV_ITEMS.map((item) => {
                    const getActiveItem = () => {
                        return item.path !== "/" ? path.startsWith(item.path) : item.path === path;
                    };

                    const linkClassName = classnames("block uppercase rounded-md p-2 text-2xl font-medium hover:bg-white hover:text-primary", getActiveItem() && "active");

                    return (
                        <span
                            className="navitem w-full max-w-full"
                            key={item.title}
                        >
                            <Link
                                className={linkClassName}
                                href={item.path}
                                onClick={() => setExpanded(false)}
                            >
                                {item.title}
                            </Link>
                        </span>
                    );
                })}
            </div>
        </nav>
    );
}

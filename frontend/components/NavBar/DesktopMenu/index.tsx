"use client";

import Link from "next/link";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import classnames from "classnames";
import { INavMenuProps } from "..";
import "./index.scss";
import React from "react";

function getArrowClassnames(shouldShow: boolean) {
    return classnames("h-7 transition-all hover:fill-accent hidden lg:block", shouldShow ? "w-7" : "w-0");
}

function LeftArrow() {
    const { initComplete, isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
    const shouldShow = initComplete && !isFirstItemVisible;

    return (
        <ArrowLeftCircleIcon
            className={getArrowClassnames(shouldShow)}
            onClick={() => scrollPrev()}
        />
    );
}

function RightArrow() {
    const { initComplete, isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    const shouldShow = initComplete && !isLastItemVisible;

    return (
        <ArrowRightCircleIcon
            className={getArrowClassnames(shouldShow)}
            onClick={() => scrollNext()}
        />
    );
}

export default function DesktopMenu({ navList, path }: INavMenuProps) {
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            wrapperClassName="navmenu h-full ml-14 justify-center overflow-hidden"
            itemClassName="group relative navitem min-w-max"
            scrollContainerClassName="navlist h-full gap-3"
        >
            {navList.map((item) => {
                const getActiveItem = () => {
                    return item.path !== "/" ? path.startsWith(item.path) : item.path === path;
                };

                const linkClassName = classnames("block rounded-md p-2 font-medium uppercase hover:bg-white hover:text-primary", getActiveItem() && "active");

                return (
                    <React.Fragment key={item.path}>
                        <Link
                            className={linkClassName}
                            href={item.path}
                        >
                            {item.title}
                        </Link>
                        {item?.items && (
                            <div className="absolute right-0 z-[1000] mt-2 block h-max w-52 overflow-hidden bg-white px-primary py-0 duration-300 ease-in-out group-hover:block group-hover:h-max group-hover:p-primary">
                                <ul className="flex flex-col font-medium">
                                    {item.items?.map((subItem) => {
                                        return (
                                            <li key={`${item.path}/${subItem.path}`}>
                                                <a
                                                    href="#"
                                                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                                                >
                                                    {subItem.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </ScrollMenu>
    );
}

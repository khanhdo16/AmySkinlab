import { Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useState } from "react";
import { INavItem, INavMenuProps } from "..";
import Link from "next/link";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

export interface IActiveNavItem extends INavMenuProps {
    onClick: MouseEventHandler<HTMLAnchorElement>;
    isExpanded?: boolean;
}

export interface INavMobileMenuProps extends INavMenuProps {
    isExpanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}

function ActiveNavItem({ navList, path, onClick, isExpanded }: IActiveNavItem) {
    const MAX_CHARS = 18;
    const activeItem = navList.find((item: INavItem) => (item.path !== "/" ? path.startsWith(item.path) : item.path === path)) || navList[0];

    return (
        <span className="navitem">
            <Link
                className="active flex min-w-max items-center gap-1 rounded-md p-2 font-medium uppercase hover:bg-white hover:text-primary"
                href={activeItem.path}
                onClick={onClick}
            >
                {activeItem.title.slice(0, MAX_CHARS)}
                {activeItem.title.length > MAX_CHARS && "..."}
                {isExpanded ? <XMarkIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
            </Link>
        </span>
    );
}

export default function MobileMenu({ navList, path, isExpanded, setExpanded }: INavMobileMenuProps) {
    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setExpanded((prev) => !prev);
    }

    return (
        <div className="navmenu lg:hidden">
            <ActiveNavItem
                navList={navList}
                path={path}
                onClick={handleClick}
                isExpanded={isExpanded}
            />
        </div>
    );
}

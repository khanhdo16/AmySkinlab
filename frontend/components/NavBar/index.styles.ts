import classnames from "classnames";

const navbar = {
    flexBox: ["flex", "flex-row", "items-center"],
    display: ["fixed", "z-[999]"],
    size: ["h-24", "w-[calc(100%_-_theme(spacing[10]))]", "max-w-my-screen"],
    spacing: ["left-1/2", "p-primary-mobile lg:p-primary", "m-primary-mobile lg:m-primary"],
    decorator: ["bg-primary", "rounded-primary"],
    transform: ["-translate-x-[calc(50%_+_theme(spacing.primary))]"],
    text: ["text-primaryText"],
};

export const styles = {
    navbar: classnames("navbar", Object.values(navbar).flat()),
};

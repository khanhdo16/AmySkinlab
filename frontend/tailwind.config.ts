import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const myTheme = {
    primarySpacing: defaultTheme.spacing[5],
    primaryMobileSpacing: defaultTheme.spacing[3],
    myMaxWidth: defaultTheme.screens["2xl"],
    navbarHeight: defaultTheme.spacing[24],
    get navbarWidth() {
        return `calc(${this.myMaxWidth} - (${this.primarySpacing} * 2))`;
    },
    get navbarWidthMobile() {
        return `calc(100% - (${this.primaryMobileSpacing} * 2))`;
    },
    get navbarMaxWidth() {
        return `calc(min(100vw,${this.myMaxWidth}) - (${this.primarySpacing} * 2))`;
    },
    get menuPaddingMobile() {
        return `calc(${this.primarySpacing} + ${this.primaryMobileSpacing})`;
    },
    get menuHeightMobile() {
        return `calc(${this.navbarHeight} - ${this.primarySpacing} * 2)`;
    },
};

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                background: "#FBF5EE",
                primary: "#0061a0",
                darkPrimary: "#00253c",
                secondary: "#BFB19D",
                secondaryLight: "#FFEDC9",
                accent: "#1d86cc",
                accentLight: "#FF8A00",
                darkBackground: "#3d1e00",
                primaryText: "#fff",
            },
            spacing: {
                primary: myTheme.primarySpacing,
                "primary-mobile": myTheme.primaryMobileSpacing,
                "navbar-height": myTheme.navbarHeight,
                "navbar-width": myTheme.navbarWidth,
                "navbar-width-mobile": myTheme.navbarWidthMobile,
                "navbar-translate": `calc(50% + ${myTheme.primarySpacing})`,
                "navbar-translate-mobile": `calc(50% + ${myTheme.primaryMobileSpacing})`,
                "slider-top": `calc(${myTheme.navbarHeight} + (${myTheme.primarySpacing} * 2))`,
                "slider-top-mobile": `calc(${myTheme.navbarHeight} + (${myTheme.primaryMobileSpacing} * 2))`,
                "menu-padding-mobile": myTheme.menuPaddingMobile,
            },
            height: {
                "menu-height-mobile": myTheme.menuHeightMobile,
                "navbar-top-height": `calc(${myTheme.primarySpacing} + ${defaultTheme.borderRadius["3xl"]})`,
            },
            maxHeight: {
                "menu-height-mobile": myTheme.menuHeightMobile,
            },
            maxWidth: {
                screen: "100vw",
                "my-screen": myTheme.myMaxWidth,
                "navbar-width": myTheme.navbarMaxWidth,
                "navbar-width-mobile": myTheme.navbarWidthMobile,
            },
            minWidth: {
                screen: "100vw",
                "navbar-width": myTheme.navbarWidth,
                "navbar-width-mobile": myTheme.navbarWidthMobile,
            },
            fontSize: {
                "section-heading": ["2.75rem", "1"],
            },
            borderRadius: {
                primary: defaultTheme.borderRadius["3xl"],
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};
export default config;

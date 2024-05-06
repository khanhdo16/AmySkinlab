import logo from "../../public/logo.png";
import logoMobile from "../../public/logo-mobile.png";
import logoDark from "../../public/logo-dark.png";
import logoMobileDark from "../../public/logo-mobile-dark.png";

import Link from "next/link";
import Image from "next/image";

export enum LogoTheme {
    Light = "Light",
    Dark = "Dark",
}

export interface ILogoProps {
    theme?: LogoTheme;
    switchMobile?: boolean;
}

export default function Logo({ theme = LogoTheme.Light, switchMobile = true }: ILogoProps) {
    return (
        <Link
            className="h-full shrink-0"
            href="/"
        >
            {switchMobile ? (
                <>
                    <Image
                        className="logo hidden h-full w-auto lg:block"
                        src={theme === LogoTheme.Light ? logo : logoDark}
                        alt="Amy Skinlab Logo"
                    />
                    <Image
                        className="logo block h-full w-auto lg:hidden"
                        src={theme === LogoTheme.Light ? logoMobile : logoMobileDark}
                        alt="Amy Skinlab Logo"
                    />
                </>
            ) : (
                <Image
                    className="logo h-full w-auto"
                    src={theme === LogoTheme.Light ? logo : logoDark}
                    alt="Amy Skinlab Logo"
                />
            )}
        </Link>
    );
}

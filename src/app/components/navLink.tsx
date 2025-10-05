"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    link: {
        url: string;
        title: string;
    };
}

const NavLink = ({ link }: NavLinkProps) => {
    const pathName = usePathname();

    return (
        <Link
            className={`rounded p-1 ${
                pathName === link.url && "light:bg-black light:text-white dark:bg-white dark:text-black"
            }`}
            href={link.url}>
            {link.title}
        </Link>
    );
};

export default NavLink;

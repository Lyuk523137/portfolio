"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Porfolio" },
    { url: "/contact", title: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const topVariance = {
        closed: {
            rotate: 0,
            backgroundColor: "rgb(0, 0, 0)",
            transition: { duration: 0.3 },
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
            transition: { duration: 0.3 },
        },
    };

    const centerVariance = {
        closed: {
            opacity: 1,
            backgroundColor: "rgb(0, 0, 0)",
        },
        opened: {
            opacity: 0,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const bottomVariance = {
        closed: {
            rotate: 0,
            backgroundColor: "rgb(0, 0, 0)",
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vh",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 justify-center w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className=" text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center ">
                    <span className="text-white mr-1">Lama</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">
                        .dev
                    </span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4 w-1/3 justify-center">
                <Link href={"https://github.com/Lyuk523137?tab=repositories"}>
                    <Image src="./github.png" alt="" width={24} height={24} />
                </Link>
                <Link href={"https://github.com/Lyuk523137?tab=repositories"}>
                    <Image
                        src="./instagram.png"
                        alt=""
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href={"https://github.com/Lyuk523137?tab=repositories"}>
                    <Image src="./linkedin.png" alt="" width={24} height={24} />
                </Link>
                <Link href={"https://github.com/Lyuk523137?tab=repositories"}>
                    <Image src="./facebook.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON  */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative "
                    onClick={() => setOpen(!open)}>
                    <motion.div
                        variants={topVariance}
                        initial="closed"
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                    <motion.div
                        variants={centerVariance}
                        initial="closed"
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                    <motion.div
                        variants={bottomVariance}
                        initial="closed"
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                </button>

                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

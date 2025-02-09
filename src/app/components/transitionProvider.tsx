"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

interface TransitionProviderProps {
    children: ReactNode;
}

const TransitionProvider = ({ children }: TransitionProviderProps) => {
    const pathName = usePathname();
    return (
        <AnimatePresence>
            <div
                key={pathName}
                className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;

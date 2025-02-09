"use client";

import { motion } from "framer-motion";

export default function TestAnimation() {
    const variants = {
        variant1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition: {
                duration: 3,
            },
        },
        variant2: {
            x: 100,
            y: -300,
            rotation: 90,
        },
    };

    return (
        <div className="h-full flex align-center justify-center">
            <motion.div
                className="h-96 w-96 bg-red-500 rounded"
                variants={variants}
                animate="variant1"
                transition={{ delay: 2, duration: 4 }}></motion.div>
        </div>
    );
}

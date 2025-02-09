"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";

const AboutPage = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef(null);
    const isSkillRefInView: boolean = useInView(skillRef);

    return (
        <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
            {/* CONTAINER  */}

            {/* TEXT CONTAINER */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                {/* BIOGRAPHY CONTAINER */}
                <div className=" flex flex-col gap-12 justify-center">
                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                    <p className="text-lg">
                        {" "}
                        I&apos;m a dedicated web developer with a passion for
                        creating dynamic and user-friendly websites. With
                        expertise in modern web technologies, I provide custom
                        solutions tailored to meet your business needs. Whether
                        you need a simple landing page or a complex web
                        application, I am committed to delivering high-quality,
                        responsive, and scalable websites that help your
                        business grow.{" "}
                    </p>
                    <span className="twxt-itatic">
                        don&apos;t try to safe on your website as it&apos; s
                        going to represent your seriousness to commit best
                        servises for the clients{" "}
                    </span>
                </div>
                {/* SKILLS CONTAINER */}
                <div
                    className=" flex flex-col gap-12 justify-center"
                    ref={skillRef}>
                    <motion.h1
                        initial={{ x: "-300px" }}
                        animate={isSkillRefInView ? { x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-bold text-2xl">
                        SKILLS
                    </motion.h1>
                    {/* SKILL LIST  */}
                    <div className="flex flex-wrap gap-2">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            HTML
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Sass
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            JavaScript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            React js
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Node js
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            TypeScript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Rest API
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            GraphQL
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Tailwind CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Bootstrap
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Github
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Figma
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white font-semibold hover:bg-white hover:text-black">
                            Airtable
                        </div>
                    </div>
                </div>
                {/* EXPIRIANCE CONTAINER */}
                <div className=" flex flex-col gap-12 justify-center pb-48">
                    <h1 className="font-bold text-2xl">EXPIRIANCE</h1>
                    <div className="">
                        {/* EXPIRIANCE LIST  */}
                        <div className="">
                            {/* EXPIRIANCE LIST ITEM  1*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    <div className=" bg-white text-black font-semibold rounded-b-lg rounded-s-lg p-3">
                                        Junior Technical Support
                                    </div>
                                    <div className="p-3 text-sm italic">
                                        {" "}
                                        My current employment. Way better that
                                        the one before!
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                                        Moro Systems
                                    </div>
                                </div>
                                {/* CENTER  */}
                                <div className="w-1/6 ">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative ">
                                        {/* LINE CIRCLE  */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* RIGHT  */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPIRIANCE LIST ITEM  2*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3"></div>
                                {/* CENTER  */}
                                <div className="w-1/6 ">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative ">
                                        {/* LINE CIRCLE  */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* RIGHT  */}
                                <div className="w-1/3">
                                    <div className=" bg-white text-black font-semibold rounded-b-lg rounded-s-lg p-3">
                                        Junior React Developer
                                    </div>
                                    <div className="p-3 text-sm italic">
                                        {" "}
                                        That was my first step in the front-end
                                        development{" "}
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2022 - 2024
                                    </div>
                                    <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                                        KeyStone Hospitality Group
                                    </div>
                                </div>
                            </div>
                            {/* EXPIRIANCE LIST ITEM  3*/}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    <div className=" bg-white text-black font-semibold rounded-b-lg rounded-s-lg p-3">
                                        Fixer for foreign media
                                    </div>
                                    <div className="p-3 text-sm italic">
                                        {" "}
                                        Excited work with world wide broadcaster
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2021 - 2022
                                    </div>
                                    <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                                        CGTN
                                    </div>
                                </div>
                                {/* CENTER  */}
                                <div className="w-1/6 ">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative ">
                                        {/* LINE CIRCLE  */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* RIGHT  */}
                                <div className="w-1/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SVG CONTAINER  */}
            <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 right-0 z-30">
                <Brain scrollYProgress={scrollYProgress} />{" "}
            </div>
        </div>
    );
};

export default AboutPage;

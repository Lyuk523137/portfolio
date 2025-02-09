import Image from "next/image";

const Homepage = () => {
    return (
        <div className="h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-hidden">
            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] flex justify-center items-center">
                <Image
                    src="./me.jpg"
                    alt="my photo"
                    fill
                    className="object-contain rounded"
                />
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[36vh] p-4">
                {/* TITLE */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    Creating up-to-date websites with the latest technologies
                </h1>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base max-w-2xl">
                    Welcome to my page where innovation and creativity match
                    your expectations. With a keen eye for aesthetics and
                    mastery of code, check out my portfolio showcases to see the
                    diverse projects that reflect my commitment.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="p-4 bg-black text-white rounded-lg ring-1 ring-black ">
                        View my work
                    </button>
                    <button className="p-4 text-black rounded-lg ring-1 ring-black">
                        Contact me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

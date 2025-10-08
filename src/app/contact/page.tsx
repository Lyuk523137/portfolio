'use client';

const Contact = () => {
    return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
        <div className="flex flex-row gap-4 items-center">
            <h2 className="text-3xl font-extrabold text-black">Write me on What&apos;sApp:</h2>
            <h2 className="text-3xl font-bold text-white">+380637660322</h2>
         </div>
         <div className="flex flex-row gap-4 items-center">
            <h2 className="text-3xl font-extrabold text-black">or email:</h2>
            <h2 className="text-3xl font-bold">lyukmark1@gmail.com</h2>
            <h2 className="bg-black font-bold p-2 rounded-lg"><a href="mailto: lyukmark1@gmail.com">Click to Email</a></h2>
        </div>
    </div>
    )
};

export default Contact;

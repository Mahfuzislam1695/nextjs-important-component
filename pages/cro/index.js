import React, { useEffect, useState } from "react";
import Vercel from "./vercel";

const Cro = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldBeVisible = scrollTop === 0;

            setIsNavbarVisible(shouldBeVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col">
            <nav className="bg-gray-800 p-4 fixed w-full">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-lg">Logo</div>
                        <div className="flex flex-col">

                            <nav className={` ${isNavbarVisible ? "transition delay-700 duration-300" : "hidden  "}`}>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white">
                                        Home
                                    </a>
                                    <a href="#" className="text-white">
                                        About
                                    </a>
                                    <a href="#" className="text-white">
                                        Contact
                                    </a>
                                </div>
                            </nav>



                            <nav className="bg-gray-800 p-2">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white">Another Link</a>
                                    <a href="#" className="text-white">More Links</a>
                                    <a href="#" className="text-white">Explore</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-blue-500 text-white text-center py-16">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Our Awesome Website</h1>
                    <p className="text-lg">Welcome to the best place on the internet!</p>
                </div>
            </header>

            <div>
                <Vercel />
            </div>
        </div>
    );
};

export default Cro;
// import React, { useEffect, useState } from "react";
// import Vercel from "./vercel";

// const Cro = () => {
//     const [isNavbarVisible, setIsNavbarVisible] = useState(true);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             const shouldBeVisible = scrollTop === 0;

//             setIsNavbarVisible(shouldBeVisible);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col">
//             <nav className="bg-gray-800 p-4 fixed w-full">
//                 <div className="container mx-auto">
//                     <div className="flex items-center justify-between">
//                         <div className="text-white font-bold text-lg">Logo</div>
//                         <div className="flex flex-col">

//                             {isNavbarVisible && (
//                                 <nav className=" ease-in-out animation">

//                                     <div className="flex space-x-4 transition delay-700 duration-300">
//                                         <a href="#" className="text-white">
//                                             Home
//                                         </a>
//                                         <a href="#" className="text-white">
//                                             About
//                                         </a>
//                                         <a href="#" className="text-white">
//                                             Contact
//                                         </a>
//                                     </div>
//                                 </nav>
//                             )}


//                             <nav className="bg-gray-800 p-2">
//                                 <div className="flex space-x-4">
//                                     <a href="#" className="text-white">Another Link</a>
//                                     <a href="#" className="text-white">More Links</a>
//                                     <a href="#" className="text-white">Explore</a>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <header className="bg-blue-500 text-white text-center py-16">
//                 <div className="container mx-auto">
//                     <h1 className="text-4xl font-bold mb-4">Our Awesome Website</h1>
//                     <p className="text-lg">Welcome to the best place on the internet!</p>
//                 </div>
//             </header>

//             <div>
//                 <Vercel />
//             </div>
//         </div>
//     );
// };

// export default Cro;
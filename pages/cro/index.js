import React, { useEffect, useState } from "react";
import Vercel from "./vercel";
import styles from "@/styles/Cro.module.css";
import img from "@/asset/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg"
import youtube from "@/asset/youtube.png"

import Image from "next/image";
import { MdArrowDropDown } from 'react-icons/md';
import ImageContainer from "./Page11";
// import ImageSlider from "./ImageSlide";

const Cro = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(0);

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
            <div className=" fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-0 h-28 top-0 "></div>

            <nav className=" p-4 fixed w-full ">
                <div className="container mx-auto border-b pb-3 relative">
                    <div className="flex items-center justify-between">
                        <div className=" font-bold text-2xl text-white">CRO</div>

                        <div className="flex flex-col ">
                            <div className={` ${styles.toggleDiv} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
                                <div className="flex space-x-4 justify-end">
                                    <div className="text-white pr-6 cursor-pointer">
                                        Youtube
                                        <Image className="inline-block ml-2" src={youtube} alt="" width={16} height={20} />
                                    </div>

                                    <button className="flex text-gray-800 rounded-full bg-[#dee05d] hover:bg-[#E5E866] px-2 py-0.5 justify-center items-center">
                                        Contact us
                                    </button>
                                </div>
                            </div>

                            <div className={`px-2 pt-2 ${styles.dropdownContainer} `}>
                                <div className="flex justify-end text-xl font-semibold">
                                    <div className="text-white pr-6 cursor-pointer">
                                        Home
                                    </div>

                                    <div className="text-white pr-6 cursor-pointer">
                                        About
                                    </div>

                                    <div className="text-white pr-6 cursor-pointer"
                                        onMouseEnter={() => setIsHovered(1)}
                                        onMouseLeave={() => setIsHovered(0)}
                                    >
                                        Department
                                        <MdArrowDropDown className="inline-block" fontSize={24} />
                                    </div>

                                    <div className="text-white pr-6 cursor-pointer">
                                        Doctors
                                    </div>

                                    <div className="text-white pr-4 cursor-pointer"
                                        onMouseEnter={() => setIsHovered(2)}
                                        onMouseLeave={() => setIsHovered(0)}
                                    >
                                        Facilities
                                        <MdArrowDropDown className="inline-block" fontSize={24} />
                                    </div>

                                    <div className="text-white pr-6 cursor-pointer">
                                        News & Media
                                    </div>
                                    <div className=" text-white cursor-pointer">
                                        Career
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {isHovered === 1 && (
                        <div
                            className={`${isNavbarVisible ? "top-18" : "top-10"} absolute container mx-auto`}
                            onMouseEnter={() => setIsHovered(1)}
                            onMouseLeave={() => setIsHovered(0)}
                        >
                            <div
                                className="bg-white p-8 rounded-2xl"
                            >
                                <p>Ok 1 Hover me!</p>
                            </div>
                        </div>
                    )}
                    {isHovered === 2 && (
                        <div
                            className={`${isNavbarVisible ? "top-18" : "top-10"} absolute container mx-auto`}
                            onMouseEnter={() => setIsHovered(2)}
                            onMouseLeave={() => setIsHovered(0)}
                        >
                            <div
                                className={`bg-white p-8 rounded-2xl`}
                            >
                                <p>Hover me! Ok 2</p>
                            </div>
                        </div>
                    )}
                </div>
            </nav >

            <header className="bg-blue-500 text-white text-center ">
                <div>
                    <Image src={img} alt="drawing_image" />
                </div>
                <div className="container mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    <button onClick={console.log("ok")}>1111111</button>
                    <h1 className="text-4xl font-bold mb-4">Our Awesome Website</h1>
                    <p className="text-lg">Welcome to the best place on the internet!</p>
                </div>
            </header>

            <div>
                <Vercel />
            </div>


            <div>
                <ImageContainer />
            </div>

            <footer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis mollitia error pariatur autem velit aut architecto! Minima unde deserunt nobis eum illo quidem laudantium atque, libero, perspiciatis maiores, minus recusandae.
            </footer>

            <header className="bg-blue-500 text-white text-center ">
                <div>
                    <Image src={img} alt="drawing_image" />
                </div>
                <div className="container mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
                    <button onClick={console.log("ok")}>1111111</button>
                    <h1 className="text-4xl font-bold mb-4">Our Awesome Website</h1>
                    <p className="text-lg">Welcome to the best place on the internet!</p>
                </div>
            </header>



        </div >
    );
};

export default Cro;


// import React, { useEffect, useState } from "react";
// import Vercel from "./vercel";
// import styles from "@/styles/Cro.module.css";
// import img from "@/asset/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg"
// import Image from "next/image";

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
//         <div className="flex flex-col relative ">

//             <div className=" fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-0 h-28 top-0 "></div>

//             <nav className=" p-4 fixed w-full ">


//                 <div className="container mx-auto border-b pb-3">
//                     <div className="flex items-center justify-between">
//                         <div className=" font-bold text-2xl text-white">CRO</div>
//                         <div className="flex flex-col ">

//                             <div className={` ${styles.toggleDiv} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
//                                 <div className="flex space-x-4 justify-end">
//                                     <a href="#" className="text-white">
//                                         Newsroom
//                                     </a>

//                                     <a href="#" className="text-white">
//                                         Academy
//                                     </a>

//                                     <a href="#" className="text-white">
//                                         Careers
//                                     </a>

//                                     <button className="flex text-gray-800 rounded-full bg-[#dee05d] hover:bg-[#E5E866] px-2 py-0.5 justify-center items-center">
//                                         Contact us
//                                     </button>
//                                 </div>
//                             </div>



//                             <div className={`px-2 pt-2 ${styles.dropdownContainer}`}>
//                                 <div className="flex justify-end text-xl font-semibold">
//                                     <div className="text-white dropdown dropdown-hover  pr-4">
//                                         <label tabIndex={0} className="cursor-pointer pb-4 ">Solution</label>

//                                         <div tabIndex={0} className="dropdown-content left-0 right-0 z-[1] p-4 shadow bg-base-100 rounded-box w-screen h-96 mt-2 text-slate-950">
//                                             <li><a>Item 1</a></li>
//                                             <li><a>Item 2</a></li>
//                                         </div>
//                                     </div>

//                                     <div className="text-white dropdown dropdown-hover pr-4">
//                                         <label tabIndex={1} className="cursor-pointer pb-4 ">Therapeutic Expertise</label>
//                                         <div tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
//                                             <li><a>Item 1</a></li>
//                                             <li><a>Item 2</a></li>
//                                         </div>
//                                     </div>

//                                     <div className="text-white dropdown dropdown-hover pr-4">
//                                         <label tabIndex={2} className="cursor-pointer pb-4 ">Insights</label>
//                                         <div tabIndex={2} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
//                                             <li><a>Item 1</a></li>
//                                             <li><a>Item 2</a></li>
//                                         </div>
//                                     </div>

//                                     <div className="text-white dropdown dropdown-hover pr-4">
//                                         <label tabIndex={3} className="cursor-pointer pb-4 ">Sites</label>
//                                         <div tabIndex={3} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
//                                             <li><a>Item 1</a></li>
//                                             <li><a>Item 2</a></li>
//                                         </div>
//                                     </div>


//                                     <div className=" text-white dropdown dropdown-hover dropdown-end">
//                                         <label tabIndex={4} className="cursor-pointer pb-4  ">About</label>

//                                         <div tabIndex={4}
//                                             className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 "
//                                         >
//                                             <li><a>Item 1</a></li>
//                                             <li><a>Item 2</a></li>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </nav >

//             <header className="bg-blue-500 text-white text-center ">
//                 <div>

//                     <Image src={img} alt="drawing_image" />

//                 </div>
//                 <div className="container mx-auto">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore omnis sequi cumque, enim quod, adipisci, quos ducimus ratione iure distinctio laudantium autem iste vero temporibus suscipit eveniet doloremque expedita?
//                     <button onClick={console.log("ok")}>1111111</button>
//                     <h1 className="text-4xl font-bold mb-4">Our Awesome Website</h1>
//                     <p className="text-lg">Welcome to the best place on the internet!</p>
//                 </div>
//             </header>

//             <div>
//                 <Vercel />
//             </div>
//         </div >
//     );
// };

// export default Cro;
import React, { useEffect, useState } from "react";
import Vercel from "./vercel";
import styles from "@/styles/Cro.module.css";
import img from "@/asset/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg"
import Image from "next/image";

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
        <div className="flex flex-col relative ">

            <div className=" fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-0 h-28 top-0 "></div>

            <nav className=" p-4 fixed w-full ">


                <div className="container mx-auto border-b pb-3">
                    <div className="flex items-center justify-between">
                        <div className=" font-bold text-2xl text-white">CRO</div>
                        <div className="flex flex-col ">

                            <div className={` ${styles.toggleDiv} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
                                <div className="flex space-x-4 justify-end">
                                    <a href="#" className="text-white">
                                        Newsroom
                                    </a>

                                    <a href="#" className="text-white">
                                        Academy
                                    </a>

                                    <a href="#" className="text-white">
                                        Careers
                                    </a>

                                    <button className="flex text-gray-800 rounded-full bg-[#dee05d] hover:bg-[#E5E866] px-2 py-0.5 justify-center items-center">
                                        Contact us
                                    </button>
                                </div>
                            </div>


                            {/* <div className={`px-2 pt-2`}> */}
                            <div className={`px-2 pt-2 ${styles.dropdownContainer}`}>
                                <div className="flex justify-end text-xl font-semibold">
                                    {/* <div className={`text-white dropdown dropdown-hover pr-4 ${styles.dropdown}`}> */}
                                    <div className="text-white dropdown dropdown-hover  pr-4">
                                        <label tabIndex={0} className="cursor-pointer pb-4 ">Solution</label>

                                        <div tabIndex={0} className="dropdown-content left-0 right-0 z-[1] p-4 shadow bg-base-100 rounded-box w-screen h-96 mt-2 text-slate-950">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </div>
                                    </div>

                                    <div className="text-white dropdown dropdown-hover pr-4">
                                        <label tabIndex={1} className="cursor-pointer pb-4 ">Therapeutic Expertise</label>
                                        <div tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </div>
                                    </div>

                                    <div className="text-white dropdown dropdown-hover pr-4">
                                        <label tabIndex={2} className="cursor-pointer pb-4 ">Insights</label>
                                        <div tabIndex={2} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </div>
                                    </div>

                                    <div className="text-white dropdown dropdown-hover pr-4">
                                        <label tabIndex={3} className="cursor-pointer pb-4 ">Sites</label>
                                        <div tabIndex={3} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </div>
                                    </div>


                                    <div className=" text-white dropdown dropdown-hover dropdown-end">
                                        <label tabIndex={4} className="cursor-pointer pb-4  ">About</label>

                                        <div tabIndex={4}
                                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 "
                                        >
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
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
        </div >
    );
};

export default Cro;
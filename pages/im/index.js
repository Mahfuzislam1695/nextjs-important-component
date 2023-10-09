import React from 'react';

const index = () => {
    return (
        <div>
            {/* <nav>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat delectus quibusdam praesentium eos. Quia laborum hic dignissimos repellat asperiores? Officiis enim at quidem aut molestiae, repellat eveniet quam eius laborum.</nav> */}

            <div class="relative">
                <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400" style={{ backgroundImage: 'url("/image1.jpg")' }}>
                    <h2 class="text-4xl">The First Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white" style={{ backgroundImage: 'url("/image2.jpg")' }}>
                    <h2 class="text-4xl">The Second Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
                    <h2 class="text-4xl">The Third Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
                    <h2 class="text-4xl">The Fourth Title</h2>
                </div>
            </div>

            <footer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magni delectus corrupti iusto tempora illo ut pariatur voluptatem, hic velit nobis aliquam adipisci, esse harum ipsam. Tempore sunt inventore cupiditate.</footer>

        </div>
    );
};

export default index;


// import React, { useState, useRef, useEffect } from 'react';

// const Home = () => {
//     const [currentImage, setCurrentImage] = useState(1);
//     const containerRef = useRef(null);


//     console.log("currentImage", currentImage);

//     useEffect(() => {
//         const container = containerRef.current;

//         const handleScroll = () => {
//             const scrollPosition = container.scrollLeft;
//             const containerWidth = container.offsetWidth;
//             const imageWidth = containerWidth;

//             const newImage = Math.ceil(scrollPosition / imageWidth) + 1;

//             if (newImage !== currentImage) {
//                 setCurrentImage(newImage);
//             }
//         };

//         container.addEventListener('scroll', handleScroll);

//         return () => {
//             container.removeEventListener('scroll', handleScroll);
//         };
//     }, [currentImage]);

//     const scrollToImage = (imageNumber) => {
//         const container = containerRef.current;
//         const imageWidth = container.offsetWidth;

//         container.scrollTo({
//             left: (imageNumber - 1) * imageWidth,
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <div className="flex flex-col h-screen overflow-x-auto snap-x" ref={containerRef}>
//             <div className="flex-shrink-0 bg-cover bg-center h-screen snap-align-start" style={{ backgroundImage: 'url("/image1.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">This is image 1</h1>
//                 </div>
//             </div>

//             <div className="flex-shrink-0 bg-cover bg-center h-screen snap-align-start" style={{ backgroundImage: 'url("/image2.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">This is image 2</h1>
//                 </div>
//             </div>

//             <div className="flex-shrink-0 bg-cover bg-center h-screen snap-align-start" style={{ backgroundImage: 'url("/image3.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">This is image 3</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

// const Home = () => {

//     return (
//         <div className="flex flex-col h-screen overflow-x-auto snap-x">
//             <div className="flex-shrink-0 bg-cover bg-center h-screen  snap-align-start" style={{ backgroundImage: 'url("/image1.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">this is image 1</h1>
//                 </div>
//             </div>

//             <div className="flex-shrink-0 bg-cover bg-center h-screen snap-align-start" style={{ backgroundImage: 'url("/image2.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">this is image 1</h1>
//                 </div>
//             </div>

//             <div className="flex-shrink-0 bg-cover bg-center h-screen  snap-align-start" style={{ backgroundImage: 'url("/image3.jpg")' }}>
//                 <div className="text-center flex justify-center items-center h-screen">
//                     <h1 className="text-3xl font-bold">this is image 1</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
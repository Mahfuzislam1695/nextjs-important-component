import React, { useState, useEffect } from 'react';
import styles from '@/styles/ImageSlider.module.css';
import image1 from "@/asset/image1.jpg"
import image2 from "@/asset/image2.jpg"
import image3 from "@/asset/image3.jpg"

const ImageSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Check if window is defined before using it
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollPosition(window.scrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const calculateImageIndex = () => {
        // Check if window is defined before using it
        if (typeof window !== 'undefined') {
            const imageCount = 3;
            const index = Math.floor((scrollPosition / window.innerHeight) * imageCount);
            return index % imageCount;
        }

        return 0;
    };

    const getImageUrl = (index) => {
        const imageUrls = [
            image1,
            image2,
            image3,
        ];

        return `url(${imageUrls[index]})`;
    };

    const imageIndex = calculateImageIndex();
    const backgroundImage = getImageUrl(imageIndex);

    console.log("imageIndex", imageIndex);
    console.log("backgroundImage", backgroundImage);

    return (
        <div
            className={styles.imageSlider}
            style={{ backgroundImage }}
        >
            <h1 className="text-white">Scroll to change background image</h1>
        </div>
    );
};

export default ImageSlider;
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import './Main_Image.css';

export default function MainImage() {
    const [screenSize, setScreenSize] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1440) setScreenSize("desktop");
            else if (width >= 1024) setScreenSize("tablet");
            else setScreenSize("mobile");
        };

        handleResize(); // for Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getImageSrc = () => {
        switch (screenSize) {
            case "desktop":
                return "/Images/main_image.png";
            case "tablet":
                return "/Images/main_image_desctop.jpg";
            default:
                return "/Images/main_image_mobile.jpg";
        }
    };

    return (
        <Image
            src={getImageSrc()}
            className="main-image"
            alt="Main Image"
            width={100}
            height={560}
            layout="responsive"
        />
    );
}

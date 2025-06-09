"use client";
import Image from "next/image";
import './Blog.css';
import Blog_slider from "../Blog_slider/page";
import { useEffect, useState } from "react";

const explorMoreData = [
    {
        image: "/Images/Explore_image_one.jpg",
        category: "Culinary",
        date: "13 Jun 2022",
        description: "Two women in local stand are chatting during morning..",
    },
    {
        image: "/Images/Explore_image_one.jpg",
        category: "Travel",
        date: "22 Jul 2022",
        description: "Enjoying the sunset on Padar island together",
    },
    {
        image: "/Images/Explor_image_two.jpg",
        category: "Travel",
        date: "22 Jul 2022",
        description: "Enjoying the sunset on Padar island together",
    },
];

const tourGuidesData = [
    {
        name: "Miranda Rachel",
        image: "/Images/Miranda_Rachel.jpg",
        location: "Jombang, Jawa timur",
        ratingImage: "/Images/Four_star.jpg",
        rating: "4.0",
    },
    {
        name: "Danielle Marsh",
        image: "/Images/Danielle_Marsh.jpg",
        location: "Wonosobo, Jawa ten..",
        ratingImage: "/Images/Four_star.jpg",
        rating: "4.0",
    },
    {
        name: "Kang Haerin",
        image: "/Images/Kang_Haerin.jpg",
        location: "Bandung, Jawa barat",
        ratingImage: "/Images/Five_star.jpg",
        rating: "5.0",
    },
];

export default function MainImage() {
    const [screenSize, setScreenSize] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1440) setScreenSize("desktop");
            else if (width >= 1024) setScreenSize("tablet");
            else setScreenSize("mobile");
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="blog-container">
                {/* Main Blog Section */}
                <section className="section">
                    <div className="head-section">
                        <div className="blog-author">
                            <div>
                                <Image src={"/Images/Alex_Carter_image.jpg"}
                                    className="author-image"
                                    alt="Author Image"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span>Alex Carter</span>
                        </div>
                        <div className="head-date">
                            <p>23 January</p>
                            <p>2025</p>
                        </div>
                    </div>

                    <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <p className="p-detail">With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p>

                    <p>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <p className="p-last">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>

                    {/* Call Blogs Slider */}
                    {(screenSize === "desktop" || screenSize === "tablet") && <Blog_slider />}
                </section>

                {/* Explore More Section */}
                <section className="side-section">
                    <div className="side-section-head">
                        <h3>Explore more</h3>

                        <div className="">
                            {explorMoreData.map((item, index) => (
                                <div className="side-section-card" key={index}>
                                    <Image
                                        src={item.image}
                                        className="side-image"
                                        alt="Author Image"
                                        width={300}
                                        height={165}
                                    />
                                    <div className="side-content">
                                        <div className="side-content-head">
                                            <h4>{item.category}</h4>
                                            <span>{item.date}</span>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Tour Guides */}
                            <div className="tour-guides">
                                <h3>Tour Guides</h3>

                                {tourGuidesData.map((guide, index) => (
                                    <div className="tour-guides-box-container" key={index}>
                                        <div className="tour-guides-box">
                                            <div>
                                                <Image
                                                    src={guide.image}
                                                    alt={`${guide.name} Image`}
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div>
                                                <h4>{guide.name}</h4>
                                                <div className="tour-guides-box-content">
                                                    <Image
                                                        src="/Images/location_icon.svg"
                                                        alt="Location Icon"
                                                        width={13}
                                                        height={16}
                                                    />
                                                    <span>{guide.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tour-guides-starDiv">
                                            <Image
                                                src={guide.ratingImage}
                                                alt="Star Icon"
                                                width={104}
                                                height={18}
                                            />
                                            <h5>({guide.rating})</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {screenSize === "mobile" && <Blog_slider />}

        </>
    );
}
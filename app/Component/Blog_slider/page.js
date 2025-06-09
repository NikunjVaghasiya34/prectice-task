"use client";
import { useRef } from "react";
import "./Blog_slider.css";
import Image from "next/image";

const slides = [
    {
        name: "Alex Carter",
        image: "/Images/Alex_Carter_image.jpg",
        description: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures."
    },
    {
        name: "Samantha Lee",
        image: "/Images/Alex_Carter_image.jpg",
        description: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures."
    },
    {
        name: "Michael Chen",
        image: "/Images/Alex_Carter_image.jpg",
        description: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures."
    },
    {
        name: "Rachel Kim",
        image: "/Images/Alex_Carter_image.jpg",
        description: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures."
    }
];

export default function BlogSlider() {
    const containerRef = useRef(null);

    const scroll = (direction) => {
        const { current } = containerRef;
        const scrollAmount = current.offsetWidth + 16;
        if (direction === "left") {
            current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="slider-container" ref={containerRef}>
                {slides.map((slide, index) => (
                    <div className="slide-card" key={index}>
                        <h3>About {slide.name}</h3>
                        <Image src={slide.image}
                            alt={slide.name}
                            width={100}
                            height={100}
                            className="slide-image"
                        />
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>
            <div className="slider-controls">
                <div className="slider-control-div">
                    <button onClick={() => scroll("left")} className="arrow-btn-left">
                        <img src="/Images/Prev_icon.svg" alt="Left Arrow" width={16} height={16} />
                        <span>Previous</span>
                    </button>
                    <p>5 Tips for Better Cardio Sessions</p>
                </div>
                <div className="slider-control-div">
                    <button onClick={() => scroll("right")} className="arrow-btn-right">
                        <span>Next</span>
                        <img src="/Images/Next_icon.svg" alt="Right Arrow" width={16} height={16} />
                    </button>
                    <p>Meal Prep Basics for Gym Enthusiasts</p>
                </div>
            </div>
        </div>
    );
}

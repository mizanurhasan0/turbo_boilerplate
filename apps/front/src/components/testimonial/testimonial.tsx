'use client'
import React, { useEffect, useRef, useState } from 'react';
import Img from '../Image/Img';

const slides = [
    { id: 1, name: "Eng. Mizanur Hasan", position: 'Software Engineer', info: 'Duis faucibus enim vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac, dui accres.. vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac,..', img: "/person/hasan.jpg" },
    { id: 2, name: "Ms Jasmin", position: 'Creative Artists', info: 'Duis faucibus enim vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac, dui accres.. vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac,..', img: "/person/female1.jpg" },
    { id: 3, name: "A/E Usman.", position: 'Architect Engineer', info: 'Duis faucibus enim vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac, dui accres.. vitae nunc molestie, nec nec arcu facilisis arcu Nullam mattis bibendum aac,..', img: "/person/male1.jpg" },
]

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);


    let timing: string | number | NodeJS.Timeout | undefined;
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide(); // prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev >= slides.length - 1 ? 0 : prev + 1));
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (

        <div className="relative overflow-hidden h-auto flex items-center justify-center bg-[url('/images/art13.webp')] bg-no-repeat bg-cover bg-fixed select-none">
            <div className="relative text-white w-full max-w-3xl">
                <div className="overflow-hidden flex cursor-pointer" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
                    {slides.map((p, idx) => (
                        <div
                            key={idx}
                            className="min-w-full duration-300 flex flex-col items-center justify-cente space-y-2 py-16 px-4" style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <Img src={p.img} alt="img" className="w-20 h-20 rounded-full" />

                            <h4 className="text-center font-semibold text-xl">{p.name}</h4>
                            <p className="text-center font-normal text-base bg-primary px-3 rounded-md text-gray-700">{p.position}</p>
                            <p className="text-center text-sm ">{p.info}</p>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-3 justify-center pb-10">
                    {slides.map((_, idx) => (
                        <div key={idx} className={`w-4 h-4 rounded-full border-2   border-primary shadow-xl shadow-red-500 transition-all duration-300 ease-in-out  ${currentSlide === idx ? ' scale-125 ' : ''}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

'use client'
import React, { useEffect, useRef, useState } from 'react';

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    { id: 1, title: "Slide One", img: "./products/1.jpg" },
    { id: 2, title: "Slide Two", img: "./products/2.jpg" },
    { id: 3, title: "Slide Three", img: "./products/3.jpg" },
]

export default function Keen_Slider() {
    const sliderContainerRef = useRef<HTMLDivElement | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1, spacing: 8 },
        created(s) {
            setCurrentSlide(s.track.details.rel)
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
    })

    // Autoplay logic
    useEffect(() => {
        if (!instanceRef.current) return

        let timeout: NodeJS.Timeout
        let mouseOver = false

        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
                instanceRef.current?.next()
            }, 3500)
        }

        instanceRef.current.on("created", () => {
            const container = sliderContainerRef.current
            if (!container) return

            container.addEventListener("mouseover", () => {
                mouseOver = true
                clearTimeout(timeout)
            })

            container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })

            nextTimeout()
        })

        instanceRef.current.on("dragStarted", () => clearTimeout(timeout))
        instanceRef.current.on("animationEnded", nextTimeout)
        instanceRef.current.on("updated", nextTimeout)

        return () => clearTimeout(timeout)
    }, [instanceRef])

    return (
        <div ref={sliderContainerRef} className="relative w-full">
            <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
                {slides.map((slide) => (
                    <div key={slide.id} className={`keen-slider__slide  w-screen h-[70vh]`}>
                        <img src={slide.img} alt="img" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:scale-105 transition"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:scale-105 transition"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`h-2 w-2 rounded-full ${currentSlide === idx ? "bg-black" : "bg-gray-400"} transition-all duration-300`}
                    />
                ))}
            </div>
        </div>
    )
}

'use client'
import React, { useEffect, useRef, useState } from 'react';


import { useKeenSlider } from 'keen-slider/react'
import CarasolActions from './actions';

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
            }, 9500)
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-10 text-center">
                <h1 className="text-2xl md:text-7xl font-bold text-white text-center tracking-wide bg-gray-500/50 shadow-2xl shadow-yellow-100 max-w-2xl capitalize py-4 rounded-xl">Art is the highest form of hope </h1>
                <p className="text-xs md:text-base bg-primary p-2 inline rounded-sm px-4">Trused online platform all over the world!</p>
                <button type="button" className="block text-xs md:text-base bg-black text-white py-2 px-4 mx-auto my-5 rounded-md shadow-xl hover:shadow-yellow-200 transition-all duration-300 cursor-pointer">Shop now</button>
            </div>
            <CarasolActions onNext={() => instanceRef.current?.next()} onPrev={() => instanceRef.current?.prev()} onMoveIdx={(idx: number) => instanceRef.current?.moveToIdx(idx)} slides={slides} currentSlide={currentSlide} />
        </div>
    )
}

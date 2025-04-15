import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type actionsType = {
    onPrev: () => void,
    onNext: () => void,
    onMoveIdx: (idx: number) => void,
    currentSlide: number,
    slides: { id: number, title: string, img: string }[]
}

export default function CarasolActions({ onPrev = () => { }, onNext = () => { }, onMoveIdx = () => { }, slides = [], currentSlide }: actionsType) {
    return (
        <>
            {/* Arrows */}
            <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:scale-105 transition"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:scale-105 transition"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, idx) => (
                    // <button
                    //     key={idx}
                    //     onClick={() => onMoveIdx(idx)}
                    //     className={`h-2 w-2 rounded-full ${currentSlide === idx ? "bg-black" : "bg-gray-400"} transition-all duration-300`}
                    // />
                    <div key={idx} className={`w-4 h-4 rounded-full border-2   border-primary shadow-xl shadow-red-500 transition-all duration-300 ease-in-out  ${currentSlide === idx ? ' scale-125 ' : ''}`} />
                ))}
            </div>
        </>
    )
}

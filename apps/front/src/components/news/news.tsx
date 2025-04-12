'use client'
import React, { useRef } from 'react'
import NewCard from './compNews/NewCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function News() {
    const scrollNewsRef = useRef<HTMLDivElement>(null);

    const onScroll = (dir: string) => {
        if (scrollNewsRef.current) {
            const scrollAmount = 300;
            scrollNewsRef.current.scrollBy({
                left: dir === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className="relative container mx-auto overflow-hidden ">
            <div className="flex items-center flex-col justify-center py-10">
                <h1 className="text-4xl font-bold italic">Latest News</h1>
                <img src="/icons/separator.png" alt="divider" />
            </div>
            <div ref={scrollNewsRef} className="overflow-x-auto scroll-smooth no-scrollbar">
                <div className="grid grid-flow-col auto-cols-[minmax(400px,_1fr)] space-x-4">
                    {Array.from({ length: 10 }).map((itm, i) => (
                        <div key={i}>
                            <NewCard />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex space-x-2">
                        <div className="border-2 border-primary p-1 rounded-full cursor-pointer" onClick={() => onScroll("left")}>
                            <ArrowLeft />
                        </div>
                        <div className="border-2 border-primary p-1 rounded-full cursor-pointer" onClick={() => onScroll("right")}>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

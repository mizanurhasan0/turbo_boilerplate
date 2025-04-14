import { BadgeCent, Car, Clock12, HandCoins, Plane } from 'lucide-react'
import React from 'react'

const options = [
    { title: "Free Delivery", sub: "Delivery To Door", icon: Plane },
    { title: "24H support", sub: "in safe hands", icon: Clock12 },
    { title: "Big Discounts", sub: "At Lowest Price", icon: BadgeCent },
    { title: "Money Back", sub: "Money Back guarantee", icon: HandCoins }
]
export default function TTService() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center w-full px-24">
            {options.map((d, i) => (
                <div key={i} className="flex space-x-4 items-center">
                    <div className="w-[2.5rem] md:w-[3rem] overflow-hidden">
                        <d.icon className="w-full h-full text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold uppercase text-sm md:text-base">{d.title}</h4>
                        <p className="capitalize text-[#666666] text-xs md:text-sm">{d.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

import { BadgeCent, Car, Clock12, HandCoins } from 'lucide-react'
import React from 'react'

const options = [
    { title: "Free Delivery", sub: "Delivery To Door", icon: Car },
    { title: "24H support", sub: "in safe hands", icon: Clock12 },
    { title: "Big Discounts", sub: "At Lowest Price", icon: BadgeCent },
    { title: "Money Back", sub: "Money Back guarantee", icon: HandCoins }
]
export default function TTService() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center w-full px-24">
            {options.map((d, i) => (
                <div key={i} className="flex space-x-4 items-center">
                    <div className="w-[3.875rem] text-[#666666] overflow-hidden">
                        <d.icon className="w-full h-full  font-thin " />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold uppercase">{d.title}</h4>
                        <p className="capitalize text-[#666666]">{d.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

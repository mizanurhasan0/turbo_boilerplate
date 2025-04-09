'use client'
import { ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

type params = {
    name: string, sellingPrice: string, price: number
}
export default function Card({ name, sellingPrice, price }: params) {
    const navigate = useRouter();

    // const imgLength = prods?.image?.length > 0

    return (
        <div className="relative h-56 perspective-distant group overflow-hidden rounded-md ">
            <div className="h-full relative group cursor-pointer transform-3d transition-transform duration-1000  group-hover:rotate-y-180">
                <div className="absolute backface-hidden  h-full w-full">
                    <img src='./products/1.jpg' alt="image" className="object-cover w-full h-full" />
                </div>
                <div className="absolute rotate-y-180 backface-hidden w-full h-full">
                    <img src='./products/2.jpg' alt="image" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="absolute bottom-0 w-full">
                <div className="bg-white/60 inline-block rounded-sm overflow-hidden px-2 shadow-xl border-r-4 border-primary">
                    <p className="text-xl font-semibold text-base3 truncate max-w-sm capitalize py-2">{name}</p>
                    <div className="flex justify-center space-x-4 text-base4">
                        <p className="text-xl font-semibold">{sellingPrice} TK</p>
                        <p className="line-through pt-1">{price} TK</p>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center text-xs font-semibold my-2 w-full ">
                    <div className="border border-primary flex items-center py-1 px-3 rounded-sm space-x-2 cursor-pointer bg-black/50 shadow-xl hover:shadow-yellow-200 duration-200">
                        <ShoppingBasket className="" />
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Card from '@/components/cardList/card';
import Pagination from '@/components/paagination/Pagination';
import React from 'react';


export default function ProductsList() {
    return (
        <div className="pb-10  w-full">
            <div className="relative w-full h-48 overflow-hidden rounded-sm border-4 border-gray-300">
                <img src='/products/3.jpg' alt="banner" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" font-semibold text-2xl xl:text-4xl bg-white/60 p-5 rounded-sm shadow-2xl">Exclusive Items!</h1>
                </div>
            </div>
            <div className="flex justify-between items-center py-4">
                <p className="font-semibold opacity-50">Showing 2344 results for</p>
                <div className="flex items-center space-x-3">
                    <p className="border px-3 py-2 rounded-md">Sort By</p>
                    <p className="border px-3 py-2 rounded-md">Price</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p) => (<div key={p}><Card name="product name" price={120} sellingPrice='1233' /></div>))}
            </div>
            <div>
                <Pagination currentPage={1} totalPages={10} />
            </div>
        </div>
    )
}
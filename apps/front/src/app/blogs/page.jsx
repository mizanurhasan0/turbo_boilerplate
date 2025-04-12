import React from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Blogs() {
    return (
        <div className="container mx-auto py-10 space-y-10">

            <div className="grid grid-cols-2 gap-5">

                <div className="relative col-span-1">
                    <img src='/images/art2.png' alt="img" className="h-full w-full object-cover" />
                    <div className="absolute bottom-4 p-5 space-y-2">
                        <p className="bg-primary text-white inline p-1 px-2 uppercase">Health</p>
                        <h4 className="text-2xl font-bold text-white">Exploring the connection between gut health and mental well-being</h4>
                        <p>Februry 24, 2025</p>
                    </div>
                </div>

                <div className="col-span-1 relative space-y-5">
                    <div className="flex space-x-2">
                        <img src='/images/art3.png' alt="img" className="w-60 h-60 object-cover" />
                        <div className="flex flex-col justify-center items-start space-y-2">
                            <p className="bg-primary text-white inline p-1 px-2 uppercase">Sports</p>
                            <h4 className="text-2xl font-medium">Exploring the connection between gut health and mental well-being</h4>
                            <p>Februry 24, 2025</p>
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <img src='/images/art3.png' alt="img" className="w-60 h-60 object-cover" />
                        <div className="flex flex-col justify-center items-start space-y-2">
                            <p className="bg-primary text-white inline p-1 px-2 uppercase w-auto">Sports</p>
                            <h4 className="text-2xl font-medium">Exploring the connection between gut health and mental well-being</h4>
                            <p>Februry 24, 2025</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* 2nd part */}

            <div>
                <div className="border-l-4 border-primary flex items-center justify-between space-x-4">
                    <p className="text-xl px-5">Art</p>
                    <span className="border border-red-500 w-full" />
                    <div className="flex items-center">
                        <p className="whitespace-nowrap">View all</p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

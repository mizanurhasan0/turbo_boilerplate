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

            <div className="space-y-10">
                <div className="border-l-4 border-primary flex items-center justify-between space-x-4">
                    <p className="text-xl px-5">Posts</p>
                    <span className="border border-red-500 w-full" />
                    <div className="flex items-center">
                        <p className="whitespace-nowrap">View all</p>
                        <ArrowRight />
                    </div>
                </div>
                <div className="flex flex-col space-y-10 md:space-x-0 md:grid md:grid-cols-4 gap-5">
                    <div className="flex flex-col col-span-3 space-y-5">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div className="relative flex flex-col space-x-2" key={i}>
                                <img src='/images/art3.png' alt="img" className=" object-cover" />
                                <p className="absolute top-10 bg-primary text-white inline p-1 px-2 uppercase w-auto rounded-md left-5 shadow-2xl">Sports</p>
                                <div className="flex flex-col justify-center items-start space-y-2">
                                    <p className="pt-5">Februry 24, 2025</p>
                                    <h4 className="text-2xl font-medium ">Exploring the connection between gut health and mental well-being</h4>

                                    <p className="line-clamp-2 truncate whitespace-break-spaces" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi deleniti blanditiis nemo hic esse cupiditate, magni, delectus possimus modi aliquam perspiciatis porro officia corrupti, accusantium velit ut quidem adipisci!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi deleniti blanditiis nemo hic esse cupiditate, magni, delectus possimus modi aliquam perspiciatis porro officia corrupti, accusantium velit ut quidem adipisci!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi deleniti blanditiis nemo hic esse cupiditate, magni, delectus possimus modi aliquam perspiciatis porro officia corrupti, accusantium velit ut quidem adipisci!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi deleniti blanditiis nemo hic esse cupiditate, magni, delectus possimus modi aliquam perspiciatis porro officia corrupti, accusantium velit ut quidem adipisci! </p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="col-span-1 space-y-8">
                        <div className="relative pt-8">
                            <img src='/images/art6.png' alt="author" />
                            <div className="absolute left-1/2 translate-x-[-50%] top-1/2 font-semibold text-xl bg-primary p-2 rounded-md">About Author</div>
                        </div>
                        <div className="border-2 border-gray-100 rounded-md p-2 py-4">
                            <p className="p-4 font-semibold text-center">Latest posts</p>
                            <div className="space-y-8">
                                {Array.from({ length: 8 }).map((_, key) => (
                                    <div className="flex space-x-2 cursor-pointer" key={key}>
                                        <img src='/images/art8.png' alt="img" className="w-1/3 object-cover" />
                                        <div className="flex flex-col justify-center items-start space-y-2">
                                            <h4 className="text-xl font-medium line-clamp-2
                                        whitespace-break-spaces truncate">Exploring the connection between gut health and mental well-being</h4>
                                            <p className="text-sm">Februry 24, 2025</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'
import React, { useState } from 'react';
import Image from 'next/image'

export default function Img({ className = "", src = "", alt = "Picture of the author" }) {
    // const [imgUrl, setImgUrl] = useState<string>(src);
    // const [loading, setLoading] = useState(true);
    return (
        <div className={`${className} relative overflow-hidden`}>
            {/* {loading ? (
                <div className="absolute h-full w-full animate-pulse inset-0 flex items-center justify-center bg-white text-black z-10" />
            ) : ''} */}
            <Image
                src={src}
                fill
                alt={alt}
                // placeholder='blur'
                // onLoadingComplete={() => setLoading(false)}
                // blurDataURL='/notfound.jpg'
                className="w-full h-full object-cover"
                priority
                onError={(e) => (e.currentTarget.srcset = "/notfound.jpg")}
            />
        </div>
    )
}

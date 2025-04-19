'use client'
import React, { useEffect, useRef } from 'react';

export default function Gallary() {
    const imgRef = useRef<HTMLDivElement>(null);

    const onHandleMouseMove = (e: MouseEvent) => {
        const imageZoom = imgRef.current;
        if (!imageZoom) return;
        const { offsetX, offsetY } = e;
        const { offsetHeight, offsetWidth } = imageZoom;
        imageZoom.style.setProperty('--display', 'block');
        imageZoom.style.setProperty('--zoom-x', `${(offsetX * 100) / offsetWidth}%`);
        imageZoom.style.setProperty('--zoom-y', `${(offsetY * 100) / offsetHeight}%`)
        imageZoom.style.setProperty('--display', 'block');
    }
    const onHandleMouseLeave = () => {
        const imageZoom = imgRef.current;
        if (!imageZoom) return;
        imageZoom.style.setProperty('--display', 'none');
    }
    useEffect(() => {
        let imageZoom = imgRef.current;
        imageZoom?.addEventListener('mousemove', onHandleMouseMove);
        imgRef.current?.addEventListener('mouseleave', onHandleMouseLeave);

        return () => {
            imageZoom?.removeEventListener('mousemove', onHandleMouseMove);
            imageZoom?.removeEventListener('mouseleave', onHandleMouseLeave);
        }
    }, []);

    return (
        <div className="space-y-4">
            <div ref={imgRef} className="imageZoom relative rounded-sm overflow-hidden cursor-pointer flex" style={{
                "--zoomImg": 'url(/products/1.jpg)', "--display": "none"
            } as React.CSSProperties}>
                <img src="/products/1.jpg" alt="img" className=" w-full h-full object-contain" />
            </div>
            <div className="flex space-x-4 overflow-auto ">
                <div className="w-20 h-20 border border-base6">
                    <img src="/products/1.jpg" alt="img" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 border border-base6">
                    <img src="/products/1.jpg" alt="img" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 border border-base6">
                    <img src="/products/1.jpg" alt="img" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
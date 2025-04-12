import React from 'react';

export default function Gallary() {
    return (
        <div className="space-y-4">
            <div className="rounded-sm overflow-hidden">
                <img src="/products/1.jpg" alt="img" className="w-full h-full object-contain" />
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
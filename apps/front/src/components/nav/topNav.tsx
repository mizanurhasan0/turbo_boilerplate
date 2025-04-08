'use client'
import { ChevronDown, Lock, User, UserRound } from 'lucide-react'
import React, { useRef } from 'react'

export default function TopNav() {
    const menuRef = useRef<HTMLDivElement>(null);

    const showMenu = () => {
        ['opacity-0', 'scale-y-0', 'skew-y-10'].forEach(cls => menuRef.current?.classList.toggle(cls))
    }
    return (
        <div className="h-[46px]  bg-black text-sm">
            <div className="container mx-auto flex items-center justify-between h-full">
                <p className="">World's Fastest Online Shopping Destination</p>
                <div className="relative h-full">
                    <div className="flex justify-center items-center h-full cursor-pointer select-none" onClick={showMenu}>
                        <p>My Account</p>
                        <ChevronDown className="w-4" />
                    </div>
                    <div ref={menuRef} className="absolute opacity-0 scale-y-0 skew-y-10 origin-top right-0 w-max max-w-[calc(100vw-1rem)]  p-2 rounded-md bg-white text-gray-600 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                            <User className="w-4" />
                            <p>Register</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Lock className="w-4" />
                            <p>Login</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

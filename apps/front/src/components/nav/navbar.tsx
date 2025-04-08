'use client';
import { useEffect, useRef, useState } from 'react';
import MidNav from './midNav';
import TopNav from './topNav';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const mobMenuRef = useRef<HTMLDivElement>(null);
    const menuIconRef = useRef<HTMLImageElement>(null);

    const toggleMenu = () => {
        const menu = mobMenuRef.current;
        const icon = menuIconRef.current;

        if (menu) {
            if (icon) icon?.src.includes('cross') ? icon.src = "./icons/menu.svg" : icon.src = "./icons/cross.svg"
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('scale-y-0');
            menu.classList.toggle('skew-y-6');
            menu.classList.toggle('skew-y-0');
            menu.classList.toggle('pointer-events-none');
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // scroll threshold
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <TopNav />
            <MidNav />
            <nav className={`fixed w-full top-[156px] z-10 transform transition-all duration-300 ease-in-out shadow-sm bg-[#fbc91d] ${scrolled ? 'h-14 shadow-md' : 'h-20'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full w-full ">

                        <div className="hidden md:flex  space-x-6 h-full w-full items-center justify-center">
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
                            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
                        </div>

                        {/*                       
                        <div className="hidden md:flex">
                            <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Login</a>
                        </div> */}

                        {/* <!-- Mobile Hamburger --> */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 focus:outline-none">
                                <img ref={menuIconRef} src='./icons/menu.svg' alt='close' className="w-7 h-7" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile Menu --> */}
                <div ref={mobMenuRef} className="origin-top transform  transition-all duration-500 ease-in-out opacity-0 scale-y-0 skew-y-6 pointer-events-none md:hidden bg-gray-100">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Services</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</a>
                        <a href="#" className="block mt-2 px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Login</a>
                    </div>
                </div>
            </nav >
        </div>
    );
}

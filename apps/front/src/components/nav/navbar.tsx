'use client';
import { useEffect, useRef, useState } from 'react';
import MidNav, { Cart } from './midNav';
import TopNav from './topNav';
import { Search } from 'lucide-react';

const listMenu = [{ name: "Home" }, { name: "Service" }, { name: "About" }, { name: "Context" }]
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const mobMenuRef = useRef<HTMLDivElement>(null);
    const menuIconRef = useRef<HTMLImageElement>(null);
    const searchInputRef = useRef<HTMLImageElement>(null);

    const toggleMenu = () => {
        const menu = mobMenuRef.current;
        const icon = menuIconRef.current;

        if (menu) {
            if (icon) icon?.src.includes('cross') ? icon.src = "./icons/menu.svg" : icon.src = "./icons/cross.svg";
            ['opacity-0', 'scale-y-0', 'skew-y-6', 'pointer-events-none'].forEach((cls) => menu.classList.toggle(cls))
        }
    }
    const onShowSearch = () => {
        ['opacity-0', 'scale-y-0', 'skew-y-0'].forEach((cls) => searchInputRef.current?.classList.toggle(cls))
    }
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // scroll threshold
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed w-full top-0 z-10">
            <TopNav />
            <MidNav />
            <nav className={`transform transition-all duration-300 ease-in-out shadow-sm bg-[#fbc91d] ${scrolled ? 'h-14 shadow-md' : 'h-20'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full w-full ">

                        <div className="hidden md:flex  space-x-6 h-full w-full items-center justify-center">
                            {listMenu.map((m, i) => (
                                <a href="#" key={i} className="text-gray-700 hover:text-indigo-600">{m?.name}</a>
                            ))}
                        </div>

                        {/* <!-- Mobile Hamburger --> */}
                        <div className="md:hidden flex items-center w-full h-full">
                            <div className="flex items-center justify-between w-full" onClick={toggleMenu}>
                                <p className="tracking-wide text-black">Categories</p>
                                <button

                                    className="text-gray-600 focus:outline-none">
                                    <img ref={menuIconRef} src='./icons/menu.svg' alt='close' className="w-7 h-7" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2 pl-2 md:hidden h-full">
                                <div className="relative h-full">
                                    <Search onClick={onShowSearch} className="text-black h-full" />
                                    <div ref={searchInputRef} className="absolute right-0 skew-y-0 scale-y-0 w-max max-w-[100vw-1rem] opacity-0 origin-top transition-all duration-300">
                                        <input type='text' placeholder='Search...' className="bg-white outline-none text-black p-2 rounded-md" />
                                    </div>
                                </div>
                                <Cart />
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Mobile Menu --> */}
                <div ref={mobMenuRef} className="origin-top transform  transition-all duration-500 ease-in-out opacity-0 scale-y-0 skew-y-6 pointer-events-none md:hidden bg-gray-100">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {listMenu.map((d, i) => (
                            <a href="#" key={i} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">{d?.name}</a>
                        ))}
                    </div>
                </div>
            </nav >
        </div>
    );
}

import { PhoneCall, ShoppingBag } from 'lucide-react';
import React, { useRef } from 'react';
import FlipIcon from '../flipCard/flip.icon';
import ShoppingCard from '../cardList/shopping.card';

export const Cart = () => {
    const cartListMenu = useRef<HTMLDivElement>(null);
    const onOpen = () => {
        ['scale-y-0', 'skew-y-0', 'opacity-0'].forEach((cls) => cartListMenu.current?.classList.toggle(cls))
    }
    return (
        <div className="relative h-full">
            <div className="h-full" onClick={onOpen}>
                <div className="md:hidden flex items-center h-full">
                    <ShoppingBag className="text-black" />
                </div>
                <div className="hidden md:flex items-center justify-center space-x-2 group h-full">
                    <div className=" w-[3.125rem] h-[3.125rem] perspective-distant">
                        <FlipIcon frontPart={<ShoppingBag className="text-black" />} backPart={<ShoppingBag className="text-black" />} />
                    </div>
                    <Details title='Checkout:' value="0 items" />
                </div>
            </div>
            <div ref={cartListMenu} className="z-20 absolute opacity-0 origin-top skew-y-0 scale-y-0 w-max right-0 max-w-[calc(100vw-1rem)] transition-all duration-300 bg-black">
                <ShoppingCard />
            </div>
        </div>
    )

}

const Details = ({ title, value }: { title: string, value: string }) => (
    <div>
        <p className="text-xs leading-6 tracking-widest">{title}</p>
        <span className="font-semibold text-xl leading-6 tracking-widest">{value}</span>
    </div>
)
// bg-[]
export default function MidNav() {

    return (
        <div className="z-20 hidden md:block  h-[110px] bg-third
         text-white">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex space-x-2 group">
                    <div className=" w-[3.125rem] h-[3.125rem] perspective-distant">
                        <FlipIcon frontPart={<PhoneCall className="text-black" />} backPart={<PhoneCall className="text-black rotate-180" />} />
                    </div>

                    <Details title='Call Us Now' value="01816-5025456" />
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center flex-col w-full md:w-auto">
                    <p>The well-off</p>
                    <p>Clients</p>
                </div>
                {/* Flip card */}
                <div>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

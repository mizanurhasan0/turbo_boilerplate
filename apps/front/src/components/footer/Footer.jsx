import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import NewsSubscription from '../news/compNews/NewsSubscription';

const social = [{ Icon: Facebook, href: "" }, { Icon: Twitter, href: "" }, { Icon: Linkedin, href: "" }, { Icon: Github, href: "" }];
const address = [{ Icon: MapPin, info: "15/3 Road-19 , Mirpur-12,Dhaka" }, { Icon: Phone, info: "+880 17XXXXXXX" }, { Icon: Mail, info: "mail@gmail.com" }];

export default function Footer() {
    return (
        <>
            <NewsSubscription />
            <div className="bg-base5 text-base1 py-8">
                <div className="px-2 xl:px-0 container mx-auto grid  xl:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <h2 className="font-semibold capitalize">About the company</h2>
                        <p className="text-sm text-base2">Your about page summarizes your history, values, and mission — all in one place. That’s a tall order for just a few paragraphs. If you’re feeling stuck, turn to these about-page examples for inspiration.</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold capitalize">About the company</h2>
                        <p className="text-sm text-base2">Your about page summarizes your history, values, and mission — all in one place. That’s a tall order for just a few paragraphs. If you’re feeling stuck, turn to these about-page examples for inspiration.</p>
                        <div className="flex items-center space-x-2">
                            {social.map((d, i) => (
                                <d.Icon className=" p-2 w-10 h-10" key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        {address.map((d, i) => (
                            <div className="flex space-x-2" key={i}>
                                <d.Icon />
                                <p className="font-semibold">{d.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-base2 text-base3 text-sm font-bold capitalize text-center">
                <p>© Copyright softwareBD</p>
            </div>
        </>
    )
}
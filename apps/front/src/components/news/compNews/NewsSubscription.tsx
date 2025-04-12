import React from 'react'

export default function NewsSubscription() {
    return (
        <div className="bg-primary">
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 py-6 gap-4">
                <div className="flex items-center md:items-start justify-center  flex-col">
                    <h2 className="font-semibold text-3xl">Newsletter</h2>
                    <p className="text-base">Wants Tto Get Latest Updates! Sign Up For Free</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border-b pl-5 pb-2 border-gray-500/50 space-x-5">
                        <input className="border-0 outline-none xl:w-md" type="text" placeholder="Your email address" />
                        <button className="bg-black text-white py-2 px-4 rounded-full " type='button'>Subscription</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import Gallary from './components/Gallary';
import InfoProducts from './components/InfoProducts';
import Specification from './components/specification';
import Suggestion from './components/Suggestion';

export default function page() {
    return (
        <div className="mx-auto container">
            <div className=" grid grid-cols-2 gap-4 py-8">
                <Gallary />
                <InfoProducts />
            </div>
            <div className="">
                <Specification />
            </div>
            <div className="px-4 md:px-0 my-10">
                <Suggestion />
            </div>
        </div>
    )
}
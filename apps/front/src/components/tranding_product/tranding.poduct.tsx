import React from 'react'
import Card from '../cardList/card'


export default function TrandingPoduct() {
    return (
        <div className="container mx-auto">
            <h1>Tranding Products</h1>

            <div>
                <p>Featured</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {Array.from({ length: 10 }).map((d, i) => (
                    <div key={i}>
                        <Card name={"this is product name"} price={100} sellingPrice='213213' />
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react';
import Category from "./compShops/Category";
import ProductsList from "./compShops/ProductsList"

export default function Shops() {
    return (
        <div className="container mx-auto py-10">
            <div className="flex space-x-4">
                <Category />
                <ProductsList />
            </div>
        </div >
    )
}

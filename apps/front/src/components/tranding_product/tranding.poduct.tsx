import React from 'react'

export default function TrandingPoduct() {
    return (
        <div>
            <h1>Tranding Products</h1>

            <div>
                <p>Featured</p>
            </div>

            <div>
                {Array.from({ length: 10 }).map((d, i) => (
                    <div>

                    </div>
                ))}
            </div>
        </div>
    )
}

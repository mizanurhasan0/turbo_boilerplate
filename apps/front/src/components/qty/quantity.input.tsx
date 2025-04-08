'use client';

import React, { useState } from 'react'

export default function QuantityInput() {
    const [qty, setQty] = useState<number>(1);

    const onAction = (action: string) => {
        if (action === "-") setQty((prev) => prev > 1 ? prev - 1 : prev);
        else if (action === "+") setQty((prev) => prev >= 0 ? prev + 1 : prev);
    }
    const onInput = (e: any) => {
        const val = Number(e.target.value);
        if (val) setQty(val);
    }
    return (
        <div className="py-2 px-3 inline-block border-base4 border-opacity-50 border rounded-sm ">
            <div className="flex items-center gap-x-1.5">
                <button type="button" className="size-6 text-2xl flex items-center justify-center font-bold"
                    onClick={() => onAction('-')} >
                    -
                </button>
                <input className="p-0 w-6 outline-none bg-transparent text-center" type="text" value={qty} onChange={(e) => onInput(e)} />

                <button type="button" className="size-6 text-2xl flex items-center justify-center"
                    onClick={() => onAction('+')}>
                    +
                </button>
            </div>
        </div>
    )
}
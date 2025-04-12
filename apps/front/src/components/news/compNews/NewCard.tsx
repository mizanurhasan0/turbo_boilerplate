import { AlignRight, ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

export default function NewCard() {
    return (
        <div className="rounded-sm overflow-hidden">
            <img src='/products/1.jpg' alt="img" className="max-h-60 w-full object-contain" />
            <div className=" space-y-2 py-2">
                <h4 className="font-medium">Share The Love For OpenCart</h4>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem</p>
                <div className="flex text-sm">
                    <p>Read more</p>
                    <ChevronRight className="w-4" />
                </div>
            </div>
        </div>
    )
}

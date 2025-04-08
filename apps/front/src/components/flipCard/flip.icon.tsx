import React, { ReactNode } from 'react'

interface FlipCardProps {
  frontPart: ReactNode;
  backPart: ReactNode;
  // className: string
}
export default function FlipIcon({ frontPart, backPart }: FlipCardProps) {
  return (

    <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:rotate-y-180">
      <div className="absolute backface-hidden w-full h-full  rounded-full flex items-center justify-center bg-[#F2F2F2]">
        {frontPart}
      </div>
      <div className="absolute rotate-y-180 backface-hidden  w-full h-full rounded-full flex items-center justify-center bg-[#F2F2F2]">
        {backPart}
      </div>
    </div>

  )
}

import React from 'react'
import handmade from '@/public/img/handmade.png'
import Image from 'next/image'

const Heading = ({ subheading, heading }) => {
    return (
        <div className='font-raleway flex flex-col items-center justify-center'>
            <Image src={handmade} alt='Kalariti handmade Logo' className='w-24 pb-4' />
            <p className='uppercase font-bold text-orange-950/60 text-center'>{subheading}</p>
            <h2 className='text-2xl md:text-3xl font-medium font-taviraj text-yellow-950 text-center'>{heading}</h2>
        </div>
    )
}

export default Heading
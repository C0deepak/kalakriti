import React from 'react'
import logo from '@/public/img/logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='px-4 md:px-16 py-2 w-full h-20 flex items-col justify-between font-raleway'>
            <Image src={logo} alt='Goenka Logo' className='w-28' />
        </div>
    )
}

export default Navbar
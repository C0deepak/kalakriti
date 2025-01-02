import Image from 'next/image'
import React from 'react'
import logo from '@/public/img/logo.png'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className='px-4 md:px-16 pt-12 md:pt-16 pb-8 bg-neutral-900 text-white font-raleway'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-8'>
                <div>
                    <Image src={logo} alt='Kalakriti Logo' className='w-28 invert' />
                    <p className='mt-4 text-neutral-400 text-sm'>
                        Kalakriti celebrates the art of handmade, bringing eco-friendly and sustainable crafts to your doorstep. Every purchase supports local artisans and the planet.
                    </p>
                </div>

                <div>
                    <h3 className='text-lg font-taviraj font-medium mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li><Link href='#' className='hover:text-neutral-300'>Home</Link></li>
                        <li><Link href='#' className='hover:text-neutral-300'>Shop</Link></li>
                        <li><Link href='#' className='hover:text-neutral-300'>Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-taviraj font-medium mb-4'>Contact Us</h3>
                    <ul className='space-y-2'>
                        <li>Email : <a href='mailto:support@kalakriti.com' className='hover:text-neutral-300'>support@kalakriti.com</a></li>
                        <li>Phone : <a href='tel:+919876543210' className='hover:text-neutral-300'>+91 98765 43210</a></li>
                        <li>Address : 123 Artisan Lane, Andaman & Nicobar Island, India</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-taviraj font-medium mb-4'>Follow Us</h3>
                    <ul className='flex items-center space-x-4'>
                        <li><a href='#' className='text-neutral-400 hover:text-white'><Facebook /></a></li>
                        <li><a href='#' className='text-neutral-400 hover:text-white'><Instagram /></a></li>
                        <li><a href='#' className='text-neutral-400 hover:text-white'><Twitter /></a></li>
                        <li><a href='#' className='text-neutral-400 hover:text-white'><Youtube /></a></li>
                    </ul>
                </div>
            </div>
            <p className='text-neutral-400 text-center text-sm'>Copyright &copy; Kalakriti 2025-26. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
import React from 'react'
import Link from 'next/link'
import { outfit } from '../fonts'

function Header() {
    return (
        <div className='bg-[#5DA39D]'>
            <div className={`w-full ${outfit.className} lg:pb-0 2xl:w-[1260px] mx-auto`}>
                <div className={`w-full flex justify-between text-gray-100 text-sm px-2 lg:px-0 py-4  lg:text-2xl lg:py-4 `}>
                    <Link href={'/'}><div className='hover:text-white'>Home</div></Link>
                    <Link href={'/about'}><div className='hover:text-white'>About Us</div></Link>
                    <Link href={'/services'}><div className='hover:text-white'>Services</div></Link>
                    <Link href={'/new'}><div className='hover:text-white'>New Patients</div></Link>
                    <Link href={'/information'}><div className='hover:text-white'>Information</div></Link>
                    <Link href={'/contact'}><div className='hover:text-white'>Contact Us</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Header

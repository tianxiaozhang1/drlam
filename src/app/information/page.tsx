"use client";

import React from 'react'
import Image from "next/image";
import { outfit } from '../fonts';

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';
const servicesListContainerClasses = 'py-0 space-y-4 lg:space-y-12';

import StockMan1 from '../../../public/photos/StockMan1.jpg'
import StockWoman1 from '../../../public/photos/StockWoman1.jpg'

import Header from '../components/Header'
import Footer from '../components/Footer'

function InformationPage() {

    return (
        <div className={`${outfit.className} text-white`}>
            
            <Header/>

            {/* Hero Section */}
            <div className='w-full bg-[#5DA39D]'>
                <div className={`${sectionWrapperClasses} pb-6 lg:pb-18 pt-6`}>
                    <div className='text-lg lg:text-4xl text-gray-50'>Dr. Wai-man Lam & Associates</div>
                    <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0'>Dentistry Information</div>
                </div>
            </div>

            <div className='bg-[#e5e7eb] pt-6 lg:pt-12 pb-2'>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses} grid lg:grid-cols-2 lg:gap-x-6`}>

                    {/* LEFT */}
                    <div className={`rounded-4xl overflow-hidden lg:h-[420px]`}>
                        <Image
                            src={StockMan1}
                            alt="Man"
                            className="w-full h-full"
                        />
                    </div>

                    {/* RIGHT  */}
                    <div className='rounded-4xl overflow-hidden lg:h-[420px]'>
                        <Image
                            src={StockWoman1}
                            alt="Woman"
                            className="w-full rounded-4xl"
                        />
                    </div>

                </div>

                <div className='text-4xl lg:text-7xl text-center text-[#12507B] py-6 lg:pb-12'>Brush Teeth.</div>
            </div>

            <Footer/>

        </div>
    )
}

export default InformationPage
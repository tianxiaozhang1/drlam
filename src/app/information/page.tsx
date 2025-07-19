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
import PageTitle from '../components/PageTitle'
import MobileNav from '../components/MobileNav'

function InformationPage() {

    return (
        <div className={`${outfit.className} text-white`}>
            
            <Header/>

            <div className='flex pt-4 lg:pt-0 bg-[#5DA39D]'>
                <PageTitle PageTitleContent="Information" />
                <MobileNav/>
            </div>

            <div className='bg-[#e5e7eb] pt-6 lg:pt-12 pb-2'>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses} grid lg:grid-cols-2 lg:gap-x-6 gap-y-4 lg:gap-y-0`}>

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

                <div className='text-4xl lg:text-7xl text-center text-[#12507B] py-6 lg:pb-12'>Brush Teeth Bruh.</div>
            </div>

            <Footer/>

        </div>
    )
}

export default InformationPage
"use client";

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { outfit } from '../fonts';
import { MapPinHouse, Printer, Phone, Mail, Clock } from 'lucide-react';

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';
const servicesListContainerClasses = 'py-0 space-y-4 lg:space-y-12';

import StockMan1 from '../../../public/photos/StockMan1.jpg'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import MobileNav from '../components/MobileNav'

function Contact() {
    // Google Maps embed URL for the address: 4040 Finch Ave E, Scarborough, ON M1S 4V5
    // Generated from Google Maps "Share" -> "Embed a map"
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.042316447551!2d-79.25590742300063!3d43.79183427110901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d12520623a9d%3A0xc345719e73523f2!2s4040%20Finch%20Ave%20E%2C%20Scarborough%2C%20ON%20M1S%204V5%2C%20Canada!5e0!3m2!1sen!2sca!4v1701391969238!5m2!1sen!2sca";
    // Direct Google Maps link for the address
    const googleMapsLink = "https://www.google.com/maps/place/4040+Finch+Ave+E,+Scarborough,+ON+M1S+4V5,+Canada/@43.7918343,-79.2559074,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d12520623a9d:0xc345719e73523f2!8m2!3d43.7918343!4d-79.2533325!16s%2Fg%2F11b8v24p1_!5m1!1e4?entry=ttu";


    return (
        <div className={`${outfit.className} text-white`}>
            
            <Header/>

            <div className='flex pt-4 lg:pt-0 bg-[#5DA39D]'>
                <PageTitle PageTitleContent="Contact Us" />
                <MobileNav/>
            </div>

            {/* Hero Section */}
            <div className='w-full bg-[#5DA39D]'>
                <div className={`${sectionWrapperClasses} pb-6 lg:pb-18 lg:pt-6`}>
                    {/* <div className='text-lg lg:text-4xl text-gray-50'>Dr. Wai-man Lam & Associates</div>
                    <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0'>Contact Us</div> */}
                    <div className={`text-xl lg:text-4xl font-light lg:mt-0 rounded-4xl bg-[#12507B] lg:flex`}>
                        <div className='lg:w-1/2'>
                            <Image
                                src={StockMan1}
                                alt="Man"
                                className="w-full rounded-t-4xl lg:rounded-l-4xl"
                            />
                        </div>
                        <div className='lg:w-1/2 lg:py-18 px-8 lg:px-12 py-6 flex items-center'>
                            We&apos;re looking forward to taking care of you and your smile. Contact us today to schedule a dental visit for you and your family.
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#e5e7eb] pt-6 lg:pt-12 '>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses} pb-6 lg:pb-0 grid lg:grid-cols-2 lg:gap-x-6 gap-y-4 lg:gap-y-0`}>

                    {/* LEFT */}
                    <div className={`lg:pl-12 lg:pr-12 py-4 px-0 rounded-4xl text-[#12507B] lg:py-12 bg-[#fff] lg:h-[700px] `}>
                        <div className={`text-base lg:text-4xl flex justify-center lg:items-center`}>
                            <div className='space-y-6'>
                                <div className='flex items-center space-x-4 my-2'>
                                    <div className='border-2 lg:border-4 rounded-full border-[#106898] p-2 lg:p-4 -ml-1 mr-2'>
                                        <MapPinHouse size={24} strokeWidth={1.5} className='w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] ' />
                                    </div>
                                    <div className='lg:text-3xl'>
                                        <div>4040 Finch Ave E, Suite 304</div>
                                        <div>Scarborough, ON M1S 4V5</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 my-2'>
                                    <div className='border-2 lg:border-4 rounded-full border-[#106898] p-2 lg:p-4 -ml-1 mr-2'>
                                        <Phone size={24} strokeWidth={1.5} className='w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] ' />
                                    </div>
                                    <div>
                                        <div>(416) 292-8388</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 my-2'>
                                    <div className='border-2 lg:border-4 rounded-full border-[#106898] p-2 lg:p-4 -ml-1 mr-2'>
                                        <Printer size={24} strokeWidth={1.5} className='w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] ' />
                                    </div>
                                    <div>
                                        <div>(416) 292-8399</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 my-2'>
                                    <div className='border-2 lg:border-4 rounded-full border-[#106898] p-2 lg:p-4 -ml-1 mr-2'>
                                        <Mail size={24} strokeWidth={1.5} className='w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] ' />
                                    </div>
                                    <div>
                                        <div>drlam@on.aibn.com</div>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4 my-2 lg:text-2xl'>
                                    <div className='border-2 lg:border-4 rounded-full border-[#106898] p-2 lg:p-4 -ml-1 mr-2'>
                                        <Clock size={24} strokeWidth={1.5} className='w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] ' />
                                    </div>
                                    <div className=''>
                                        <div>Monday - Friday: 9:30am - 7pm</div>
                                        <div>Saturday: 9am - 6pm</div>
                                        <div>Sunday: By appointment only</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Google Map */}
                    <div className='p-4 rounded-4xl bg-[#fff] h-[420px] lg:h-[700px] flex flex-col'>
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%" // This ensures the iframe fills the parent div's height
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of Dr. Wai-man Lam & Associates"
                            className="rounded-4xl flex-grow" // flex-grow makes iframe take up remaining space
                        ></iframe>
                        {/* No longer absolute positioning. 'mt-auto' pushes it to the bottom. */}
                        <div className="text-center  mt-4 pb-0 text-xl lg:text-2xl">
                            <Link
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#12507B] hover:underline"
                            >
                                View on Google Maps
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default Contact
import React from 'react'
import Image from "next/image";

import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import MobileNav from '../components/MobileNav'

import { outfit } from '../fonts'; 
import StockWoman1 from '../../../public/photos/StockWoman1.jpg'

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';
const servicesListContainerClasses = 'py-0 space-y-4 lg:space-y-12';

function NewPatient() {
    return (
        <div className={`${outfit.className} text-white`}>
            <Header/>

            <div className='flex pt-4 lg:pt-0 bg-[#5DA39D]'>
                <PageTitle PageTitleContent="New Patients" />
                <MobileNav/>
            </div>

            {/* Hero Section */}
            <div className='w-full bg-[#5DA39D]'>
                <div className={`${sectionWrapperClasses}  lg:pt-6 pb-0 lg:pb-12`}>
                    {/* <div className='text-lg lg:text-4xl text-gray-50'>Dr. Wai-man Lam & Associates</div>
                    <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0'>New Patients</div> */}
                    <div className={`text-xl lg:text-4xl font-light lg:mt-0  rounded-4xl bg-[#12507B] lg:flex`}>
                        <div className='lg:w-1/2'>
                            <Image
                                src={StockWoman1}
                                alt="Man"
                                className="w-full h-full rounded-t-4xl lg:rounded-l-4xl"
                            />
                        </div>
                        <div className='lg:w-1/2 lg:py-18 px-8 lg:px-12 py-8 flex items-center'>
                            Our practice is committed to providing you and your family with safe, gentle, and state-of-the-art dental care. We understand that you, or your child may feel anxious when visiting the dentist; you are not alone. We will make sure that you are comfortable and fulfilled every time you visit our practice.
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6 lg:mt-12'>

                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    
                    <div className={`lg:pl-12 lg:pr-12 lg:pt-2 lg:pb-2 px-8 rounded-4xl bg-[#12507B]`}>
                        <div className={`text-lg lg:text-3xl font-light lg:py-12 lg:px-24 py-8 rounded-4xl bg-[#12507B] `}>
                            Your first visit with our doctors includes:
                            <div className='list-disc pl-0 lg:pl-12 lg:mt-6 '>
                                <li>A review of your complete dental and medical history forms.</li>
                                <li>A discussion of any specific concerns or questions you might have about your dental needs.</li>
                                <li>All necessary X-rays of your teeth and mouth.</li>
                                <li>A comprehensive oral exam - including soft tissue and hard tissue exam, making sure your teeth and gums are healthy, and checking for any cavities or early signs of tooth decay. Afterwards, he/she will provide you with information regarding additional dental treatments you or your child may need. Our doctors and staff welcome any questions you may have, and will always try to make time to listen to your concerns.</li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='my-12' >
                <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                    <div className={`lg:pl-12 lg:pr-12 lg:pt-2 lg:pb-2 px-8 rounded-4xl bg-[#12507B]`}>
                        <div className={`text-lg lg:text-3xl font-light lg:py-12 lg:px-24 py-8 rounded-4xl bg-[#12507B] `}>
                            Remember to bring these things with you to your first dental appointment:
                            <div className='list-disc pl-0 lg:pl-12 lg:mt-6 '>
                                <li>Submit New Patient Online Form</li>
                                <li>Your insurance card</li>
                                <li>Regardless of your age, visiting the dentist on a regular basis will help keep your teeth and gums healthy and your smile bright!</li>
                                <li>If you want to have a brighter smile, we strongly recommend you and your family to visit your dentist every six months for regular checkups and routine teeth cleaning.</li>
                                <li>So, why not make an appointment today? Please call (416) 292-8388 or (416) 292-8399, our friendly office staffs are always ready to schedule an appointment for you.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default NewPatient

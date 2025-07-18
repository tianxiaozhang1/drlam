import Image from "next/image";
import Header from './components/Header'
import Footer from './components/Footer'

import { outfit } from './fonts';

import HomeMainPhoto from '../../public/photos/homemain2.png'

import StockMan1 from './../../public/photos/StockMan1.jpg'
import MarkTwain from './../../public/photos/MarkTwain.png'

const sectionWrapperClasses = '2xl:w-[1260px] mx-auto';
const servicesListContainerClasses = 'space-y-4 lg:space-y-12';

export default function Home() {
    return (
        <div>
            {/* TITLE AND NAVIGATION */}
            <div className="w-full bg-[#5DA39D]">
                {/* MOBILE */}
                <div className="lg:hidden mx-auto">                    
                    <div className={`w-full  bg-[#5DA39D] ${outfit.className}`}>
                        <div className={`${sectionWrapperClasses} pt-6 `}>
                            <div className="flex">
                                <div className='pl-2 text-center text-4xl text-white w-4/5'>Dr. Wai-man Lam & Associates</div>
                                <div><Header/></div>
                            </div>
                            <div className='text-center text-xl text-white my-2 pb-4 px-6'>Dental care for the whole family - since 1997</div>
                        </div>
                    </div>
                </div>  

                {/* DESKTOP */}
                <div className="hidden lg:flex 2xl:w-[1260px] mx-auto">
                    <div>
                        <Header/>
                        <div className={`w-full bg-[#5DA39D] ${outfit.className}`}>
                            <div className={`${sectionWrapperClasses} lg:pb-8 lg:pt-2`}>
                                <div className='lg:pt-2 text-center text-5xl lg:text-7xl text-white'>Dr. Wai-man Lam & Associates</div>
                                <div className='text-center text-2xl lg:text-4xl text-white my-2 pb-4 lg:pb-0'>Dental care for the whole family - since 1997</div>
                            </div>
                        </div>
                    </div>
                </div>  
                
            </div>

            <div>
                <div className="2xl:w-[1260px] mx-auto bg-white pt-0 lg:pt-0">
                    <div className={`mx-4 lg:mx-0 text-lg lg:text-4xl font-light mt-4  rounded-4xl bg-[#12507B] lg:flex`}>
                        <div className='lg:w-3/5'>
                            <Image
                                src={HomeMainPhoto}
                                alt="Man"
                                className="w-full rounded-t-4xl lg:rounded-4xl"
                            />
                        </div>
                        <div className={`lg:w-2/5 px-8 lg:px-12 py-4 flex items-center text-gray-100 pb-6 lg:pb-0 ${outfit.className}`}>
                            <div className="lg:space-y-2">
                                <div>Welcome to our office!</div>
                                <div className="leading-6 lg:leading-12">Our team of dental professionals are looking forward to taking care of your smile. Contact us today to schedule a dental visit for you and your family.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#fff] py-6 ${outfit.className}`}>
                    <div className='mx-4 lg:mx-0' >
                        <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                            <div className={`lg:pl-2 lg:pr-2 py-4 lg:pt-2 lg:pb-2 px-8 rounded-4xl bg-[#12507B]`}>
                                <div className={`text-lg lg:text-2xl font-light lg:py-12 lg:px-18 py-4 rounded-4xl  text-gray-100`}>
                                    <div className="text-2xl lg:text-4xl font-semibold lg:mb-4">Our mission</div>
                                    We are committed to providing the highest quality and precision in preventative, corrective and cosmetic dentistry. Strong teeth and healthy gums are essential for your overall health and well-being. We believe that a beautiful smile can lift your self-confidence, boost your career, and brighten your life. Whether it is your first or returning visit, you will find the same compassionate, professional care that will exceed your expectations.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#fff] pb-6 ${outfit.className}`}>
                    <div className='' >
                        <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                            <div className={`lg:pl-2 lg:pr-2 pt-8 pb-6 lg:pt-2 lg:pb-2 px-8 rounded-4xl mx-4 lg:mx-0 bg-[#3D8E86]`}>
                                <div className={`text-2xl lg:text-6xl font-light lg:py-12 px-6 lg:px-18 py-4 rounded-4xl text-gray-100`}>
                                    <div>
                                        <div className="text-center mb-6">General Dentistry</div>
                                        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6 text-2xl lg:text-4xl font-medium">
                                            <div className="bg-white rounded-4xl text-[#3D8E86] p-4 flex justify-center text-center items-center">Cleaning</div>
                                            <div className="bg-white rounded-4xl text-[#3D8E86] p-4 flex justify-center text-center items-center">Check-ups and X-rays</div>
                                            <div className="bg-white rounded-4xl text-[#3D8E86] p-4 flex justify-center text-center items-center">Night Guards</div>
                                            <div className="bg-white rounded-4xl text-[#3D8E86] p-4 flex justify-center text-center items-center">Mouth Guards</div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#fff] pb-6 ${outfit.className}`}>
                    <div className='' >
                        <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                            <div className={`lg:pl-2 lg:pr-2 pt-8 pb-6 lg:pt-2 lg:pb-2 px-8 rounded-4xl mx-4 lg:mx-0 bg-[#5D8351]`}>
                                <div className={`text-2xl lg:text-6xl font-light lg:py-12 px-6 lg:px-18 py-8 rounded-4xl  text-gray-100`}>
                                    <div>
                                        <div className="text-center mb-6">Cosmetic Dentistry</div>
                                        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6 text-2xl lg:text-4xl font-medium ">
                                            <div className="bg-white rounded-4xl text-[#5D8351] p-4 flex justify-center text-center items-center">Bonding</div>
                                            <div className="bg-white rounded-4xl text-[#5D8351] p-4 flex justify-center text-center items-center">Veneers</div>
                                            <div className="bg-white rounded-4xl text-[#5D8351] p-4 flex justify-center text-center items-center">Implants</div>
                                            <div className="bg-white rounded-4xl text-[#5D8351] p-4 flex justify-center text-center items-center">Teeth whitening</div>
                                            <div className="hidden lg:flex"></div>
                                            <div className="bg-white rounded-4xl text-[#5D8351] p-4 flex justify-center text-center items-center col-span-2">Pinhole surgical technique</div>
                                            <div className="hidden lg:flex"></div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#fff] pb-6 ${outfit.className}`}>
                    <div className='' >
                        <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                            <div className={`rounded-4xl bg-[#3D8E86] lg:flex overflow-hidden mx-4 lg:mx-0`}>
                                <div className={`lg:w-3/5 text-3xl lg:text-6xl font-light lg:py-12 px-6 lg:px-18 py-8 rounded-4xl text-gray-100 overflow-hidden`}>
                                    <div>
                                        <div className="text-center mb-6">Promotion</div>
                                        <div className="text-2xl lg:text-4xl text-center">
                                            Implant Special, starting from $1,999. Conditions apply.
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="lg:w-2/5 overflow-hidden">
                                    <Image
                                        src={StockMan1}
                                        alt="Man"
                                        className="w-full "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#fff] pb-6 ${outfit.className}`}>
                    <div className='' >
                        <div className={`${sectionWrapperClasses} ${servicesListContainerClasses}`}>
                            <div className={`rounded-4xl bg-[#757CBB] lg:flex overflow-hidden mx-4 lg:mx-0`}>
                                <div className="lg:w-1/2 overflow-hidden">
                                    <Image
                                        src={MarkTwain}
                                        alt="Man"
                                        className="w-full "
                                    />
                                </div>
                                <div className={`lg:w-1/2 text-xl lg:text-6xl font-light lg:py-12 px-6 lg:px-18 py-8 rounded-4xl text-gray-100 overflow-hidden`}>
                                    <div className=" h-full  flex items-center ">
                                        <div className="lg:text-5xl text-start justify-center flex items-center h-full">
                                            <div className="">
                                                Twenty years from now you will be more disappointed by the things that you didn&apos;t do than by the ones you did do.
                                                <div className="text-end mt-6">-- Mark Twain</div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>      
        </div>
    );
}

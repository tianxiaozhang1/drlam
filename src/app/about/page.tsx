import React from 'react'
import Image from "next/image";
import { outfit } from '../fonts'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

import WaiManLam from '../../../public/photos/waimanlam.jpg'
import JasonWu from '../../../public/photos/jasonwu.jpg'
import LuciaLuo from '../../../public/photos/lucialuo.png'
import AnitaLeung from '../../../public/photos/anitaleung.jpg'
import RachelHuang from '../../../public/photos/RachelHuang.png'
import LindaMa from '../../../public/photos/LindaMa.jpg'
import MinhDuong from '../../../public/photos/MinhDuong.jpg'

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';

function AboutUs() {
    return (
        <div className={`${outfit.className} text-white`}>
            <Header/>

            <PageTitle PageTitleContent="About Us" />

            <div className='w-full bg-[#003D74] px-4'>
                <div className='2xl:w-[1260px] mx-auto lg:space-y-8 lg:py-8'>
                    <div className='text-4xl lg:text-6xl text-white font-semibold pt-6'>Our Team</div>
                    <div className='text-lg lg:text-2xl font-light mt-2 lg:mt-0'>
                        We&apos;re a group of caring, highly experienced clinicians and administrative professionals who are here for just one reason - to take care of you. From the receptionist who greets you when you arrive to the doctor who looks after the health and appearance of your smile, each member of our team is committed to ensuring your visit is a pleasant and comfortable experience.
                    </div>

                    <div className='text-4xl lg:text-6xl text-white font-semibold py-6'>Dentists</div>
                    <div className='lg:flex '>
                        <div className='lg:w-1/4'>
                            <Image
                                src={WaiManLam}
                                alt=""
                                className="w-full rounded-4xl"
                            />
                        </div>
                        <div className='lg:w-3/4 lg:py-12 lg:pl-12 flex items-center'>
                            <div className='px-2'>
                                <div className='text-4xl lg:text-8xl text-start mb-2 mt-2 lg:mt-0'>Dr. Wai-man Lam</div>
                                <div className='text-xl lg:text-3xl font-light '>
                                    Dr. Lam graduated from the National Taiwan University in 1979 and obtained Taipei Dental license and Hong Kong Dental license in 1979. <br/>
                                    Dr. Lam became a member of Ontario Dental Association in 1997 and opened his own practice.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='2xl:w-[1260px] mx-auto space-y-4 lg:space-y-8 lg:py-8'>

                    <div className='text-4xl lg:text-6xl text-white font-semibold py-6'>Dental Hygienists</div>

                    <div className='lg:flex'>
                        <div className='lg:w-1/4'>
                            <Image
                                src={JasonWu}
                                alt=""
                                className="w-full rounded-4xl"
                            />
                        </div>

                        <div className='lg:w-3/4 lg:py-12 lg:pl-12 flex items-center px-2 lg:px-0'>
                            <div>
                                <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Jason Wu</div>
                                <div className='lg:text-2xl font-light '>
                                    One of our most popular dental hygienist with many years of dental related experience.  Jason graduated with honors in Bachelor of Science from the University of Toronto.  With his passion for the dental field, Jason continued to Oxford College of Arts, Business & Technology and completed their Dental Hygiene Program.  With his vast knowledge and exciting personality, he brings the joy and smiles to his patients.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:flex '>
                        <div className='lg:w-1/4 flex items-center '>
                            <Image
                                src={LuciaLuo}
                                alt=""
                                className="w-full rounded-4xl"
                            />
                        </div>
                        <div className='lg:w-3/4 lg:py-12 lg:pl-12 flex items-center px-2 lg:px-0'>
                            <div>
                                <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Lucia Luo</div>
                                <div className='lg:text-2xl text-gray-50 font-light'>
                                    Lucia is a valuable member of our practice. A graduate of University of Toronto’s Bachelor of Science Program with double majors in Cell and System Biology and Human Biology, Lucia then received her dental hygiene degree from Regency Dental Hygiene Academy. She is dedicated, detail-oriented and a critical thinker with passion for enriching lives and brightening smiles through educating and improving her patients’ oral health. At the same time her kind and caring nature always allows patients to feel comfortable and at ease.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:flex '>
                        <div className='lg:w-1/4 flex items-center '>
                            <Image
                                src={AnitaLeung}
                                alt=""
                                className="w-full rounded-4xl"
                            />
                        </div>
                        <div className='lg:w-3/4 lg:py-12 lg:pl-12 flex items-center px-2 lg:px-0'>
                            <div>
                                <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Anita Leung</div>
                                <div className='lg:text-2xl text-gray-50 font-light'>
                                    Anita is one of our friendly and knowledgeable hygienist. Her experiences in the dental field date back to when she was in Hong Kong, working as a Dental Therapist.  She Immigrate from Hong Kong to Canada in early 1990s, and with her passion to continue in the dental field, she obtained her Dental Hygienist Diploma from Seneca College.  Since joining our dental office she continues to show her eagerness to stay on top of all dental related topics.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:space-x-0 lg:py-6'>
                        <div className='w-full'>
                            <div className='text-4xl lg:text-6xl text-white font-semibold py-6'>Dental Assistants</div>
                            <div className='lg:flex lg:space-x-18 w-full'>
                                <div className='w-full  lg:w-[315px]'>
                                    <Image
                                        src={RachelHuang}
                                        alt=""
                                        className="w-full rounded-4xl"
                                    />
                                    <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Rachel Huang</div>
                                </div>
                                <div className='w-full lg:w-[315px]'>
                                    <Image
                                        src={LindaMa}
                                        alt=""
                                        className="w-full rounded-4xl"
                                    />
                                    <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Linda Ma</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:space-x-0 pb-6 '>
                        <div className='w-full'>
                            <div className='text-4xl lg:text-6xl text-white font-semibold py-6 '>Dental Assistants</div>
                            <div className='lg:flex lg:space-x-12'>
                                <div className='w-full lg:w-[315px]'>
                                    <Image
                                        src={MinhDuong}
                                        alt=""
                                        className="w-full rounded-4xl"
                                    />
                                    <div className='text-3xl lg:text-7xl text-start mb-2 mt-2 lg:mt-0'>Minh Duong</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}

export default AboutUs

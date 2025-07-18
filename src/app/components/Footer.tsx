import React from 'react'

function Footer() {
    return (
        <div className='bg-[#12507B] py-8 lg:py-0'>
            <div className='2xl:w-[1260px] mx-auto  lg:py-12 text-gray-100 lg:space-y-8'>
                <div className='text-lg lg:text-3xl text-center '>
                    <div className='font-semibold lg:font-medium'>Dr. Wai-man Lam & Associates</div>
                    <div>Dental care for the whole family - since 1997</div>
                </div>
                <div className='grid lg:grid-cols-2 lg:text-2xl items-center'>
                    <div className='text-center'>
                        <div>4040 Finch Ave E, Suite 304</div>
                        <div>Scarborough, ON M1S 4V5</div>
                        <div>Tel: 416-292-8388</div>
                        <div>Email: drlam@on.aibn.com</div>
                    </div>
                    <div className='text-center'>
                        <div>Monday - Friday: 9:30 am - 7:00 pm</div>
                        <div>Saturday: 9:00 am - 6:00 pm</div>
                        <div>Sunday: By appointment only</div>
                    </div>
                </div>
                <div className='lg:text-xl text-center mb-0 mt-4 lg:mt-0'>
                    <div>Copyright © 2025 by Dr. Wai-man Lam & Associates</div>
                </div>
            </div>
        </div>
    )
}

export default Footer

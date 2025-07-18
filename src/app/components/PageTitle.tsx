import React from 'react'

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';

interface PageTitleProps {
    PageTitleContent: string; // Specify that PageTitleContent must be a string
}

function PageTitle({PageTitleContent}: PageTitleProps) {
    return (
        <div className='w-full bg-[#5DA39D]'>
            <div className={`${sectionWrapperClasses} lg:pb-6 lg:pt-6`}>
                <div className='text-lg lg:text-4xl text-gray-50'>Dr. Wai-man Lam & Associates</div>
                <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0'>{PageTitleContent}</div>
            </div>
        </div>
    )
}

export default PageTitle

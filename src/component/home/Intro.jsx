import React from 'react'

const Intro = () => {
    return (
        <div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-12 sm:pb-24'>
            <div className='flex flex-col px-8 sm:px-20 md:px-40 lg:justify-center'>
                <div className='flex lg:flex-row sm:flex-col flex-col lg:justify-center w-full'>
                    <div className='flex flex-col w-auto lg:w-1/2'>
                        <p className="text-[12px] lg:text-[14px] font-rubik w-[78px] bg-white/10 border-l-4 pl-2 border-yellow-500 font-normal">
                            Welcome
                        </p>
                        <div className='flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px]'>
                            <h1 className='font-rubik font-semibold capitalize lg:text-[35px] sm:text-[25px] text-[20px] leading-6 sm:leading-[41px]'>
                                Your Trusted Partner for <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>B2B IT Support Services</span>
                            </h1>
                            <div>
                                <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>
                                    Welcome to Cutech Solutions, your one-stop solution for <span className='font-bold'>B2B IT support services in UK</span> . We understand the critical importance of uninterrupted technical operations for businesses, which is why we offer <span className='font-bold'>on-call 24x7 technical support</span> to ensure your systems run smoothly round the clock.
                                </p>

                            </div>
                            <div className='flex flex-col gap-4 sm:gap-[22px]'>

                                <div className='flex items-center flex-col lg:gap-[15px] sm:gap-[15px] gap-[4.8px] '>
                                    <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>At Cutech Solutions, we take pride in providing comprehensive computer-related services tailored specifically for B2B clients. Whether you require <span className='font-bold'>IT helpdesk support,</span> cybersecurity solutions, or cloud services, our experienced team is here to assist you every step of the way.</p>
                                    <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>We recognize that businesses face unique challenges in today's digital landscape. That's why we are committed to delivering innovative solutions and exceptional service to help our clients thrive. Our deep understanding of the needs and intricacies of B2B operations allows us to address your IT needs with precision and expertise</p>
                                    <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>With Cutech Solutions by your side, you can rest assured that your business's IT infrastructure is in capable hands. Contact us today to learn more about how we can support your organization's technological needs.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end sm:justify-center lg:justify-normal mt-10 lg:mt-12'>
                        <img loading="lazy" src="img/home/Intro.png" alt="" className='w-[539px] h-[547px] object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro

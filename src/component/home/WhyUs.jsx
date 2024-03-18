import React from 'react'

const WhyUs = () => {
    return (
        <div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-16 sm:pb-24'>
            <div className='flex flex-col px-8 sm:px-20 md:px-40 lg:justify-center'>
                <div className='flex lg:flex-row sm:flex-col flex-col items-center lg:justify-center w-full lg:gap-[112px] '>
                    <div className='flex flex-col  lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-[502px]'>
                        <p className="text-[12px] lg:text-[14px] font-rubik w-[78px] bg-white/10 border-l-4 pl-2 border-yellow-500 font-normal">
                            Whys Us
                        </p>
                        <h2 className='font-rubik font-semibold capitalize lg:text-[35px] sm:text-[25px] text-[20px] leading-[23px] sm:leading-[36.81px]'>
                            Commitment to <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Priority Issue Resolution</span>
                        </h2>
                        <div>
                            <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>
                                At Cutech Solutions, we understand the critical <strong> importance of minimizing downtime</strong> for your business's productivity and profitability. That's why we prioritize issue resolution based on severity and potential impact on your operations. Our dedicated team ensures prompt and efficient resolution of critical issues, allowing your business to operate smoothly without interruption
                            </p>
                            <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] mb-4'>
                                Whether it's a technical glitch disrupting your operations or a cybersecurity threat endangering your business, you can rely on Cutech Solutions to prioritize and resolve the issue urgently and expertly. We are committed to your satisfaction and success, going above and beyond to meet your IT needs with efficiency, reliability, and professionalism.
                            </p>
                            <p className='font-krub font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89]'>
                                Thank you for considering Cutech Solutions as your trusted partner for <strong> B2B computer services </strong>. With our comprehensive range of services and commitment to priority issue resolution, we are confident in our ability to help your business thrive in today's digital landscape. Contact us today to learn more about our <strong> IT support services in UK </strong> and how we can assist you in achieving your goals.
                            </p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-4 sm:gap-[22px]'>

                        <div className='flex justify-end sm:justify-end lg:justify-normal mt-10 lg:mt-0'>
                            <img loading="lazy" src="img/home/whyUs1.png" alt="" className='w-full h-full object-cover' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
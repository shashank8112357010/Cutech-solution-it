import React from 'react'

export const Solutions = () => {
    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='flex flex-row flex-wrap lg:flex-nowrap gap-[60px] sm:gap-[89.16px] justify-center lg:justify-between mt-0 mb-20  lg:px-20  '>

                <div className='sm:order-2 order-2 text-start sm:w-[713px] lg:w-[684.33px] pr-4 sm:pr-0 lg:pr-0 flex items-center '>
                    <img src="/img/services/AboutUs.png" alt="About Us" className='w-full object-cover' />
                </div>

                <div className='flex flex-col items-center justify-center px-4 md:px-0 gap-[31.21px] lg:w-[570.51px] sm:w-[580.52px] order-1 lg:order-2 pl-3 w-full lg:pl-0'>
                    <div className='flex gap-[49px] flex-col'>
                        <h1 className='lg:text-lapTitle sm:text-tabTitle max-w-[200px] sm:max-w-[300px] capitalized text-mobTitle font-semibold font-rubik leading-[29px] sm:leading-[41px] '>
                            All Your Solutions At One Place
                        </h1>
                        <p className='lg:text-lapBody sm:text-tabBody text-mobBody font-krub font-medium text-textgray '>
                            Discover comprehensive solutions tailored to meet your needs efficiently. Our services encompass <strong> “Remote Technical Support and  Maintenance” </strong>, <strong>“Computer Cyber Security Service Solutions”</strong> , <strong>“Cloud Service Management Solutions” </strong>, and <strong> “Digital Marketing Expert Solutions” </strong>. Experience seamless integration and unparalleled expertise, all under one roof.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


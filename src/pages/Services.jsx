import React from 'react';
import { BannerAtom } from '../atom/BannerAtom';
import { Solutions } from '../component/services/Solutions';
import { ServiceCards } from '../component/services/ServiceCards';

export const Services = () => {
    return (
        <>
            <BannerAtom srcImg="/img/services/ServicesBanner.png" title="Our Services" heading="Our Services" />
            <Solutions />
            <ServiceCards />

            <div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-16 sm:pb-24 px-4 sm:px-20'>
                <div className='flex flex-col lg:flex-row items-center lg:justify-between '>

                    <div className='sm:w-[622px] sm:h-[450px] flex justify-end sm:justify-end lg:justify-normal mb-12 mt-0 sm:mt-10 lg:mt-0'>
                        <img loading="lazy" src="/img/services/ServicesImg.png" alt="services" className='w-full h-full object-contain' />
                    </div>

                    <div className='flex flex-col gap-4 w-auto lg:w-1/2 md:pl-12'>
                        <h2 className='font-rubik font-semibold w-full lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                            Few Reasons Why You Should Choose Us
                        </h2>

                        {[{
                            title: '24x7 Availability',
                            content: 'Whether it\'s a critical system issue in the middle of the night or a minor glitch during office hours, our dedicated team of experts is always ready to assist you.'
                        }, {
                            title: 'Experienced Team of Professionals',
                            content: 'Years of industry experience and expertise in a wide range of technologies, our technicians, engineers, and digital marketers.'
                        }, {
                            title: 'Proactive Monitoring and Maintenance',
                            content: 'Our proactive monitoring and maintenance services help prevent IT issues before they occur, saving you time, money, and frustration.'
                        }].map(({ title, content }, index) => (
                            <div key={index} className='w-full flex flex-row items-center mt-2'>
                                <img loading="lazy" src='/img/services/ServicesTick.png' alt='servicesImg' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                        {title}
                                    </h3>
                                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px]'>
                                        {content}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};



import React from 'react'
import { BannerAtom } from '../atom/BannerAtom'
import { CoreService2 } from '../component/services/CoreService2'
import { ChooseService2 } from '../component/services/ChooseService2'
import { Link } from 'react-router-dom'


export const DetailService2 = () => {
    return (
        <>
            <BannerAtom srcImg="/img/about/aboutBanner.png" title="Service " heading="Digital Marketing Service " />
            <section className="max-w-7xl  mx-auto mt-6 px-4 sm:px-20  bg-transparent ">
                {/* intro section */}
                <div className='flex justify-between items-center gap-[45px] sm:flex-col lg:flex-row flex-col mb-32 '>
                    <div className='lg:w-1/2 flex flex-col gap-[31px]'>
                        <h1 className=' text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold font-rubik lg:leading-[41.48px] sm:leading-[29px] leading-[23px]'>Elevate Your Online Presence with Cutech Solutions: Premier Digital Marketing Company in UK</h1>
                        <p className='text-mobBody sm:text-tabBody lg:text-lapBody font-medium font-krub text-textgray '>In today's digital age, a strong online presence is no longer a luxury – it's a necessity. At Cutech Solutions, a leading <strong> digital marketing company in UK </strong>, we understand the ever-evolving digital landscape and the challenges businesses face in capturing and retaining online audiences. We offer a comprehensive suite of <strong> digital marketing solutions </strong> designed to propel your brand to the forefront of your industry, driving targeted traffic, boosting conversions, and ultimately, achieving your business goals.</p>

                    </div>
                    <div className='flex sm:justify-center lg:justify-between'>
                        <img src="../../img/services/FirstsecImg.png" alt="Digital Marketing Solutions" />
                    </div>
                </div>
            </section>

            {/* second section start*/}
            <div className='flex max-w-[1920px] mx-auto lg:flex-row sm:flex-col flex-col justify-center lg:justify-between mb-20 lg:px-20  '>
                <div className='w-full flex items-center justify-center lg:justify-normal lg:gap-12 '>
                    <div className='flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12 w-full  '>

                        <div className='flex gap-4 flex-col'>
                            <div className='w-[265px] h-auto'>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about  border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #1 Experienced Team
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        Our team comprises seasoned <strong> digital marketing experts </strong> with a proven track record of success. We stay at the forefront of industry trends and utilize cutting-edge strategies to deliver exceptional results.

                                    </p>
                                </div>
                            </div>

                            <div className='w-[265px] h-auto'>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #2 Data-Driven Approach
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        We don't believe in guesswork. Every strategy we implement is meticulously researched and backed by data-driven insights. This ensures we target the right audience, optimize campaigns for maximum effectiveness, and deliver measurable results.
                                    </p>
                                </div>
                            </div>

                            <div className='w-[265px] h-auto '>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #3 Holistic Solutions
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        We offer a comprehensive suite of <strong> digital marketing services </strong>, encompassing everything from SEO and PPC to social media marketing and content creation. This allows us to create a cohesive and strategic marketing plan that aligns with your specific business objectives.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col sm:mt-32'>
                            <div className='w-[265px] h-auto'>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #4 Cost-Effective Solutions
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        We understand the importance of maximizing ROI. We offer competitive rates and deliver tangible results that contribute to the overall success of your business.
                                    </p>
                                </div>
                            </div>
                            <div className='w-[265px] h-auto'>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #5 Transparent Communication
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        We believe in open communication with our clients. We keep you informed of campaign progress, provide regular performance reports, and are always available to answer your questions and address your concerns.
                                    </p>
                                </div>
                            </div>
                            <div className='w-[265px] h-auto'>
                                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                        #6 Scalable Solutions
                                    </h3>
                                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                        As your business grows, so too should your digital marketing strategy. We offer scalable solutions that can adapt to your evolving needs, ensuring your online presence continues to drive growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right side of cutech solution  */}
                <div className='relative flex flex-col gap-2 sm:gap-[31.21px] items-center lg:items-start mt-14 lg:max-w-[520px] px-4 sm:pl-10 md:pl-[50px] -order-1 sm:-order-1 lg:order-1'>

                    <div className='flex flex-row flex-wrap gap-4 w-full  sticky top-8 right-0'>
                        <div className='text-center lg:text-start w-full gap-4 flex justify-center items-center flex-col'>
                            <h2 className='lg:text-lapTitle relative capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-[24px] sm:leading-[36px] text-center lg:text-start w-full'>
                                <div className=" block mx-auto lg:mx-0 mb-2 h-[6px] w-[20%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
                                </div>
                                Why Choose Cutech Solutions as Your Digital Marketing Service Provider?
                            </h2>
                            <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-center lg:text-start max-w-[700px] text-textgray pr-4 mb-8 lg:mb-0'>
                                With a sea of <strong> digital marketing service providers </strong> out there, why pick Cutech Solutions? We're a team of experts with a proven record of success, and we stay on top of the latest trends to get you the best results. We don't just guess - everything we do is data-driven to target the right audience and measure success.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* second section end  */}

            <CoreService2 />
            {/* fourth section */}
            <div className="max-w-[1920px] mx-auto w-full flex flex-col lg:flex-row px-5 lg:px-[2%] mt-14 mb-[10rem]">
                <div className="blackSection w-full lg:max-w-[30rem]">
                    <div className=" bg-darkBlue px-6 py-8 sm:px-11 sm:py-14 rounded-2xl space-y-8 w-full">
                        <h2 className="text-white text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold lg:leading-[41px] ">
                            Benefits of Partnering with a Reputable Digital Marketing Service Provider
                        </h2>
                        <p className="text-white text-mobBody sm:text-tabBody lg:text-lapBody font-krub">Partnering with a reputable digital marketing service provider like Cutech Solutions offers several significant advantages:</p>
                        <button className="bg-white font-medium text-xs sm:text-[23px]   block mx-auto py-3 px-5 sm:mx-0  sm:px-10 sm:py-6 rounded-full">Get Started</button>
                    </div>
                </div>
                <div className="whiteSection w-full lg:w-[70%]">
                    <div className=" pl-10 py-12 grid gap-6 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
                        <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
                            <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik  font-black  ">01</p>
                            <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-rubik font-semibold ">Expertise and Experience</h3>
                            <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">You gain access to a team of <strong> digital marketing specialists </strong> with the expertise and experience to implement effective strategies for your industry and target audience.</p>
                        </div>
                        <div className=" flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
                            <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle  font-black  font-rubik">02</p>
                            <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold font-rubik ">Increased Visibility and Traffic</h3>
                            <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Our data-driven approach ensures your brand reaches the right audience, boosting website traffic and brand awareness.</p>
                        </div>
                        <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
                            <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle  font-black  font-rubik  ">03</p>
                            <h3 className="  text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold  font-rubik">Improved Lead Generation and Conversions</h3>
                            <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">We help you attract qualified leads and convert them into paying customers by crafting targeted campaigns and optimizing your website for maximum conversions.</p>
                        </div>
                        <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
                            <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-black ">04</p>
                            <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-rubik font-semibold ">Measurable Results and ROI</h3>
                            <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">We provide detailed reporting and analytics, allowing you to track campaign performance and measure the return on your digital marketing investment.</p>
                        </div>


                    </div>
                </div>
            </div>

            {/* fifth section */}
            <div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-16 sm:pb-24 mb-[9rem] '>
                <div className='flex flex-col px-4 sm:px-20 lg:justify-center'>

                    <div className={` flex item flex-col lg:flex-row items-center lg:justify-between w-full`}>
                        {/* Image  */}
                        <div className='sm:w-[622px] sm:h-[679px] flex justify-end sm:justify-end lg:justify-normal mb-12 mt-0 sm:mt-10 lg:mt-0'>
                            <img src="/img/services/ServicesImg3.png" alt="Digital Marketing Solutions" className='w-full h-full object-cover' />
                        </div>

                        <div className=' flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-1/2 md:pl-12'>
                            <div className='flex flex-col w-full '>
                                <h2 className='font-rubik font-semibold w-[300px] sm:w-[400px] lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                                    Choosing the Right Digital Marketing Service Provider in UK
                                </h2>
                                <div>
                                    <p className='font-krub  font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] my-2 sm:my-6'>
                                        With numerous <strong> digital marketing companies in UK </strong>, identifying the right partner for your business needs can be overwhelming. Here are a few key factors to consider:
                                    </p>
                                </div>

                                {/* //heading and para start  */}
                                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                                    <img src='/img/services/ServicesTick.png' alt='Search Engine Optimization' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                    <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white  sm:mt-2'>
                                        <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                            Experience and Expertise
                                        </h3>
                                        <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px]'>
                                            Look for a company with a proven track record and a team of experts well-versed in various digital marketing disciplines.
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                                    <img src='/img/services/ServicesTick.png' alt=' Social Media Marketing' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                    <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                                        <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                            Range of Services
                                        </h3>
                                        <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                                            Does the company offer a comprehensive suite of services that align with your specific marketing goals?
                                        </p>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                                    <img src='/img/services/ServicesTick.png' alt=' Digital Marketing Companies' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                    <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                                        <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                            Data-Driven Approach
                                        </h3>
                                        <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                                            Ensure the company utilizes data and analytics to inform their strategies and measure results.
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                                    <img src='/img/services/ServicesTick.png' alt=' Digital Marketing Companies' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                    <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                                        <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                            Transparency and Communication
                                        </h3>
                                        <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                                            Choose a company known for clear and consistent communication throughout your partnership.
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                                    <img src='/img/services/ServicesTick.png' alt='Digital Marketing Service Provider,' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                                    <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                                        <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                                            ROI Focus
                                        </h3>
                                        <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                                            Look for a company that prioritizes achieving measurable results and maximizing your return on investment.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="text-start w-[200px] bg-custom-gradient px-[25px] py-[14px] text-black font-rubik font-semibold mt-8"
                                >
                                    <Link to="/contact-us" className='w-full text-center block '>
                                        Contact Us
                                    </Link>
                                </button>
                                {/* //heading and para end  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* chooseservice */}
            <ChooseService2 />

            {/* lastsection */}
            <div className='mt-16 px-4 sm:px-20  '>
                <section role="banner" aria-label="Main" className='relative h-[400px] max-w-[1920px] mx-auto   text-white'>

                    <img src="/img/services/servicesBanner2.png" className={`-z-50 absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='Digital Marketing Service Provider' loading='lazy' />
                    <div className='justify-center z-50 text-white lg:w-[58%] mx-auto text-center flex flex-col gap-1'>
                        <span className='text-mobTitle sm:text-tabTitle lg:text-lapTitle cursor-default select-none font-bold font-rubik '>
                            Take Charge of Your Digital Future with Cutech Solutions
                        </span>
                        <p className='font-krub leading-[18.18px] cursor-default select-none sm:leading-[24.24px] text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody '>
                            In today's digital world, a strong online presence is critical for business success. At Cutech Solutions, we provide the <strong> comprehensive digital marketing solutions </strong> you need to achieve your online goals. We offer a results-oriented approach, a team of experienced professionals, and a commitment to building a long-term partnership with your business.

                        </p>
                        <Link to="/contact-us">
                            <button className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[112px] h-[34px] sm:w-[146px] sm:h-[45px]'>
                                Contact Us
                                <div className='w-[40px] h-[40px] absolute -bottom-4 -right-4 rounded-full bg-white'></div>
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}




import React from 'react'
import { BannerAtom } from '../atom/BannerAtom'

import { Link } from 'react-router-dom'
import { CoreService3 } from '../component/services/CoreService3'
import { ChooseService3 } from '../component/services/ChooseService3'


export const DetailService3 = () => {

  return (
    <>
      <BannerAtom srcImg="/img/about/aboutBanner.png" title="Service " heading="Cloud Managed Service " />
      <section className="max-w-7xl  mx-auto mt-6 px-4 sm:px-20 bg-transparent ">
        {/* intro section */}
        <div className='flex justify-between gap-20 sm:flex-col lg:flex-row flex-col mb-32 '>
          <div className='lg:w-[55%] flex flex-col gap-[31px]'>
            <h1 className=' text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold font-rubik lg:leading-[41.48px] sm:leading-[29px] leading-[23px]'>Unleash the Power of the Cloud with Cutech Solutions' Cloud Managed Services in UK</h1>
            <p className='text-mobBody sm:text-tabBody lg:text-lapBody font-medium font-krub text-textgray '>In today's digital landscape, businesses of all sizes are embracing the flexibility, scalability, and cost-effectiveness of cloud computing. However, managing cloud infrastructure and applications in-house can be a complex and resource-intensive task. That's where Cutech Solutions' <strong>cloud managed services in UK</strong> come in. We offer a comprehensive suite of cloud management solutions designed to take the burden off your IT team, allowing them to focus on core business initiatives.<strong> Cloud service management in UK </strong>is our specialty, and we empower businesses to leverage the full potential of the cloud.</p>
          </div>
          <div className='flex sm:justify-center lg:justify-between'>
            <img src="../../img/services/CloudSec.png" alt=" Cloud Server Management Solution" />
          </div>
        </div>
      </section>


      {/* second section start */}
      <div className='flex max-w-[1920px] mx-auto lg:flex-row sm:flex-col flex-col justify-center lg:justify-between mb-20 lg:px-20  '>
        <div className='w-full flex items-center justify-center lg:justify-normal lg:gap-12 '>
          <div className='flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12 w-full  '>

            <div className='flex gap-4 flex-col'>
              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about  border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #1 Extensive Cloud Expertise
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    Our team of certified cloud architects and engineers possess in-depth knowledge of leading cloud platforms like AWS, Azure, and GCP.
                  </p>
                </div>
              </div>

              <div className='w-[265px] h-auto   '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #2 Security-First Approach
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We prioritize data security and compliance with robust security protocols and industry best practices.
                  </p>
                </div>
              </div>

              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #3 Cost Optimization
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We help you optimize your cloud spend by identifying cost-saving opportunities and implementing efficient resource allocation strategies.
                  </p>
                </div>
              </div>

            </div>

            <div className='flex gap-4 flex-col sm:mt-32'>

              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #4 Performance Optimization
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    Our ongoing monitoring and performance tuning ensure your cloud applications run smoothly and deliver optimal user experiences.
                  </p>
                </div>
              </div>
              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #5 24/7 Support
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We offer round-the-clock expert support to address any cloud-related issues promptly and efficiently.
                  </p>
                </div>
              </div>
              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #6 Scalability and Flexibility
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    Our solutions adapt to your growing needs, allowing you to effortlessly scale your cloud infrastructure up or down based on your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side of cutech solution  */}
        <div className='relative flex flex-col gap-2 sm:gap-[31.21px] items-center lg:items-start mt-14 lg:max-w-[520px] px-4 sm:pl-10 md:pl-[50px] -order-1 sm:-order-1 lg:order-1'>
          <div className='flex flex-row flex-wrap gap-4 w-full sticky top-8 right-0 '>
            <div className='text-center lg:text-start w-full gap-4 flex justify-center items-center flex-col'>
              <h2 className='lg:text-lapTitle relative capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-[24px] sm:leading-[36px] text-center lg:text-start w-full'>
                <div className=" block mx-auto lg:mx-0 mb-2 h-[6px] w-[20%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
                </div>
                Why Choose Cutech Solutions as Your Cloud Service Management Provider?
              </h2>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-center lg:text-start max-w-[700px] text-textgray pr-4 mb-8 lg:mb-0'>
                When it comes to choosing a <strong>cloud service management</strong> (CSM) provider in the UK, experience, expertise, and a commitment to client success are paramount. Cutech Solutions stands out from the crowd with the following advantages:
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* second section end  */}

      <CoreService3 />
      {/* fourth section */}
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-[2%] mt-14 mb-[10rem]">
        <div className="blackSection w-full lg:max-w-[30rem]">
          <div className=" bg-darkBlue px-6 py-8 sm:px-11 sm:py-14 rounded-2xl space-y-8 w-full">
            <h2 className="text-white text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold lg:leading-[41px] ">
              Benefits of Partnering with a Reputable Cloud Service Management Provider in UK
            </h2>
            <p className="text-white text-mobBody sm:text-tabBody lg:text-lapBody font-krub">By partnering with a leading <strong> UK cloud service management provider </strong> like Cutech Solutions, you gain a strategic advantage.  We offer a comprehensive solution that reduces IT overhead, improves efficiency, enhances security, and optimizes your cloud costs. Partnering with a reputable <strong> cloud service management solutions provider in UK </strong> like Cutech Solutions offers several key benefits:</p>
            <button className="bg-white font-medium text-xs sm:text-[23px]   block mx-auto py-3 px-5 sm:mx-0  sm:px-10 sm:py-6 rounded-full">Get Started</button>
          </div>
        </div>
        <div className="whiteSection w-full lg:w-[70%]">
          <div className=" pl-10 py-12 grid gap-6 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col gap-2 hover:text-darkYellow lg:w-[60%]">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik ">01</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold font-rubik  ">Reduced IT Overhead</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Free up your in-house IT team to focus on strategic initiatives while we take care of your cloud infrastructure management.
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow  lg:w-[60%]">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik">02</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold   font-rubik ">Improved Efficiency</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Gain access to our expertise and tools to optimize your cloud operations and achieve greater efficiency.</p>
            </div>
            <div className=" flex flex-col gap-2 hover:text-darkYellow lg:w-[65%] ">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle  font-black font-rubik">03</p>
              <h3 className="  text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold font-rubik">Enhanced Security</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Benefit from our comprehensive security protocols and expertise to protect your cloud environment from evolving cyber threats.</p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow lg:w-[60%]">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-black">04</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-rubik font-semibold">Cost Savings</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Leverage our cost optimization strategies to minimize your cloud expenses and maximize your return on investment.</p>
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
              <img src="/img/services/ServicesImg2.png" alt="Managed Cloud Services Providers" className='w-full h-full object-cover' />
            </div>

            <div className=' flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-1/2 md:pl-12'>
              <div className='flex flex-col w-full '>
                <h2 className='font-rubik font-semibold w-[300px] sm:w-[400px] lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                  Why Cutech Solutions is the Ideal Cloud Service Management Partner for You

                </h2>
                <div>
                  <p className='font-krub  font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] my-2 sm:my-6'>
                    When it comes to <strong> cloud service management in the UK </strong>, Cutech Solutions stands out from the crowd. Our experience, client focus, dedicated team, and security-first mindset make us the perfect choice to guide your business towards successful cloud adoption. Cutech Solutions stands out as the ideal choice for your <strong>  cloud service management solutions in UK </strong> for several reasons:

                  </p>
                </div>

                {/* //heading and para start  */}
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img src='/img/services/ServicesTick.png' alt=' Managed Cloud Services' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white  sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Proven Track Record
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px]'>
                      We possess a wealth of experience and a proven track record of success in helping businesses across the UK leverage the power of the cloud.

                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img src='/img/services/ServicesTick.png' alt='Best Cloud Based Managed Services' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Client-Centric Approach
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We prioritize client satisfaction and tailor our solutions to meet your specific business objectives and budget limitations.

                    </p>
                  </div>
                </div>

                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img src='/img/services/ServicesTick.png' alt='Cloud Service Management Provider' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Dedicated Team
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      You'll have access to a dedicated team of cloud experts with extensive knowledge and a commitment to your success.

                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img src='/img/services/ServicesTick.png' alt='Cloud Managed Services' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Security-First Mindset
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We prioritize data security and adhere to strict compliance regulations to ensure the highest level of protection for your data.

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
      <ChooseService3 />

      {/* lastsection */}
      <div className=' mt-16 mx-auto  px-2 sm:px-10  '>
        <section role="banner" aria-label="Main" className='relative h-[434px] max-w-[1920px] mx-auto  text-white'>

          <img src="/img/services/servicesBanner3.png" className={`-z-50 absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='Cloud Managed Services' loading='lazy' />

          <div className='justify-center z-50 text-white lg:w-[58%]  mx-auto  text-center flex flex-col gap-4'>
            <span className='text-mobTitle sm:text-tabttext-mobTitle lg:text-lapttext-mobTitle cursor-default select-none font-bold font-rubik '>
              Act Now to Secure Your Digital Future
            </span>
            <p className='font-krub leading-[18.18px] cursor-default select-none sm:leading-[24.24px] text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody '>
              Don't wait any longer to harness the power and flexibility of the cloud. Contact Cutech Solutions today to discuss your cloud requirements and explore our comprehensive <strong> cloud managed services in UK </strong>. Our team of experts is ready to help you design, implement, and manage a secure and optimized cloud environment that fuels your business growth. We offer a free consultation to assess your needs and recommend the best cloud solution for your organization. Take the first step towards a secure and successful cloud journey – contact Cutech Solutions today!

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




import React from 'react'
import BannerAtom from '../atom/BannerAtom'
import { Link } from 'react-router-dom'

import CoreService4 from '../component/services/CoreService4'
import ChooseService4 from '../component/services/ChooseService4'


const DetailService4 = () => {

  return (
    <>
      <BannerAtom srcImg="/img/about/aboutBanner.png" title="Service" heading="Remote Technical Support Service" />
      <section className="max-w-7xl  mx-auto mt-6 px-4 sm:px-20  bg-transparent ">
        {/* intro section */}
        <div className='flex justify-between gap-20 sm:flex-col lg:flex-row flex-col mb-32 '>
          <div className='lg:w-[55%] flex flex-col gap-[31px]'>
            <h1 className=' text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold font-rubik lg:leading-[41.48px] sm:leading-[29px] leading-[23px]'>Expert Remote Technical Support Services in UK by Cutech Solutions: Your Ultimate Solution Provider</h1>
            <p className='text-mobBody sm:text-tabBody lg:text-lapBody font-medium font-krub text-textgray '>Welcome to Cutech Solutions, your trusted partner for cutting-edge <strong>remote technical support services in UK</strong>. In today's dynamic business landscape, technology plays a critical role in driving operations. Recognizing its significance, Cutech Solutions provides seamless remote assistance to ensure your systems function smoothly and your business thrives. With an unwavering focus on efficiency, reliability, and customer satisfaction, we emerge as your dependable ally in navigating the complexities of modern IT infrastructure. Whether you're a startup venturing into the digital world or a large enterprise seeking to optimize operations, our tailored solutions cater to your unique needs, guaranteeing optimal performance. Partner with Cutech Solutions today and experience the difference – we're your partner in technological innovation and business success.</p>
          </div>
          <div className='flex sm:justify-center lg:justify-between'>
            <img loading="lazy" src="../../img/services/TechnicalSupport.png" alt="" />
          </div>
        </div>

        {/* second section  */}

      </section>
      {/* second section start */}
      <div className='flex max-w-[1920px] mx-auto lg:flex-row sm:flex-col flex-col justify-center lg:justify-between mb-20 lg:px-20  '>
        <div className='w-full flex items-center justify-center lg:justify-normal lg:gap-12 '>
          <div className='flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12 w-full  '>

            <div className='flex gap-4 flex-col'>
              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about  border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #1 Expertise and Experience
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    Our team of seasoned professionals possesses extensive industry knowledge across diverse technical domains. We invest heavily in ongoing training, ensuring our technicians stay abreast of the latest advancements to deliver superior support for our clients.
                  </p>
                </div>
              </div>

              <div className='w-[265px] h-auto   '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #2 Prompt and Reliable Service
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We understand the urgency of resolving IT issues. Through streamlined processes and efficient communication channels, Cutech Solutions guarantees swift and dependable assistance, minimizing disruption to your business operations. Count on us to keep your systems running smoothly and maintain seamless productivity.                  </p>
                </div>
              </div>
              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #3 Cost-Effective Solutions
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We offer budget-friendly remote support plans tailored to your financial constraints, without compromising on quality. By eliminating the need for expensive on-site visits, we streamline processes, saving you both time and money. Our expert team delivers top-tier support, ensuring your IT needs are met efficiently and economically.
                  </p>
                </div>
              </div>

            </div>

            <div className='flex gap-4 flex-col sm:mt-32'>
              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #4 Security and Confidentiality
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    At Cutech Solutions, data security is paramount. We employ industry-leading encryption protocols and secure remote connections to safeguard the confidentiality and integrity of your sensitive information. With Cutech Solutions, your data remains protected under our watchful eye.
                  </p>
                </div>
              </div>
              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #5 Customer Satisfaction Guaranteed
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We strive to exceed your expectations by providing personalized support that addresses your unique needs. From the initial consultation to post-support follow-up, every interaction with Cutech Solutions is designed to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
              <div className='w-[265px] h-auto'>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #6 24/7 Support
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We understand that IT issues can arise anytime. That's why Cutech Solutions provides 24/7 support, ensuring you have access to expert assistance whenever you need it.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right side of cutech solution  */}
        <div className='relative flex flex-col gap-2 sm:gap-[31.21px] items-center lg:items-start mt-14 lg:max-w-[520px] px-4 sm:pl-10 lg:pl-0 -order-1 sm:-order-1 lg:order-1'>

          <div className='flex flex-row flex-wrap gap-4 w-full sticky right-0 top-8 '>

            <div className='text-center lg:text-start w-full gap-4 flex justify-center items-center flex-col'>
              <h2 className='lg:text-lapTitle relative capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-[24px] sm:leading-[36px] text-center lg:text-start w-full'>
                <div className=" block mx-auto lg:mx-0 mb-2 h-[6px] w-[20%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
                </div>
                Why Choose Cutech Solutions as Your Remote Technical Support Provider in UK?
              </h2>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-center lg:text-start max-w-[700px] text-textgray pr-4 mb-8 lg:mb-0'>
                When it comes to <strong> remote technical support in UK </strong>, Cutech Solutions is your one-stop shop for complete peace of mind. Our team of experts, efficient service, budget-friendly plans, ironclad security measures, and dedication to your satisfaction ensure your IT needs are met with the utmost competence and care. Six Reasons to Choose Cutech Solutions:
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* second section end  */}

      <CoreService4 />
      {/* fourth section */}
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-[2%] mt-14 mb-[10rem]">
        <div className="blackSection w-full lg:max-w-[30rem]">
          <div className=" bg-darkBlue px-6 py-8 sm:px-11 sm:py-14 rounded-2xl space-y-8 w-full">
            <h2 className="text-white text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold lg:leading-[41px] ">
              Benefits of Partnering with a Reputable Remote Technical Support Provider in UK
            </h2>
            <p className="text-white text-mobBody sm:text-tabBody lg:text-lapBody font-krub">Don't let tech troubles slow you down! Partner with Cutech Solutions, a <strong>trusted remote technical support provider</strong>, to empower your business. Gain efficiency and expertise, propelling your operations forward with a range of benefits including:</p>
            <button className="bg-white font-medium text-xs sm:text-[23px]   block mx-auto py-3 px-5 sm:mx-0  sm:px-10 sm:py-6 rounded-full">Get Started</button>
          </div>
        </div>
        <div className="whiteSection w-full lg:w-[70%]">
          <div className=" pl-10 py-12 grid gap-6 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black ">01</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold font-rubik  ">Reduced Downtime</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Swift issue resolution translates to minimal downtime for your business operations. Our team works diligently to get your systems back up and running as quickly as possible.</p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik">02</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold   font-rubik ">Enhanced Productivity</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">When your IT systems function smoothly, your employees can focus on core business activities. Remote technical support helps eliminate productivity bottlenecks caused by technical issues.
              </p>
            </div>
            <div className=" flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik ">03</p>
              <h3 className="  text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold font-rubik">Improved Cost Efficiency</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Our remote support eliminates the need for expensive on-site visits, saving you time and money. Additionally, proactive maintenance helps prevent costly downtime and data breaches.</p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-black">04</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-rubik font-semibold">Increased Security</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub"> Our security expertise ensures your IT infrastructure is protected against cyber threats. We offer security patching, vulnerability assessments, and ongoing monitoring to safeguard your data and systems.
              </p>
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
              <img loading="lazy" src="/img/services/ServicesImg.png" alt="services" className='w-full h-full object-cover' />
            </div>

            <div className=' flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-1/2 md:pl-12'>
              <div className='flex flex-col w-full '>
                <h2 className='font-rubik font-semibold w-[300px] sm:w-[400px] lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                  Why Cutech Solutions is the Ideal Remote Technical Support Partner for You

                </h2>
                <div>
                  <p className='font-krub  font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] my-2 sm:my-6'>
                    With a proven track record of excellence and a team of highly skilled technicians, Cutech Solutions stands out as the ideal partner for your <strong>remote technical support</strong> needs in UK. Here are four reasons to choose Cutech Solutions:

                  </p>
                </div>

                {/* //heading and para start  */}
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='servicesImg' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white  sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Unwavering Commitment to Customer Satisfaction
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px]'>
                      Our unwavering focus lies on exceeding your expectations. We provide personalized support that addresses your unique needs, ensuring a seamless and positive experience.

                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='servicesImg' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Cost-Effective Solutions with Transparent Pricing
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We offer <strong>budget-friendly remote support</strong> plans with transparent pricing structures. There won't be any unexpected costs, so you'll know exactly what you're paying for.

                    </p>
                  </div>
                </div>

                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='servicesImg' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Scalable Solutions to Meet Your Growing Needs
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      As your business evolves, your IT needs will change. Cutech Solutions provides scalable solutions that can adapt to your growing requirements, ensuring continued support throughout your journey.

                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='servicesImg' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Proactive Approach to IT Management
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We go beyond simply reacting to problems. Our proactive IT management approach includes regular system maintenance, security patching, and performance optimization to prevent issues before they arise.


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
      <ChooseService4 />

      {/* lastsection */}
      <div className=' mt-16 mx-auto  px-2 sm:px-10  '>
        <section role="banner" aria-label="Main" className='relative h-[434px] max-w-[1920px] mx-auto  text-white'>

          <img src="/img/services/ServicesBgImg.png" className={`-z-50 absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='imgBanner' loading='lazy' />

          <div className='justify-center z-50 text-white lg:w-[58%]  mx-auto  text-center flex flex-col gap-4'>
            <span className='text-mobTitle sm:text-tabttext-mobTitle lg:text-lapttext-mobTitle cursor-default select-none font-bold font-rubik '>
              Act Now to Safeguard Your Digital Future

            </span>
            <p className='font-krub leading-[18.18px] cursor-default select-none sm:leading-[24.24px] text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody '>
              Don't let IT challenges hinder your business growth. Partner with Cutech Solutions today and experience the difference that expert remote technical support can make.
              Get a free quote and discuss your unique requirements by getting in touch with us!
              We look forward to partnering with you and ensuring the smooth operation and optimal performance of your IT infrastructure. By choosing Cutech Solutions, you gain a trusted ally in navigating the complexities of modern technology, allowing you to focus on what matters most – running your business successfully.


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

export default DetailService4


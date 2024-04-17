import React from 'react'
import { BannerAtom } from '../atom/BannerAtom'
import { Link } from 'react-router-dom'
import { Cards } from "../component/home/Cards"

export const About = () => {
  return (
    <section className='max-w-[1920px] mx-auto'>

      <BannerAtom srcImg="/img/about/aboutBanner.webp" title="About us" heading="About Us" />

      <div className='flex flex-row flex-wrap lg:flex-nowrap sm:gap-[89.16px] gap-[89.16px] justify-center lg:justify-between mt-0 mb-28 lg:px-20 '>
        <div className='sm:order-2 order-2 text-start sm:w-[713px] lg:w-[684.33px] pr-4 sm:pr-0 lg:pr-0 '>
          <img src="/img/about/AboutImghead.webp" alt="About Us Header Image" className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col gap-[31.21px] lg:w-[570.51px] sm:w-[580.52px] order-1 lg:order-2 pl-3 w-full lg:pl-0'>
          <div className='flex gap-[10px] flex-col'>
            <p className="font-rubik font-normal lg:text-lapBody2 sm:text-lapBody2 text-[6.7px] w-[78px] bg-white/10 border-l-4 pl-2 border-yellow-500">
              About us
            </p>
            <h1 className='lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik'>Our <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'> Company </span> Overview</h1>
            <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-textgray'>Welcome to Cutech Solutions, the foremost provider of <strong>B2B IT support services in UK</strong>. With an unwavering dedication to excellence and innovation, Cutech Solutions emerges as the go-to ally for businesses in search of comprehensive and customized IT solutions.</p>
          </div>
          <div className='flex flex-col gap-[24.07px] sm:order-2'>
            <div>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-textgray'>
                Our array of services encompasses everything from proficient <strong>IT help desk</strong> support to state-of-the-art cybersecurity and cloud services, all crafted to empower businesses and ensure the seamless functioning of their IT infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col flex-wrap lg:flex-nowrap sm:gap-[89.16px] gap-[89.16px] justify-center lg:justify-between mt-0 mb-40 lg:px-20  '>

        <div className='flex flex-row flex-wrap px-4 sm:px-40 lg:px-4 '>
          <div className='flex flex-col lg:w-1/2 gap-10'>
            <p className='lg:text-[35px] sm:text-[25px] text-[18px] font-krub font-semibold'>“Navigate the maze effortlessly with <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Cutech Solutions</span>”</p>
            <img src="/img/about/About.webp" alt="Know About Us" className='w-[90%]' />
          </div>

          <div className='lg:w-1/2 mt-8 lg:mt-0'>
            <div className='flex flex-col lg:gap-8 sm:gap-6 gap-1 mb-8'>
              <h2 className='lg:text-lapTitle capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik'>Our <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Missions</span></h2>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-textgray '>Our mission at Cutech Solutions is straightforward: to furnish dependable and <strong>effective IT support services</strong> customized to the unique necessities of each of our B2B clients. Whether it involves resolving technical glitches, implementing novel technologies, or fine-tuning existing systems, we are steadfastly committed to minimizing downtime, amplifying productivity, and guaranteeing the security and stability of our clients' IT environments.</p>
            </div>
            <div className='flex flex-col lg:gap-10 sm:gap-6 gap-1'>
              <h2 className='lg:text-lapTitle capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik'>Our <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Vision</span></h2>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-textgray '>
                Our vision is to ascend as the preeminent provider of <strong>B2B IT support services in UK</strong>, renowned for our unwavering dedication to excellence, innovation, and client satisfaction. We aspire to continually adapt and evolve to meet the evolving requisites of our clients in an ever-evolving digital milieu, staying ahead of the curve and setting novel benchmarks of excellence within the industry.
              </p>
            </div>
          </div>
        </div>

        <div className='flex lg:flex-row sm:flex-col flex-col lg:justify-between items-center justify-center lg:gap-[209.16px] sm:gap-[89.16px] gap-[89.16px] mt-32 mb-20  lg:px-20  '>
          <div className='relative flex flex-col gap-2 sm:gap-[31.21px] sm:w-3/4 lg:w-1/2 px-4 sm:pl-10 lg:pl-0 '>
            <div className="absolute -top-6 flex h-[6px] w-[15%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
            </div>

            <h2 className='lg:text-lapTitle capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-6 sm:leading-10'>
              Our Dedication to <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Excellence</span>
            </h2>
            <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-textgray'>
              At Cutech Solutions, we take immense pride in delivering unmatched service and inventive solutions to assist our clients in thriving within today's fiercely competitive environment. Possessing a profound comprehension of B2B operations, we approach each client's IT requisites with precision and proficiency, guaranteeing that their systems remain secure, steady, and optimized for peak efficiency.
            </p>

          </div>
          <div className='sm:w-2/3 lg:w-1/2 px-4 sm:px-0 lg:px-0 sm:mx-auto'>
            <img src="../../img/about/Abou-us-Video.webp" alt="About Us Page" className='w-full object-cover ' />
          </div>
        </div>

        <div className='flex lg:flex-row sm:flex-col flex-col justify-center lg:justify-between mb-20 lg:px-20  '>
          <div className='relative flex flex-col gap-2 sm:gap-[31.21px] items-center lg:items-start justify-center lg:w-2/4 px-4 sm:pl-10 lg:pl-0 '>
            <h2 className='lg:text-lapTitle relative capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-[24px] sm:leading-[36px]'>
              Why opt for <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>cutech solutions</span>
              <div className="absolute -top-4 left-[0px] flex h-[6px] w-[20%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
              </div>
            </h2>
            <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-center lg:text-start max-w-[700px] text-textgray pr-4 mb-8 lg:mb-0'>
              At Cutech Solutions, we take immense pride in delivering unmatched service and inventive solutions to assist our clients in thriving within today's fiercely competitive environment. Possessing a profound comprehension of B2B operations, we approach each client's IT requisites with precision and proficiency, guaranteeing that their systems remain secure, steady, and optimized for peak efficiency.
            </p>
          </div>

          <div className='w-full flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 w-4/4 '>
              <div className='flex gap-4 flex-col'>
                <div className='w-[265px] h-[150px] sm:h-auto '>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about  border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      Tailor-Made Solutions:
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      Recognizing that every business is distinctive, we offer personalized IT solutions designed to cater to the precise requirements of each client.
                    </p>
                  </div>
                </div>

                <div className='w-[265px] h-[150px] sm:h-auto   '>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      Expert Proficiency
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      Our team of seasoned IT professionals possesses the expertise and skills required to tackle even the most intricate IT challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 flex-col sm:mt-20'>
                <div className='w-[265px] h-[150px] sm:h-auto '>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      Proactive Methodology
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      Rather than merely reacting to issues as they surface, we adopt a proactive stance towards IT support.
                    </p>
                  </div>
                </div>

                <div className='w-[265px] h-[150px] sm:h-auto  '>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      Client Contentment
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      At Cutech Solutions, client contentment ranks as our foremost priority. We go the extra mile to ensure that our clients receive the utmost level of service and support.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <Cards />
        <div className=' mt-16'>
          <section role="banner" aria-label="Main" className='relative h-[400px] max-w-[1920px] mx-auto px-2 sm:pt-4 text-white'>

            <img src="/img/services/servicesBanner5.webp" className={`-z-50 absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='About Us' loading='lazy' />

            <div className='justify-center z-50 text-white w-full sm:px-20 text-center flex flex-col gap-4'>
              <span className='text-mobTitle sm:text-tabttext-mobTitle lg:text-lapttext-mobTitle cursor-default select-none font-bold font-rubik '>
                Eager to experience the Cutech Solutions disparity?
              </span>
              <p className='font-krub leading-[18.18px] cursor-default select-none sm:leading-[24.24px] text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody'>
                Reach out to us today to delve deeper into our services and discover how we can facilitate
                <br />
                your business in flourishing within today's digital realm.
              </p>
              <Link to="/contact-us">
                <button className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[112px] h-[34px] sm:w-[146px] sm:h-[45px]'>
                  Get Started
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>

  )
}


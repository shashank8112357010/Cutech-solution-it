import React from 'react'
import { BannerAtom } from '../atom/BannerAtom'
import { Link } from 'react-router-dom'
import { CoreService1 } from "../component/services/CoreService1"
import { ChooseService1 } from "../component/services/ChooseService1"

export const DetailService1 = () => {

  return (
    <>
      <BannerAtom srcImg="/img/about/aboutBanner.png" title="Service " heading="Cyber Security Services " />
      <section className="max-w-7xl  mx-auto mt-6 px-4 sm:px-20  bg-transparent ">
        {/* intro section */}
        <div className='flex justify-between gap-20 sm:flex-col lg:flex-row flex-col mb-32 '>
          <div className='lg:w-[55%] flex flex-col gap-[31px]'>
            <h1 className=' text-mobTitle sm:text-tabTitle lg:text-lapTitle font-semibold font-rubik lg:leading-[41.48px] sm:leading-[29px] leading-[23px]'>Cyber Security Service Providers in UK: Protecting Your Digital Assets with Cutech Solutions</h1>
            <p className='text-mobBody sm:text-tabBody lg:text-lapBody font-medium font-krub text-textgray '>The digital landscape of today is an undeniable double-edged sword. While technology empowers us to connect, collaborate, and conduct business with unprecedented ease, it also exposes us to a growing threat – cybercrime. In the UK, businesses and individuals alike face a constant barrage of cyberattacks, aiming to steal data, disrupt operations, or extort money. This escalating threat landscape necessitates the expertise of reliable <strong> cyber security service providers in UK. </strong></p>
            <p className='text-mobBody sm:text-tabBody lg:text-lapBody font-medium font-krub text-textgray' >Here at Cutech Solutions, we understand the critical importance of safeguarding your digital assets. We are a leading provider of computer <strong> cyber security service solutions </strong>, offering a comprehensive suite of services designed to protect your data, systems, and networks from even the most sophisticated cyber threats.
            </p>
          </div>
          <div className='flex sm:justify-center lg:justify-between'>
            <img loading="lazy" src="../../img/services/CybersecFirst.png" alt="Cyber Security Services" />
          </div>
        </div>

        {/* second section  */}

      </section>

      {/* second section start */}
      <div className='flex max-w-[1920px] mx-auto lg:flex-row sm:flex-col flex-col justify-center lg:justify-between mb-20 lg:px-20  '>
        <div className='w-full flex items-center justify-center lg:justify-normal lg:gap-12 '>
          <div className='flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12 w-full  '>
            <div className='flex gap-4 flex-col'>
              {/* 1st  */}
              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about  border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #1 Unparalleled Expertise
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    Our team comprises certified security professionals with extensive experience in all facets of cyber security. We stay at the forefront of the latest threats and vulnerabilities, ensuring our solutions remain effective against emerging attacks.
                  </p>
                </div>
              </div>

              {/* 2nd  */}
              <div className='w-[265px] h-auto   '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #2 Comprehensive Service Portfolio
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We offer a holistic approach to cyber security, encompassing a wide range of services tailored to your specific needs. These include vulnerability assessments, penetration testing, intrusion detection and prevention, security awareness training, incident response planning, and ongoing security monitoring.
                  </p>
                </div>
              </div>

              {/* 3rd  */}
              <div className='w-[265px] h-auto '>
                <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                  <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                    #3 Proactive Approach
                  </h3>
                  <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                    We don't wait for cyberattacks to happen. We take a proactive stance on security, identifying and addressing vulnerabilities before they can be exploited.
                  </p>
                </div>
              </div>
            </div>

            {/* 4th  */}
            <div className='flex gap-4 flex-col sm:mt-32'>
              <div className='flex gap-4 flex-col'>

                <div className='w-[265px] h-auto'>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      #4 Data-Driven Solutions
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      We leverage cutting-edge security technologies and real-time threat intelligence to provide data-driven solutions that optimize your security posture.
                    </p>
                  </div>
                </div>

                {/* 5th  */}
                <div className='w-[265px] h-auto '>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      #5 Scalable and Flexible Services
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      Our <strong>cyber security solutions </strong>  are scalable and adaptable to suit the needs of businesses of all sizes and across various industries.
                    </p>
                  </div>
                </div>

                {/* 6th  */}
                <div className='w-[265px] h-auto'>
                  <div className='hover:scale-105 transition-all h-full duration-300 ease-in-out shadow-custom-about border-2 border-[#E7DAED] justify-center flex flex-col p-4 gap-2 sm:gap-4 rounded-[9px]  '>
                    <h3 className='font-rubik text-mobTitle2 text-center text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                      #6 Unwavering Commitment to Client Success
                    </h3>
                    <p className='text-mobBody2 text-center sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                      Your success is our priority. We work closely with you to understand your unique security requirements and implement solutions that offer the highest level of protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right side of cutech solution  */}
        <div className='relative flex flex-col gap-2 sm:gap-[31.21px] items-center lg:items-start mt-14 lg:max-w-[520px] px-4 sm:pl-10 md:pl-[50px] -order-1 sm:-order-1 lg:order-1'>

          <div className='flex flex-row flex-wrap gap-4 w-full sticky top-8 right-0'>
            <div className='text-center lg:text-start w-full gap-4 flex justify-center items-center flex-col'>
              <h2 className='lg:text-lapTitle relative capitalize sm:text-tabTitle text-mobTitle font-semibold font-rubik leading-[24px] sm:leading-[36px] text-center lg:text-start w-full'>
                <div className=" block mx-auto lg:mx-0 mb-2 h-[6px] w-[20%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
                </div>
                Why Choose Cutech Solutions as Your Cyber Security Service Provider?
              </h2>
              <p className='lg:text-lapBody3 sm:text-lapBody3 text-tabBody3 font-krub font-medium text-center lg:text-start max-w-[700px] text-textgray pr-4 mb-8 lg:mb-0'>
                In the ever-evolving world of cyber threats, choosing the right <strong> cyber security service provider</strong> is crucial. Cutech Solutions stands out from the crowd with the following key advantages:
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* second section end  */}

      < CoreService1 />
      {/* fourth section */}
      < div className="w-full flex flex-col lg:flex-row px-5 lg:px-[2%] mt-14 mb-[10rem]" >
        <div className="blackSection w-full lg:max-w-[30rem]">
          <div className=" bg-darkBlue px-6 py-8 sm:px-11 sm:py-14 rounded-2xl space-y-8 w-full">
            <h2 className="text-white text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold lg:leading-[41px] ">
              Benefits of Partnering with a Reputable Cyber Security Service Provider
            </h2>
            <p className="text-white text-mobBody sm:text-tabBody lg:text-lapBody font-krub">Cybercrime is a complex and ever-evolving threat. Attempting to manage cyber security in-house can be a resource-intensive and challenging endeavor. Partnering with a <strong> reputable cyber security service provider in UK </strong>offers a multitude of benefits.</p>
            <button className="bg-white font-medium text-xs sm:text-[23px]   block mx-auto py-3 px-5 sm:mx-0  sm:px-10 sm:py-6 rounded-full">Get Started</button>
          </div>
        </div>
        <div className="whiteSection w-full lg:w-[70%]">
          <div className=" pl-10 py-12 grid gap-6 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer ">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik">01</p>
              <h3 className="text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold  ">Enhanced Security Posture</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Our expertise allows us to identify and address security gaps that may be missed by internal IT teams. We implement best practices and industry-standard security controls to significantly reduce your risk of cyberattacks.</p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow cursor-pointer ">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black  font-rubik">02</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold    font-rubik ">Cost-Effectiveness</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Building and maintaining an in-house security team is a substantial investment. Our outsourced <strong> cyber security services</strong> provide a cost-effective solution, delivering a higher level of protection without the overhead costs of hiring and training dedicated security personnel.</p>
            </div>
            <div className=" flex flex-col gap-2 hover:text-darkYellow cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-black font-rubik ">03</p>
              <h3 className="  text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-semibold   font-rubik">Improved Efficiency</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Our team frees your internal IT staff to focus on core business functions, while we handle your cyber security needs. This enhances overall IT efficiency and allows your team to focus on strategic initiatives.</p>
            </div>
            <div className="flex flex-col gap-2 hover:text-darkYellow  cursor-pointer">
              <p className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-black   ">04</p>
              <h3 className=" text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2 font-rubik font-semibold    ">Peace of Mind</h3>
              <p className="text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 font-normal font-krub">Knowing your critical data and systems are protected by experienced professionals provides invaluable peace of mind. This allows you to concentrate on your core business operations with the confidence that your digital assets are secure.</p>
            </div>


          </div>
        </div>
      </div >

      {/* fifth section */}
      < div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-16 sm:pb-24 mb-[9rem] ' >
        <div className='flex flex-col px-4 sm:px-20 lg:justify-center'>

          <div className={`flex item flex-col lg:flex-row items-center lg:justify-between w-full`}>
            {/* Image  */}
            <div className='sm:w-[622px] sm:h-[679px] flex justify-end sm:justify-end lg:justify-normal mb-12 mt-0 sm:mt-10 lg:mt-0'>
              <img loading="lazy" src="/img/services/ServicesImg1.png" alt="Cyber Security Services" className='w-full h-full object-cover' />
            </div>

            <div className=' flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-1/2 md:pl-12'>
              <div className='flex flex-col w-full '>
                <h2 className='font-rubik font-semibold w-[300px] sm:w-[400px] lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                  Why Cutech Solutions is the Ideal Cyber Security Partner for You
                </h2>
                <div>
                  <p className='font-krub  font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] my-2 sm:my-6'>
                    At Cutech Solutions, we are confident that we can be your ideal <strong> cyber security partner in UK</strong>. We offer an unrivaled combination of experience, expertise, and a comprehensive suite of services designed to provide the highest level of protection for your business. Every business has different security needs, and we are aware of that. We work closely with you to understand your specific requirements and develop a customized security strategy that aligns with your budget and risk tolerance.
                  </p>
                </div>

                {/* //heading and para start  */}
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='Cyber Security Service Providers' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white  sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Proven Track Record
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px]'>
                      We have a long and successful history of helping businesses in the UK secure their IT infrastructure and data.
                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='Cyber Security Service Providers' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Client-Centric Approach
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      Establishing enduring relationships with our clients is our top priority. We are committed to your success and take a proactive approach to ensure your cyber security posture remains resilient.
                    </p>
                  </div>
                </div>

                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='Top Cyber Security Service' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      24/7 Support
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We offer round-the-clock monitoring and support, ensuring your business is protected at all times.
                    </p>
                  </div>
                </div>
                <div className='w-full flex flex-row items-center sm:items-start mt-2'>
                  <img loading="lazy" src='/img/services/ServicesTick.png' alt='Top Cyber Security Service' className='w-4 h-4 sm:w-8 sm:h-8 mt-2' />
                  <div className='w-full sm:w-4/5 pl-4 border-y-white border-r-white sm:mt-2'>
                    <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px] mb-2'>
                      Competitive Rates
                    </h3>
                    <p className='font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-black font-medium leading-[18px] sm:leading-[24px] capitalize'>
                      We provide cost-effective solutions that deliver exceptional value for your investment.
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
      </div >
      {/* chooseservice */}
      < ChooseService1 />

      {/* lastsection */}
      < div className=' mt-16 mx-auto  px-4 sm:px-20  ' >
        <section role="banner" aria-label="Main" className='relative h-[400px] max-w-[1920px] mx-auto px-2 sm:pt-4 text-white'>

          <img src="/img/services/servicesBanner1.png" className={`-z-50 absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='Top Cyber Security Service' loading='lazy' />

          <div className='justify-center z-50 text-white lg:w-1/2 mx-auto sm:px-20 text-center flex flex-col gap-4'>
            <span className='text-mobTitle sm:text-tabttext-mobTitle lg:text-lapttext-mobTitle cursor-default select-none font-bold font-rubik '>
              Act Now to Protect your Digital Future
            </span>
            <p className='font-krub leading-[18.18px] cursor-default select-none sm:leading-[24.24px] text-mobHeaderBody sm:text-tabHeaderBody lg:text-lapHeaderBody '>
              Let Cutech Solutions be your trusted partner in navigating the ever-evolving cyber threat  landscape. With our comprehensive <strong> cyber security service solutions</strong>, you can focus on  running your business with confidence, knowing your digital assets are protected.
            </p>
            <Link to="/contact-us">
              <button className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[112px] h-[34px] sm:w-[146px] sm:h-[45px]'>
                Contact Us
                <div className='w-[40px] h-[40px] absolute -bottom-4 -right-4 rounded-full bg-white'></div>
              </button>
            </Link>
          </div>
        </section>
      </div >
    </>
  )
}




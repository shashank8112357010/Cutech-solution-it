import React from 'react';
import BannerAtom from '../atom/BannerAtom';
import DetailBlogFAQ from '../component/detailBlogFaq/DetailBlogFAQ';

const DetailBlog1 = () => {
  return (
    <>
      <BannerAtom srcImg="/img/blog/BlogBanner.png" title="Blog" heading="Blog" />
      <section className="max-w-[1920px] mx-auto lg:px-10 sm:px-8 px-3">
        <div className="flex lg:flex-row sm:flex-col flex-col gap-[53px]">
          <div className="max-w-[770px]  flex flex-col gap-9 lg:mx-0">
            <img loading="lazy" src="../../img/blog/BlogImg1.png" width={720} height={400} className='rounded-2xl' alt="" />
            <h2 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
              Elevate Your Business with Expert B2B IT Support
            </h2>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 ">
                <img loading="lazy" src="../../img/blog/Avtar.svg" alt="" className="w-[24px]" />
                <p className="lg:text-[18px] sm:text-[16px] text-[12px] font-medium font-krub">
                  Cutech Solutions
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3 justify-center items-center">
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] font-normal ">
                  Mar 06, 2024{" "}
                </p>
                <div className='bg-[#29A0F5] w-[5px] h-[5px] rounded-full'></div>
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] font-normal ">
                  3 min read
                </p>
              </div>
            </div>
            <div className=" font-krub font-medium flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
              <p>
                Are you tired of dealing with IT issues that disrupt your business flow? Look no further! Cutech Solutions is here to elevate your business with <span className='font-bold'> expert B2B IT support services </span> tailored to your needs. Based in London, we specialize in providing on-call 24x7 technical support and <span className='font-bold'>IT helpdesk services to businesses</span>  of all sizes. With our dedicated team of professionals, we ensure prompt resolution of issues, allowing you to focus on what matters most – growing your business.
              </p>
            </div>

            <div className="flex  lg:gap-10 sm:gap-8 gap-2 items-center lg:items-start sm:justify-normal justify-center lg:justify-start lg:mr-8 py-6">
              <img loading="lazy" src="../../img/blog/Blog1.png" alt="" className=" w-[140px] sm:w-[260px] lg:w-[340px]" />
              <img loading="lazy" src="../../img/blog/Blog2.png" alt="" className="w-[140px] sm:w-[260px] lg:w-[340px]" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
                Who We Are: Cutech Solutions
              </h2>
              <p className=" font-krub font-medium  text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
                At Cutech Solutions, we pride ourselves on being more than just a typical IT support company. We are your partners in success, committed to delivering reliable and efficient solutions to meet your IT needs. With years of experience in the industry, we understand the challenges businesses face and strive to provide <span className='font-bold'>innovative IT support services</span> to help you stay ahead of the curve.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
                Our Mission
              </h2>
              <p className=" font-krub font-medium flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
                Our aim is to provide businesses with modern IT solutions that promote development and achieve. Technology should serve as an enabler and not a stumbling block and strive for you to guarantee that your IT system is in place and running efficiently.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
                Our Services
              </h2>
              <p className=" font-rubik font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                1. B2B IT Support Services
              </p>
              <p className=" font-krub font-medium  text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
                We offer comprehensive <span className='font-bold'>B2B IT support services</span>  designed to keep your business running smoothly. From troubleshooting hardware and software issues to network maintenance and security, we've got you covered. Our expert team is always available to resolve any IT problems that could arise, with the goal of ensuring the least disruption to your business.
              </p>
              <p className=" font-rubik font-bold text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                2. On-Call 24x7 Technical Support
              </p>
              <p className=" font-krub font-medium  text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
                IT issues can strike at any moment whether it's at any time of the day or night. That's why we provide <span className='font-bold'>on-call 24x7 technical support</span> to our clients. Whether it's a critical system failure or a minor software glitch, our team is just a phone call away, ready to provide immediate assistance and resolution.
              </p>
              <p className=" font-rubik font-bold  text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                3. IT Helpdesk Support in the UK
              </p>
              <p className=" font-krub font-medium text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">
                Our <span className='font-bold'>IT helpdesk support services</span>  are tailored to meet the unique needs of businesses in the UK. With our localized support team, we can quickly respond to your queries and provide personalized assistance to ensure that your IT issues are resolved promptly.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
                Why Choose Cutech Solutions?
              </h2>
              <p className=" font-krub font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                1. Fast Resolution Times
              </p>
              <p className=" font-krub font-medium flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody text-textgray gap-9 ">

                We are aware of the fact that each minute spent in downtime can cost your business money. That's why we prioritize fast resolution times, ensuring that your IT issues are addressed promptly and efficiently. With Cutech Solutions, you can rest assured that your business will be back up and running in no time.
              </p>
              <p className=" font-krub font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                2. Experienced Professionals
              </p>

              <p className=" font-krub font-medium flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  text-textgray gap-9 ">
                Our team comprised of IT experts bring many years of expertise and knowledge in the field. From certified technicians to network engineers, we have the skills and knowledge to handle even the most complex IT challenges. With Cutech Solutions, you can trust that your IT infrastructure is in good hands.
              </p>
              <p className=" font-krub font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                3. Personalized Service
              </p>
              <p className=" font-krub font-medium flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  text-textgray gap-9 ">
                We believe in taking a personalized approach to IT support. Unlike larger corporations, we take the time to understand your business and its unique needs, allowing us to provide tailored solutions that align with your goals and objectives. With Cutech Solutions, you're not just another client – you're a valued partner.
              </p>
              <p className=" font-krub font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                4. Proactive Monitoring and Maintenance
              </p>
              <p className=" font-krub font-medium  text-mobBody sm:text-tabBody lg:text-lapBody  text-textgray gap-9 ">
                Prevention is better than cure – that's why we offer <span className='font-bold'>proactive monitoring and maintenance services to our clients</span> . By continuously monitoring your IT infrastructure, we can identify and address potential issues before they escalate into major problems, saving you time, money, and headaches down the line.
              </p>
              <p className=" font-krub font-bold flex flex-col text-mobBody sm:text-tabBody lg:text-lapBody  gap-9 ">
                5. Affordable Pricing
              </p>

              <p className=" font-krub font-medium  text-mobBody sm:text-tabBody lg:text-lapBody  text-textgray gap-9 ">
                We believe that <span className='font-bold'>top-quality IT support</span>  should not cost a fortune. That's why we offer competitive pricing plans designed to fit businesses of all sizes and budgets. With Cutech Solutions, you can enjoy <span className='font-bold'>top-notch IT support</span>  without breaking the bank.
              </p>
            </div>

            <DetailBlogFAQ />

            <p className='font-krub text-mobBody sm:text-tabBody lg:text-lapBody font-medium leading-[18px] sm:leading-[24px] px-4'>
              In today's fast-paced business environment, having reliable IT support is essential for success. With Cutech Solutions, you can elevate your business to new heights with expert B2B IT support services tailored to your needs. From fast resolution times to personalized service, we're here to help you overcome any IT challenge and drive growth and success for your business. Contact us today to learn more about how Cutech Solutions can support your business's IT needs.
            </p>

            <div className='flex  items-center justify-between py-5 px-5 border-2 shadow-sm mb-10'>
              <div>
                <h2 className=' text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 font-bold font-rubik'>Share</h2>
              </div>
              <div className='flex lg:gap-[46px] sm:gap-[40px] gap-[20px]'>
                <img loading="lazy" src="../../img/blog/Fb2.svg" alt="" />
                <img loading="lazy" src="../../img/blog/Tweet2.svg" alt="" />
                <img loading="lazy" src="../../img/blog/Link2.svg" alt="" />
                <img loading="lazy" src="../../img/blog/Insta2.svg" alt="" />
              </div>
            </div>
          </div>





          {/* //Right section  */}
          <div>
            <div className=" flex flex-col sticky top-8 right-0">
              <h1 className="lg:text-lapTitle sm:text-tabTitle text-mobTitle font-semibold font-rubik">
                Recent Post
              </h1>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                <div className="items-center flex gap-4 px-2 sm:pl-0 sm:py-2 py-4 sm:pb-8 border rounded-md shadow-sm sm:w-[400px] ">
                  <img loading="lazy"
                    src="../../img/blog/Blog3.png"
                    alt=""
                    className="w-[50px] sm:w-[80] lg:w-[120px] pl-2 pt-2 lg:pl-4 lg:pt-4"
                  />
                  <div>
                    <p className="font-bold font-rubik text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3">
                      How to Increase Your ROI Through scientific
                    </p>
                    <p className="text-textgray text-mobBody sm:text-tabBody lg:text-lapBody font-medium ">
                      May 02, 2022 &nbsp; &nbsp; 3 min read
                    </p>
                  </div>
                </div>

                <div className=" items-center flex gap-4 px-2 sm:pl-0 sm:py-2 py-4 sm:pb-8 border rounded-md shadow-sm sm:w-[400px] ">
                  <img loading="lazy"
                    src="../../img/blog/Blog4.png"
                    alt=""
                    className="w-[50px] sm:w-[80] lg:w-[120px] pl-2 pt-2 lg:pl-4 lg:pt-4"
                  />
                  <div>
                    <p className="font-bold font-rubik text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3">
                      UX and UI Design Trends 2020
                    </p>
                    <p className="text-textgray text-mobBody sm:text-tabBody lg:text-lapBody font-medium ">
                      May 02, 2022 &nbsp; &nbsp; 3 min read
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <div className=" items-center flex gap-4 px-2 sm:pl-0 sm:py-2 py-4 sm:pb-8 border rounded-md shadow-sm sm:w-[400px] ">
                  <img loading="lazy"
                    src="../../img/blog/Blog5.png"
                    alt=""
                    className="w-[50px] sm:w-[80] lg:w-[120px] pl-2 pt-2 lg:pl-4 lg:pt-4"
                  />
                  <div>
                    <p className="font-bold font-rubik text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3">
                      An oral history of the AIM away
                    </p>
                    <p className="text-textgray text-mobBody sm:text-tabBody lg:text-lapBody font-medium ">
                      May 02, 2022 &nbsp; &nbsp; 3 min read
                    </p>
                  </div>
                </div>
                <div className=" items-center flex gap-4 px-2 sm:pl-0 sm:py-2 py-4 sm:pb-8 border rounded-md shadow-sm sm:w-[400px] ">
                  <img loading="lazy"
                    src="../../img/blog/Blog6.png"
                    alt=""
                    className="w-[50px] sm:w-[80] lg:w-[120px] pl-2 pt-2 lg:pl-4 lg:pt-4"
                  />
                  <div>
                    <p className="font-bold font-rubik text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3">
                      Follow your own design whatever gets
                    </p>
                    <p className="text-textgray text-mobBody sm:text-tabBody lg:text-lapBody font-medium ">
                      May 02, 2022 &nbsp; &nbsp; 3 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-16 sm:mb-20">
                <div className="sm:w-[400px] mx-2 sm:mx-0 mt-16 sm:mt-20">
                  <h3 className="text-lapTitle font-semibold font-rubik mb-8">
                    Categories
                  </h3>
                  <div className="flex justify-between border-b pt-2 pb-8">
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      Agency news
                    </p>
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      [1]
                    </p>
                  </div>
                  <div className="flex justify-between border-b pt-2 pb-8">
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      Information technology
                    </p>
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      [2]
                    </p>
                  </div>
                  <div className="flex justify-between border-b pt-2 pb-8">
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      New ideas
                    </p>
                    <p className="font-krub font-medium text-lapBody text-textgray">
                      [3]
                    </p>
                  </div>
                </div>
                <div className="sm:w-[600px] mx-2 sm:mx-0 lg:w-[400px] mt-16 sm:mt-20">
                  <h3 className="text-lapTitle font-semibold font-rubik mb-8">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Design
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Development
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      HTML
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Animation
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Life Style
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Dashboard
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border rounded-2xl">
                      Template
                    </div>
                  </div>

                </div>

                <div className="sm:w-[400px] flex gap-4 justify-center items-center bg-darkBlue rounded-2xl mt-16 sm:mt-20 ml-2 mr-16 sm:mx-2 py-8 sm:py-10">
                  <p className="text-white font-semibold">Follow:</p>
                  <img loading="lazy" src="../../img/blog/Fb.svg" alt="" />
                  <img loading="lazy" src="../../img/blog/Tweet.svg" alt="" />
                  <img loading="lazy" src="../../img/blog/Insta.svg" alt="" />
                  <img loading="lazy" src="../../img/blog/Linkdin.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default DetailBlog1
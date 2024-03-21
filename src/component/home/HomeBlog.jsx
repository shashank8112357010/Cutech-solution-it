import React from 'react'
import { Link } from 'react-router-dom'

const HomeBlog = () => {
    return (
        <section className="mx-auto max-w-[1920px]">
            <div className="w-[95%] md:w-9/12 lg:w-[83%] mx-auto text-center my-[15vh] sm:py-4 relative">
                <div className='relative'>
                    <div className="absolute -top-7 left-[35%] sm:left-[45%] flex h-1/5 w-[30%] sm:w-[10%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500"></div>
                    <h2 className="text-2xl md:text-3xl lg:text-lapBlogTitle4xl font-semibold my-12">Our Latest Blogs</h2>
                </div>

                <div>

                    <div className='blog flex flex-col lg:flex-row lg:border-y-2 py-4 justify-between sm:gap-20'>
                        <div className="img w-full lg:1/2 relative">
                            <div className='flex justify-center items-center w-full h-full'>
                                <img loading="lazy" className='w-full lg:h-full' src="img/blog/BlogImg1.png" alt="" />
                            </div>
                            <Link to="/elevate-your-business-with-expert-b2b-it-support">
                                <div className="absolute opacity-0 hover:opacity-100 top-8 left-10 flex h-4/5 w-4/5 bg-black/60 items-center justify-center text-white font-bold duration-500">  Read More</div>
                            </Link>
                        </div>

                        <div className="text w-full lg:1/2 flex border-y-2 py-4 my-4 lg:border-y-0 lg:py-0 lg:my-0">
                            <div className="text_details w-5/5 border-l-2 text-left pl-8 space-y-5 group">
                                <Link to="/elevate-your-business-with-expert-b2b-it-support">
                                    <h2 className='text-mobBlogTitle md:text-tabBlogTitle lg:text-lapBlogTitle font-semibold group-hover:text-[#ffc64f] duration-200'>
                                        Elevate Your Business With Expert B2B IT Support
                                    </h2>
                                </Link>
                                <p className='text-mobBlogBody sm:text-tabBlogBody lg:text-lapBlogBody cursor-default'>
                                    Are you tired of dealing with IT issues that disrupt your business flow? Look no further! Cutech Solutions is here to elevate your business with <strong> expert B2B IT support services </strong> tailored to your needs. Based in London, we specialize in providing on-call 24x7 technical support and IT helpdesk services to businesses of all sizes. With our dedicated team of professionals, we ensure prompt resolution of issues, allowing you to focus on what matters most – growing your business.
                                    <Link to="/elevate-your-business-with-expert-b2b-it-support">
                                        <span className='text-darkYellow'> Read more.</span>
                                    </Link>
                                </p>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeBlog
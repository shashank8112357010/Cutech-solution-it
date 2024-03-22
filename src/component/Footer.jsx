import React from 'react'
import { Link } from 'react-router-dom'
// import { socialIcon } from '../data/dataSet'

export const Footer = () => {
    return (
        <>
            <footer className='max-w-xxl relative bg-darkBlue mx-auto pb-12 xl:px-20 text-white '>
                <div className='absolute bg-[#1d2551] w-full top-0 left-0 h-[70px] z-0'></div>
                <div className='outerDiv'>
                    <div className='innerDiv px-8 md:px-0 flex flex-row justify-center flex-wrap gap-8 xl:gap-0'>
                        {/* FIRST */}
                        <div className='flex flex-col gap-4'>
                            <div className='py-4 px-20 z-10 bg-darkBlue'>
                                <div className='sm:w-[176px] h-[38px] '>
                                    <img loading="lazy" className='object-fit w-full h-full' src='../../img/footer/footerLogo.svg' alt='footerImg' />
                                </div>
                            </div>
                            <p className='font-krub font-medium text-lapFooterBody leading-[18.18px] text-center lg:text-start sm:w-[400px] lg:w-[300px]'>
                                Cutech Solutions: Empowering B2B Enterprises with Next-Level IT Solutions
                            </p>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center flex-row justify-center lg:justify-start gap-2'>
                                    <a className='sm:w-[47px] h-[47px]' href='mailto:info@cutechsolutions.co.uk' target='_blank'>
                                        <img loading="lazy" src='../../img/navbar/navLogo2.svg' className='object-cover w-full' />
                                    </a>
                                    <div className='text-mobContactBody sm:text-lapContactBody'>
                                        <p>Email</p>
                                        <a href='mailto:info@cutechsolutions.co.uk' target='_blank'>info@cutechsolutions.co.uk</a>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mr-10 lg:mr-0 lg:justify-start flex-row gap-2'>
                                    <a className='w-[47px] h-[47px]' href=' tel:+447424352181'>
                                        <img loading="lazy" src='../../img/navbar/navLogo3.svg' className='object-cover w-full' />
                                    </a>
                                    <div className='text-mobContactBody sm:text-lapContactBody'>
                                        <p>Call us</p>
                                        <a href='tel:+447424352181'>{" "} +44 7424 352181</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SECOND */}
                        <div className='flex flex-col w-full lg:w-auto gap-4 text-center'>
                            <h3 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20'>Pages</h3>
                            <ul className='flex flex-col text-mobFooterLinks sm:text-tabFooterLinks lg:text-lapFooterLinks justify-center font-medium items-center gap-4'>
                                {
                                    [{ route: "Home", path: '/home' }, { route: "About Us", path: '/about-us' }, { route: "Blog", path: '/blog' }, { route: "Services", path: '/services' }, { route: "Contact", path: '/contact-us' }].map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center transition-all duration-300 ease-in-out'><Link to={item.path}>{item.route}</Link></li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        {/* THIRD */}
                        <div className='flex flex-col w-full lg:w-auto gap-4 text-center'>
                            <h3 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20'>
                                Utility
                            </h3>
                            <ul className='flex flex-col text-mobFooterLinks sm:text-lapFooterLinks lg:text-lapFooterLinks justify-center font-medium items-center gap-4'>
                                {
                                    [{ route: "Terms and Condition", path: '/terms-condition' }, { route: "Disclaimer", path: '/disclaimer' }, { route: "Privacy Policy", path: '/privacy-policy' }, { route: "Refund Policy", path: '/refund-policy' }].map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center transition-all duration-300 ease-in-out'><Link to={item.path}>{item.route}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {/* FOURTH */}
                        <div className='flex flex-col gap-4 w-full xl:w-auto text-center'>
                            <h3 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20 xl:px-0'>
                                Subscribe
                            </h3>
                            <div className='flex justify-center flex-col gap-4 sm:justify-start font-bold'>
                                <div className=''>
                                    <input
                                        required
                                        className='text-center w-[240px] sm:text-start h-10 border-[#4E5683] border-2 py-6 px-4 sm:px-8 text-md 2xl:text-[18px] font-bold leading-6 bg-transparent outline-none' placeholder='Email here' />
                                </div>
                                <div className='flex flex-col xl:flex-row items-center justify-center '>
                                    <button className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[108px] h-[34px] sm:w-[146px] sm:h-[45px]'>
                                        Send Now
                                        <div className='w-[40px] h-[40px] absolute -bottom-4 -right-4 rounded-full bg-white'></div>
                                    </button>
                                    {/* <span className='xl:ml-4 mt-4 xl:mt-0 block '>
                                        {socialIcon.map((item, index) => <span className='hover:-translate-y-1 transition-all duration-240 px-0.5 ease-out' key={index}>{item.icon}</span>)}
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='w-full mx-auto flex bg-darkBlue text-white '>
                <div className=' px-2 mx-auto w-full sm:w-12/12 flex justify-between border-t-2 border-[#4E5683] '>
                    <div className='py-2 text-mobFooterLinks text-center w-full '>
                        Copyright &copy; 2024 Cutech Solutions
                    </div>
                </div>
            </div>
        </>

    )
}


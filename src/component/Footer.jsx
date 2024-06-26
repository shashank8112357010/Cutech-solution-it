import React from 'react'
import { Link } from 'react-router-dom'
import { socialIcon } from '../data/dataSet'

export const Footer = () => {
    return (
        <>
            <footer className='max-w-xxl relative bg-darkBlue mx-auto pb-12 xl:px-20 text-white'>
                <div className='absolute bg-darkBlue lg:bg-[#1d2551] w-full top-0 left-0 h-[70px] z-0'></div>
                <div className='outerDiv'>
                    <div className='innerDiv md:px-0 flex flex-row justify-center flex-wrap gap-8 xl:gap-0'>
                        <div className='flex flex-col gap-4'>
                            <div className='py-4 px-20 z-10 bg-darkBlue'>
                                <Link to="/" className='sm:w-[26px] h-[5px] '>
                                    <img className='object-fit w-[200px] h-full' src='../../img/footer/footerLogo.webp' alt='cutech logo' />
                                </Link>
                            </div>
                            <p className='font-krub font-medium text-lapFooterBody leading-[18.18px] text-center lg:text-start sm:w-[400px] lg:w-[300px] px-4 sm:px-0'>
                                Cutech Solutions: Empowering B2B Enterprises with Next-Level IT Solutions
                            </p>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center flex-row justify-center lg:justify-start gap-2'>
                                    <a className='w-[47px] h-[47px]' href='mailto:info@cutechsolutions.co.uk' target='_blank'>
                                        <img src='/img/navbar/navLogo2.webp' className='object-cover w-full' alt='cutech logo' />
                                    </a>
                                    <div className='text-mobContactBody sm:text-lapContactBody'>
                                        <p>Email</p>
                                        <a href='mailto:info@cutechsolutions.co.uk' target='_blank'>info@cutechsolutions.co.uk</a>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mr-10 lg:mr-0 lg:justify-start flex-row gap-2'>
                                    <a className='w-[47px] h-[47px]' href=' tel:+447424352181'>
                                        <img src='../../img/navbar/navLogo3.webp' className='object-cover w-full' alt='cutech logo' />
                                    </a>
                                    <div className='text-mobContactBody sm:text-lapContactBody'>
                                        <p>Call us</p>
                                        <a href='tel:+447424352181'>{" "} +44 7424 352181</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col w-full lg:w-auto gap-4 text-center'>
                            <h4 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20'>
                                Pages
                            </h4>
                            <ul className='flex flex-col text-mobFooterLinks sm:text-tabFooterLinks lg:text-lapFooterLinks justify-center font-medium items-center gap-4'>
                                {
                                    [{ route: "Home", path: '/' }, { route: "About Us", path: '/about-us' }, { route: "Blog", path: '/blog' }, { route: "Services", path: '/services' }, { route: "Contact", path: '/contact-us' }].map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center transition-all duration-300 ease-in-out'>
                                                <Link to={item.path}>
                                                    <h5>  {item.route}</h5>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>

                        <div className='flex flex-col w-full lg:w-auto gap-4 text-center'>
                            <h4 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20'>
                                Utility
                            </h4>
                            <ul className='flex flex-col text-mobFooterLinks sm:text-lapFooterLinks lg:text-lapFooterLinks justify-center font-medium items-center gap-4'>
                                {
                                    [{ route: "Terms and Condition", path: '/terms-condition' }, { route: "Disclaimer", path: '/disclaimer' }, { route: "Privacy Policy", path: '/privacy-policy' }, { route: "Refund Policy", path: '/refund-policy' }].map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center transition-all duration-300 ease-in-out'>
                                                <Link to={item.path}>
                                                    <h5>  {item.route}</h5>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className='flex flex-col gap-4 w-full xl:w-auto text-center'>
                            <h4 className='text-mobFooterTitle z-10 sm:text-lapFooterTitle font-rubik bg-[#1d2551] py-5 px-20 xl:px-0'>
                                Subscribe
                            </h4>
                            <div className='flex justify-center flex-col gap-4 sm:justify-start font-bold'>
                                <div className=''>
                                    <input
                                        required
                                        className='text-center w-[240px] sm:text-start h-10 border-[#4E5683] border-2 py-6 px-4 sm:px-8 text-md 2xl:text-[18px] font-bold leading-6 bg-transparent outline-none' placeholder='Email here' />
                                </div>
                                <div className='flex flex-col xl:flex-row items-center justify-center '>
                                    <button className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[70px] h-[34px] sm:w-[136px] sm:h-[45px]'>
                                        Send Now
                                    </button>
                                    <span className='xl:ml-4 mt-4 xl:mt-0 gap-2 items-center flex  '>
                                        {socialIcon.map((item, index) => (
                                            <a href={item.path} target="_blank" rel="noopener noreferrer" key={index}>
                                                <img src={item.icon} className='hover:-translate-y-1 transition-all duration-240 px-0.5 ease-out w-[20px] h-[15px]' alt={item.path} />
                                            </a>
                                        ))}
                                    </span>
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


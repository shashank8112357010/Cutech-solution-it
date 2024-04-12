import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../index.css"
import { Home } from "../pages/Home";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Services } from "../pages/Services";
import { Contact } from "../pages/Contact";
import { TermsAndPolicy } from "../pages/TermsAndPolicy";
import { Disclaimer } from "../pages/Disclaimer";
import { Privacy } from "../pages/Privacy";
import { RefundPolicy } from "../pages/RefundPolicy";
import { DetailBlog1 } from "../pages/DetailBlog1";
import { DetailService1 } from "../pages/DetailService1";
import { DetailService4 } from "../pages/DetailService4";
import { DetailService3 } from "../pages/DetailService3";
import { DetailService2 } from "../pages/DetailService2";
import { NoPageFound } from "./NoPageFound";
import { socialIcon } from "../data/dataSet";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


export const Router = () => {
    const { pathname } = useLocation();
    const tawkMessengerRef = useRef();

    useEffect(() => {
        const currentPage = pageData.find(page => page.path === pathname)
        document.title = currentPage.metaTitle
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [pathname]);


    return (
        <>
            <Navbar />
            <div className="relative">
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/terms-condition" element={<TermsAndPolicy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/elevate-your-business-with-expert-b2b-it-support" element={<DetailBlog1 />} />

                    <Route path="/cyber-security-services" element={<DetailService1 />} />
                    <Route path="/digital-marketing-company" element={<DetailService2 />} />
                    <Route path="/cloud-managed-services" element={<DetailService3 />} />
                    <Route path="/remote-technical-support-services" element={<DetailService4 />} />

                    <Route path="*" element={<NoPageFound />} />
                </Routes>



                <div className='z-40 fixed top-[30%] right-[0px] rounded-tl-lg rounded-bl-lg px-2 rounded-tr-none rounded-br-none'>
                    <div className='relative h-[206px] flex flex-col justify-end'>
                        <Link to="contact-us" className=' -rotate-90 absolute font-semibold text-[15px] bg-darkBlue text-darkYellow rounded-tr-lg top-0 h-[109px] w-28 px-4 pt-2 cursor-pointer '>
                            Contact us
                        </Link>
                        <div className='flex flex-col w-[36px] pb-0 justify-center items-center py-4 '>
                            {socialIcon.map((item, index) => (
                                <div className="bg-darkBlue w-[42px] h-[24px] gap-4 flex justify-center items-center ml-[9px]">
                                    <a href={item.path} target="_blank" rel="noopener noreferrer" key={index}>
                                        <img src={item.icon} className='hover:-translate-y-1 w-[20px] h-[15px] transition-all duration-240 px-0.5 ease-out hover:-translate-x-1  rounded-tr-lg  duration-240' alt={index} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TawkMessengerReact
                ref={tawkMessengerRef}
                propertyId="65f5385ecc1376635adb4051"
                widgetId="1hp2u8db4" />
            <Footer />
        </>
    );
};




const pageData = [
    {
        path: '/',
        metaTitle: 'Boost Your Business with Reliable B2B IT Support Service',
    },
    {
        path: '/about-us',
        metaTitle: 'Discover Our Story | Cutech Solutions About Us',

    },
    {
        path: '/blog',
        metaTitle: 'Cutech Solutions Blog: Stay Updated',

    },
    {
        path: '/contact-us',
        metaTitle: 'Contact Page',

    },
    {
        path: '/disclaimer',
        metaTitle: 'Disclaimer',

    },
    {
        path: '/terms-condition',
        metaTitle: 'Terms of Service',

    },
    {
        path: '/refund-policy',
        metaTitle: 'Refund Policy',

    },
    {
        path: '/privacy-policy',
        metaTitle: 'Privacy Policy',

    },
    {
        path: '/services',
        metaTitle: 'Cutech Solution Services',

    },
    {
        path: '/elevate-your-business-with-expert-b2b-it-support',
        metaTitle: 'Elevate Your Business With Expert B2B-IT-Support',

    },
    {
        path: '/remote-technical-support-services',
        metaTitle: 'Expert UK Remote Technical Support Services Cutech Solutions',
    },
    {
        path: '/digital-marketing-company',
        metaTitle: 'Top Digital Marketing Services in UK | SEO Service UK',
    },
    {
        path: '/cyber-security-services',
        metaTitle: 'Cyber Security Services',
    },
    {
        path: '/cloud-managed-services',
        metaTitle: 'Enhance Efficiency with Cloud Managed Services',
    },
];
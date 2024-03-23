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
import { HomeSocialIcon } from "../data/dataSet";
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
                    <Route path="/cyber-security-service" element={<DetailService1 />} />
                    <Route path="/digital-marketing-company" element={<DetailService2 />} />
                    <Route path="/cloud-managed-services" element={<DetailService3 />} />
                    <Route path="/remote-technical-support-services" element={<DetailService4 />} />
                    <Route path="*" element={<NoPageFound />} />
                </Routes>

                <div className='z-50 fixed top-[29%] right-0 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none'>
                    <div className=' relative h-[210px] flex flex-col justify-end'>
                        <Link to="contact-us" className=' -rotate-90 absolute font-semibold text-[14px] bg-darkBlue text-darkYellow rounded-tr-lg top-0 h-[109px] w-28 px-4 pt-2 cursor-pointer '>
                            Contact us
                        </Link>
                        <div className='flex flex-col w-[36px] pb-0'>
                            {HomeSocialIcon.map((item, index) => <span className='hover:-translate-x-1 h-[33px] rounded-tr-lg transition-all duration-240 px-0.5 ease-out' key={index}>
                                {item.icon}
                            </span>)}
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
        metaDescription: "Elevate your company's tech game with top-notch B2B IT support services. Streamline operations & enhance productivity today",
        canonicalUrl: 'https://cutechsolutions.co.uk',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"
    },
    {
        path: '/about-us',
        metaTitle: 'Discover Our Story | Cutech Solutions About Us',
        canonicalUrl: 'https://cutechsolutions.co.uk/about-us',
        metaDescription: 'Explore the journey of Cutech Solutions. Learn about our overview, our mission, and core values. Get to know us better.',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/blog',
        metaTitle: 'Cutech Solutions Blog: Stay Updated',
        metaDescription: "Explore the latest trends and insights in technology with Cutech Solutions' informative blog posts.",
        canonicalUrl: 'https://cutechsolutions.co.uk/blog',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/contact-us',
        metaTitle: 'Contact Page',
        metaDescription: 'Welcome to Cutech Solutions, your trusted B2B IT support solution in UK and globally. Contact us for 24/7 IT helpdesk support & tailored solutions.',
        canonicalUrl: 'https://cutechsolutions.co.uk/contact',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/disclaimer',
        metaTitle: 'Disclaimer',
        metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
        canonicalUrl: 'https://cutechsolutions.co.uk/disclaimer',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/terms-condition',
        metaTitle: 'Terms of Service',
        metaDescription: "Review our comprehensive terms and condition for Cutech Solutions. Learn about our commitments, usage policies, and legal agreements.",
        canonicalUrl: 'https://cutechsolutions.co.uk/terms-condition',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/refund-policy',
        metaTitle: 'Refund Policy',
        metaDescription: "Explore Cutech Solutions' Refund Policy: Clear guidelines ensuring customer satisfaction & transparency in all transactions. Your trust, our priority.",
        canonicalUrl: 'https://cutechsolutions.co.uk/refund-policy',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/privacy-policy',
        metaTitle: 'Privacy Policy',
        metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
        canonicalUrl: 'https://cutechsolutions.co.uk/privacy-policy',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/services',
        metaTitle: 'Cutech Solution Services',
        metaDescription: "Discover how our services can elevate your business. From B2B IT support services to digital marketing solutions, we've got you covered. Explore now",
        canonicalUrl: 'https://cutechsolutions.co.uk/services',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/elevate-your-business-with-expert-b2b-it-support',
        metaTitle: 'Elevate Your Business With Expert B2B-IT-Support',
        metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
        canonicalUrl: 'https://cutechsolutions.co.uk/elevate-your-business-with-expert-b2b-it-support',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/remote-technical-support-services',
        metaTitle: 'Expert UK Remote Technical Support Services Cutech Solutions',
        metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
        metaKeywords: "Remote Technical Support Services in UK, Remote Technical Support in UK, Technical Support Services in UK, IT Helpdesk Service in UK, On-Call 24x7 Technical Support in UK, IT Helpdesk Support in UK, IT Managed Service Providers in UK, Technical Support in UK",
        canonicalUrl: 'https://cutechsolutions.co.uk/remote-technical-support-services'
    },
    {
        path: '/digital-marketing-company',
        metaTitle: 'Top Digital Marketing Services in UK | SEO Service UK',
        metaDescription: "Unlock growth opportunities with our expert digital marketing services in UK. Trusted strategies tailored for your success.",
        canonicalUrl: 'https://cutechsolutions.co.uk/digital-marketing-company',
        metaKeywords: "Digital Marketing Services in UK, SEO Service UK, Digital Marketing Company in UK, Digital Marketing Service Provider, Digital Marketing Service Provider in UK, digital marketing experts, digital marketing services UK, Search Engine Optimization, Pay-Per-Click, Social Media Marketing, Digital Marketing Companies in UK, Digital Marketing Solutions",
    },
    {
        path: '/cyber-security-service',
        metaTitle: 'Cyber Security Service',
        metaDescription: "Don't leave your business vulnerable to cyber attacks. Explore our cyber security services and fortify your defenses today.",
        canonicalUrl: 'https://cutechsolutions.co.uk/cyber-security-service',
        metaKeywords: "Cyber Security Service, Cyber Security Service Providers in UK, Computer Cyber Security Service Solutions, Computer Cyber Security Service Providers in UK, Cyber Security Service in UK, Best Cyber Security Service in UK, Top Cyber Security Service in UK",
    },
    {
        path: '/cloud-managed-services',
        metaTitle: 'Enhance Efficiency with Cloud Managed Services',
        metaDescription: "Discover cloud managed services in UK to optimize operations. Our experts ensure seamless integration & efficiency for your business needs.",
        canonicalUrl: 'https://cutechsolutions.co.uk/cloud-managed-services',
        metaKeywords: "Cloud Managed Services, Cloud Managed Services in UK, Cloud Service Management in UK, Cloud Service Management Provider, Cloud Managed Services the UK, Best Cloud Based Managed Services, Managed Cloud Services, Managed Cloud Services Providers, Cloud Server Management Solution",
    },
];
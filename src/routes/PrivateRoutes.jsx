import { Routes, Route, Link } from "react-router-dom";
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
// import { HomeSocialIcon } from "../data/dataSet";

export const Router = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <Routes>
                    <Route path="/home" element={<Home />} />
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

                {/* <div className='z-50 fixed top-[30%] right-0 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none'>
                    <div className=' relative h-[210px] flex flex-col justify-end'>
                        <Link to="contact-us" className=' -rotate-90 absolute font-semibold text-[14px] bg-darkBlue text-darkYellow rounded-tr-lg top-0 h-[109px] w-28 px-4 pt-2 cursor-pointer '>
                            ~Contact us
                        </Link>
                        <div className='flex flex-col w-[36px] pb-0'>
                            {HomeSocialIcon.map((item, index) => <span className='hover:-translate-x-1 h-[33px] rounded-tr-lg transition-all duration-240 px-0.5 ease-out' key={index}>
                                {item.icon}
                            </span>)}
                        </div>
                    </div>
                </div>  */}
            </div>
            <Footer />
        </>
    );
};

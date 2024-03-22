import { Routes, Route } from "react-router-dom";
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
import { DetailService4 } from "../pages/DetailService4";
import { DetailService3 } from "../pages/DetailService3";
import { DetailService2 } from "../pages/DetailService2";
import { NoPageFound } from "./NoPageFound";

export const Router = () => {
    return (
        <>
            <Navbar />
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
                {/* <Route path="/elevate-your-business-with-expert-b2b-it-support" element={<DetailBlog1 />} /> */}
                {/* <Route path="/cyber-security-service" element={<DetailService1 />} /> */}
                <Route path="/digital-marketing-company" element={<DetailService2 />} />
                <Route path="/cloud-managed-services" element={<DetailService3 />} />
                <Route path="/remote-technical-support-services" element={<DetailService4 />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>
            <Footer />
        </>
    );
};

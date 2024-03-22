import { Routes, Route } from "react-router-dom";
import "../index.css"
import { Home } from "../pages/Home";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";


export const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
        </>
    );
};


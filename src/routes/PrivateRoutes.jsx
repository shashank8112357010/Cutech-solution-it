import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../component/Navbar";
import "../index.css"
import { Footer } from "../component/Footer";
// import { About } from "../pages/About";


export const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about-us" element={<About />} /> */}
            </Routes>
            <Footer />
        </>
    );
};


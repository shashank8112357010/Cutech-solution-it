import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
// import Other  from "../pages/Other";
import { Navbar } from "../component/Navbar";
import "../index.css"
export const Router = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/other" element={<Other />} /> */}
        </Routes>
        </>
    );
};


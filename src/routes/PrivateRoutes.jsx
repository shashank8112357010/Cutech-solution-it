import { Routes, Route } from "react-router-dom";

import  {Home}  from "../pages/Home";
// import Other  from "../pages/Other";
import "../index.css"
import { Navbar } from "../component/Navbar";
export const Router = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/other" element={<Other />} /> */}
        </Routes>
        </>
    );
};


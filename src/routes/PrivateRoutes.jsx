import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
// import Other  from "../pages/Other";
import "../index.css"
export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/other" element={<Other />} /> */}
        </Routes>
    );
};


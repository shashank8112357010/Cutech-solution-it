import React, { Suspense, lazy, useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { HomeSocialIcon } from '../data/dataSet'

// Lazy-loaded components
const LazyComponents = {
    Home: lazy(() => import("../pages/Home")),
    About: lazy(() => import("../pages/About")),
    Blog: lazy(() => import("../pages/Blog")),
    Services: lazy(() => import("../pages/Services")),
    DetailService1: lazy(() => import("../pages/DetailService1")),
    DetailService2: lazy(() => import("../pages/DetailService2")),
    DetailService3: lazy(() => import("../pages/DetailService3")),
    DetailService4: lazy(() => import("../pages/DetailService4")),
    Contact: lazy(() => import("../pages/Contact")),
    Privacy: lazy(() => import('../pages/Privacy')),
    Disclaimer: lazy(() => import('../pages/Disclaimer')),
    TermsAndPolicy: lazy(() => import('../pages/TermsAndPolicy')),
    NoPageFound: lazy(() => import("./NoPageFound")),
    DetailBlog1: lazy(() => import("../pages/DetailBlog1")),
    RefundPolicy: lazy(() => import("../pages/RefundPolicy")),
}

const routes = [
    { path: "/", component: LazyComponents.Home },
    { path: "/about-us", component: LazyComponents.About },
    { path: "/blog", component: LazyComponents.Blog },
    { path: "/services", component: LazyComponents.Services },
    { path: "/contact-us", component: LazyComponents.Contact },
    { path: '/privacy-policy', component: LazyComponents.Privacy },
    { path: '/disclaimer', component: LazyComponents.Disclaimer },
    { path: '/terms-condition', component: LazyComponents.TermsAndPolicy },
    { path: '/refund-policy', component: LazyComponents.RefundPolicy },
    { path: '/remote-technical-support-services', component: LazyComponents.DetailService4 },
    { path: '/elevate-your-business-with-expert-b2b-it-support', component: LazyComponents.DetailBlog1 },
    { path: '/cyber-security-service', component: LazyComponents.DetailService1 },
    { path: '/digital-marketing-company', component: LazyComponents.DetailService2 },
    { path: '/cloud-managed-services', component: LazyComponents.DetailService3 },
    { path: "*", component: LazyComponents.NoPageFound }
]

const PrivateRoutes = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [pathname])

    return (
        <Suspense fallback={
            <div className='h-[500px] flex justify-center items-center'>
                <div className='loader'></div>
            </div>
        }>
            <div className='relative'>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component />} />
                    ))}
                </Routes>

                <div className='z-50 fixed top-[30%] right-0 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none'>
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
        </Suspense>
    )
}

export default PrivateRoutes

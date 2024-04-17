import React from 'react'
import { GetInTouchContact } from '../component/contact/GetInTouchContact'
import { FaqContact } from '../component/contact/FaqContact'
import { BannerAtom } from '../atom/BannerAtom'

export const Contact = () => {
    const data = [
        {
            id: 0,
            doubt: "On Call 24x7 Technical Support",
            solution: "At Cutech Solutions, we understand the importance of having reliable technical support available whenever you need it. That's why we offer 24x7 on-call technical support to ensure that your business operations run smoothly without any interruptions. Whether it's a critical system issue in the middle of the night or a minor glitch during office hours, our dedicated team of experts is always available to assist you, providing prompt and efficient solutions to keep your business running smoothly."
        },
        {
            id: 1,
            doubt: "One-Stop Solution for IT Services",
            solution: "Cutech Solutions serves as your one-stop destination for all your IT service needs. From technical support and maintenance to cloud service management, website support, and digital marketing, we offer a comprehensive suite of services tailored specifically for businesses. By consolidating your IT services with Cutech Solutions, you can streamline operations, reduce costs, and simplify vendor management, saving you time and resources."
        },
        {
            id: 2,
            doubt: "Website Support Service in UK",
            solution: "Our website support service in the UK is designed to ensure that your website remains secure, up-to-date, and optimized for performance. Whether you need assistance with website maintenance, troubleshooting technical issues, or implementing new features, our team of experts is here to help. We provide proactive monitoring, regular backups, and ongoing support to keep your website running smoothly and efficiently."
        },
        {
            id: 3,
            doubt: "UK Cloud Service Management",
            solution: "Cutech Solutions offers comprehensive cloud service management solutions tailored specifically for businesses in the UK. From cloud migration and deployment to ongoing management and optimization, we help you harness the power of the cloud to streamline operations, enhance collaboration, and drive innovation. Our experienced team of cloud experts ensures that your cloud infrastructure is secure, scalable, and cost-effective, enabling you to focus on growing your business."
        },
        {
            id: 4,
            doubt: "Pay-Per-Click Service in UK",
            solution: "Our pay-per-click (PPC) service in the UK is designed to help businesses drive targeted traffic to their websites and generate leads. We offer customized PPC campaigns tailored to your specific goals and budget, utilizing advanced targeting techniques and optimization strategies to maximize your ROI. Whether you're looking to increase brand awareness, boost sales, or drive conversions, our PPC experts can help you achieve your objectives effectively and efficiently."
        },
        {
            id: 5,
            doubt: "Best SEO Company in London",
            solution: "Cutech Solutions is recognized as one of the best SEO companies in London, delivering top-notch SEO services to businesses of all sizes and industries. Our experienced SEO team employs cutting-edge techniques and best practices to improve your website's visibility, drive organic traffic, and enhance your online presence. From keyword research and on-page optimization to link building and content creation, we have the expertise and resources to help you climb the search engine rankings and achieve sustainable growth."
        },
        {
            id: 6,
            doubt: "Digital Marketing Expert in UK",
            solution: "As a leading digital marketing expert in the UK, Cutech Solutions specializes in helping businesses leverage the power of digital channels to reach their target audience and achieve their marketing goals. From social media marketing and email campaigns to content marketing and influencer partnerships, we offer a full suite of digital marketing services tailored to your unique needs and objectives. Our team of experts stays ahead of the curve with the latest trends and strategies, ensuring that your digital marketing efforts yield maximum results."
        },
        {
            id: 7,
            doubt: "Digital Marketing Service in UK",
            solution: "Cutech Solutions provides comprehensive digital marketing services in the UK, helping businesses of all sizes and industries establish a strong online presence and drive meaningful engagement with their target audience. Whether you need assistance with social media management, search engine optimization, or online advertising, our team of digital marketing experts is here to help. We develop customized strategies tailored to your specific goals and objectives, delivering measurable results that fuel business growth."
        },
        {
            id: 8,
            doubt: "Top IT Managed Service Providers in London",
            solution: "Cutech Solutions is proud to be recognized as one of the top IT managed service providers in London, offering comprehensive IT solutions to businesses across various industries. Our managed services encompass everything from technical support and network management to cybersecurity and cloud computing. With our proactive approach and personalized service, we help businesses optimize their IT infrastructure, minimize downtime, and maximize productivity."
        },
        {
            id: 9,
            doubt: "Best Technical Support in UK",
            solution: "When it comes to technical support, Cutech Solutions is your trusted partner for reliable, efficient, and responsive service. Our team of technical experts is dedicated to providing the best technical support in the UK, addressing your IT issues promptly and effectively. Whether you need assistance with hardware troubleshooting, software installation, or network configuration, we're here to help you resolve your technical challenges and keep your business running smoothly."
        },
        {
            id: 10,
            doubt: "IT Helpdesk Support in UK",
            solution: "Cutech Solutions offers comprehensive IT helpdesk support services in the UK, providing businesses with a single point of contact for all their IT-related issues and inquiries. Our dedicated helpdesk team is available round-the-clock to assist you with troubleshooting technical issues, answering questions, and providing guidance on IT-related matters. With our responsive and knowledgeable support staff, you can rest assured that your IT needs are in good hands."
        },
        {
            id: 11,
            doubt: "Remote Technical Support in UK",
            solution: "In today's digital age, remote technical support has become more important than ever. Cutech Solutions offers remote technical support services in the UK, allowing businesses to access expert assistance from anywhere, at any time. Whether you're experiencing a technical issue that requires immediate attention or you need help with software installation or configuration, our team of remote support specialists is just a phone call or email away, ready to provide prompt and efficient solutions to keep your business running smoothly."
        },

    ]
    return (
        <section className='max-w-[1920px] mx-auto'>
            <BannerAtom srcImg="/img/Contact/ContactBanner.webp" title="Contact Us" heading="Contact Us" />
            <GetInTouchContact />
            <FaqContact data={data} />
        </section>
    )
}


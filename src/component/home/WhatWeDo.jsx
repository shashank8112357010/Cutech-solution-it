import React, { useState } from 'react'
import CardModal from '../modal/CardModal';
import { Link } from 'react-router-dom';


const cardData = [
    {
        id: 0,
        imgPic: "/img/home/whatWeDo1.png",
        link: "cloud-managed-services",
        heading: "Cutech Cloud Service Management Solutions",
        para: "Cloud computing revolutionizes business operations by offering unmatched flexibility, scalability, and cost-effectiveness. At Cutech Solutions, we excel in delivering tailored cloud solutions to meet your specific needs. Our expertise encompasses <strong> cloud managed services in UK </strong> and <strong> cloud service management in UK </strong>. Whether you require assistance with cloud migration, infrastructure management, or optimizing performance and cost efficiency, we possess the knowledge and experience to propel your success in the cloud."
    },
    {
        id: 1,
        imgPic: "/img/home/whatWeDo2.png",
        heading: "Computer Cyber Security Service Solutions",
        link: "cyber-security-service",
        para: "In today's digital age,<strong> Cyber Security Service Solutions </strong> are paramount for businesses, regardless of their size.. At Cutech Solutions, one of the  leading <strong> computer cyber security service providers in UK </strong>, we offer a comprehensive range of cybersecurity solutions. Our services aim to safeguard your valuable data and assets from cyber threats. From implementing robust security measures to conducting regular vulnerability assessments and security audits, we are dedicated to ensuring the safety and security of your business."
    },
    {
        id: 2,
        imgPic: "/img/home/whatWeDo3.png",
        heading: "Digital Marketing Solutions",
        link: "digital-marketing-company",
        para: "Discover the ultimate digital marketing solution process with Cutech Solutions. As the <strong> best SEO company in London </strong>, we excel in delivering comprehensive solutions tailored to elevate your online presence. Our team of <strong> digital marketing experts in UK </strong> ensures unparalleled strategies to boost your brand visibility and drive measurable results. Unlock success today!"
    },
    {
        id: 3,
        imgPic: "/img/home/whatWeDo4.png",
        heading: "Remote Technical Support and Maintenance",
        link: "remote-technical-support-services",
        para: "Our <strong> remote technical support services </strong>, including remote virtual assistant, are meticulously crafted to maintain the seamless operation of your business. We adeptly handle hardware and software troubleshooting, guaranteeing the utmost efficiency of your IT infrastructure. Our dedicated team stands ready to deliver swift and dependable assistance whenever required. Prioritizing tasks based on their criticality, we ensure that urgent matters are promptly resolved to mitigate any potential downtime or disruption. Experience the <strong> best technical support in UK </strong> with us.."
    },
]

const renderTextWithBold = (text) => {
    return text.split('<strong>').map((part, index) => {
        if (index === 0) {
            return part;
        }
        const [boldText, rest] = part.split('</strong>');
        return (
            <React.Fragment key={index}>
                <strong>{boldText}</strong>
                {rest}
            </React.Fragment>
        );
    });
};


export const WhatWeDo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({})

    const handleModalOpen = (item) => {
        setModalData(item)
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    return (
        <section className='max-w-[1920px] mx-auto'>
            <div className='px-8 sm:px-20 md:px-40 lg:px-20 sm:py-12 flex flex-col lg:flex-row  w-full justify-center mx-auto gap-8 mb-16'>
                <div className='leftBox w-full xl:w-3/12 lg:px-20 2xl:px-0'>
                    <p className="text-lapContactBody mb-2 font-rubik bg-white/10 border-l-4 pl-2 border-yellow-500 font-normal ">
                        What We Do
                    </p>
                    <h2 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold leading-[23px] sm:leading-[36.81px]">
                        Core Services Offered
                    </h2>
                </div>

                <div className='justify-center rightBox max-w-4xl flex flex-row flex-wrap gap-8 sm:gap-12 lg:gap-4 xl:justify-end'>
                    {
                        cardData?.map((item) => {
                            return (
                                <div key={item.id} className='w-[400px] lg:basis-[380px] 2xl:basis-[400px] flex flex-row justify-between items-center sm:items-start'>
                                    <div className='w-[41px] sm:w-[60px] h-[40px] sm:h-[60px]'>
                                        <img src={item.imgPic} alt={item.id} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-4/5 border-2  border-l-[#D8D8D8] pl-4 border-y-white border-r-white'>
                                        <h3 className='font-rubik text-mobHeading1 sm:text-tabHeading1 leading-[14px] sm:leading-[29px]'>
                                            <Link to={item.link}>
                                                {item.heading}
                                            </Link>
                                        </h3>
                                        <p className='mt-2 font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-textgray font-medium leading-[18px] sm:leading-[24px]'>
                                            {renderTextWithBold(item.para.split(" ").slice(0, 10).join(" "))}
                                            <span className='text-darkYellow cursor-pointer' onClick={() => handleModalOpen(item)}>
                                                &nbsp; Read more.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <CardModal open={isModalOpen} handleClose={handleModalClose} data={modalData} />


                </div>
            </div>

        </section>
    )
}


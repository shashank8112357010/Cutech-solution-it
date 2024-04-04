import React, { useState } from 'react'
import CardModal from '../modal/CardModal'

export const ComputerSolutions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({})

    const handleModalOpen = (item) => {
        setModalData(item)
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const data = [
        {
            id: 0,
            img: "1",
            heading: "IT Infrastructure Management",
            para: `Efficiently managing your IT infrastructure, encompassing servers, networks, and workstations. We diligently monitor, maintain, and optimize to uphold peak performance and reliability.
            Our scalable solutions are customized to suit your business's scale, industry, and specific needs. As <strong> experienced IT Managed Service Providers </strong>, we ensure seamless operation.`
        },
        {
            id: 1,
            img: "2",
            heading: "Robust Network Security Solutions",
            para: `Ensure your business is shielded from cyber threats with <strong> robust network security solutions. </strong> Our comprehensive services include advanced firewall protection, intrusion detection, and threat intelligence to defend against malware, ransomware, and phishing attacks. Trust in our regular security audits and vulnerability assessments to pinpoint and neutralize potential risks to your data and assets. We are among the <strong> leading computer cyber security services providers in UK </strong>, dedicated to safeguarding your digital environment`
        },
        {
            id: 2,
            img: "3",
            heading: "Top-Notch Cloud Management Services",
            para: " Experience tailored cloud computing solutions designed to streamline operations, foster collaboration, and ignite innovation. Seamlessly transition to cloud-based platforms, whether public, private, or hybrid, to unlock scalability, flexibility, and cost-efficiency. Benefit from continuous management, monitoring, and optimization of your cloud infrastructure to ensure peak performance and resource efficiency. As a  <strong> trusted cloud managed service provider </strong>, we specialize in delivering <strong> top-notch cloud management services </strong> tailored to your needs."
        },
        {
            id: 3,
            img: "4",
            heading: "IT Data Disaster Recovery Solutions",
            para: `Safeguard your business-critical data with comprehensive data backup and recovery solutions.Implement automated backups, redundant storage, and disaster recovery planning to mitigate downtime and uphold business continuity. Regularly test and validate backup systems to guarantee reliability and efficacy. As a leading provider of <strong> IT disaster recovery solutions for UK businesses </strong>, we specialize in delivering top-notch data backup and disaster recovery services tailored to your needs.`
        },
        {
            id: 4,
            img: "5",
            heading: "Custom Software Development Services",
            para: `Unlock tailored solutions for your business with <strong>custom software development services.</strong> We specialize in crafting bespoke applications, tools, and solutions to optimize workflows, boost efficiency, and foster innovation. Our expertise extends to seamless integration with existing systems and platforms, ensuring smooth operation and compatibility. Explore our custom software development offerings designed specifically for UK businesses.
`
        },
        {
            id: 5,
            img: "6",
            heading: "Expert IT Consulting and Support Services",
            para: `Access <strong> expert IT consulting services </strong> to drive and implement strategic technology initiatives.Receive proactive guidance and recommendations to enhance your IT investments, lower costs, and boost productivity.Count on our responsive technical support and troubleshooting to swiftly resolve issues and minimize disruptions to your business. As <strong> leading IT managed service providers in London,</strong> we offer reliable IT helpdesk support in UK.`
        }

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

    return (
        <section className='max-w-[1920px] mx-auto pt-4 sm:pt-12'>
            <div className='px-4 sm:px-20 pt-20 flex flex-col xl:flex-row flex-wrap lg:flex-nowrap w-full mx-auto gap-8 mb-0'>
                <div className='leftBox w-full xl:w-3/12 lg:px-20 xl:px-0'>
                    <p className="text-lapContactBody mb-2 font-rubik bg-white/10 border-l-4 pl-2 border-yellow-500 ">
                        What We Do ...
                    </p>
                    <h2 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold leading-[23px] sm:leading-[41px]">
                        Comprehensive Computer Solutions for
                        <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'> B2B Clients</span>
                    </h2>
                    <p className='font-krub text-mobBody sm:text-tabBody lg:text-lapBody text-textgray font-medium leading-[18px] sm:leading-[24px] mt-4'>
                        When it comes to selecting a partner for your business's IT needs, the choice is crucial. At Cutech Solutions, we understand the importance of making an informed decision, which is why we stand out as the premier choice for businesses seeking reliable, innovative, and <strong> client-focused IT solutions.</strong> Here are some compelling reasons why you should choose Cutech Solutions: <strong> IT Managed Service Providers.</strong>
                    </p>
                </div>

                <div className='rightBox justify-center w-full lg:w-9/12 flex flex-row flex-wrap gap-8 sm:gap-12 lg:gap-y-12 xl:justify-end'>

                    {
                        data.map((item, index) => {
                            return (
                                <div key={item.id} className='basis-[300px] grow w-[400px] flex flex-row justify-between items-center sm:items-start'>
                                    <div className='w-[41px] sm:w-[60px] h-[40px] sm:h-[60px]'>
                                        <img loading="lazy" src={`/img/home/ComputerSol${item.img}.png`} alt='whatwedoIcon' className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-4/5 border-2 border-l-[#D8D8D8] pl-4 border-y-white border-r-white'>
                                        <h3 className='font-rubik text-mobHeading1 sm:text-tabHeading1 leading-[14px] sm:leading-[29px]'>
                                            {item.heading}
                                        </h3>
                                        <p className='mt-2 font-krub sm:pr-8 text-mobBody sm:text-tabBody lg:text-lapBody text-textgray font-medium leading-[18px] sm:leading-[24px] transition-all duration-300 ease-in-out'>
                                            {renderTextWithBold(item.para.split(" ").slice(0, 10).join(" "))}
                                            <span className='text-darkYellow cursor-pointer' onClick={() => handleModalOpen(item)}> Read more.</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <CardModal open={isModalOpen} handleClose={handleModalClose} data={modalData} />

        </section>
    )
}


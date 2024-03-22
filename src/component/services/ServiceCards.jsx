import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceCards = () => {

    const aboutCardData = [
        {
            id: 0,
            link: "remote-technical-support-services",
            heading: "Remote Technical Support and Maintenance",
            para1: "Experience uninterrupted productivity with our <strong> remote technical support </strong> and maintenance services. Our skilled technicians ensure swift resolution of issues, keeping your systems running smoothly.",
            heading1: "24/7 assistance for immediate resolution",
            heading2: "Proactive maintenance to prevent future disruptions",
            img: "img/services/AboutCard1.png",
            result: true
        },
        {
            id: 1,
            link: "cyber-security-service",
            heading: "Computer Cyber Security Service Solutions",
            para1: "Protect your digital assets with our advanced <strong> cyber security service solutions </strong>. From threat detection to mitigation, our experts safeguard your systems from evolving cyber threats.",
            heading1: "Cutting-edge solutions tailored to your specific needs",
            heading2: "Regular security updates to fortify your defenses",
            img: "img/services/AboutCard2.png",
            result: false
        },
        {
            id: 2,
            link: "cloud-managed-services",
            heading: "Cloud Service Management Solutions",
            para1: "Optimize your cloud infrastructure with our comprehensive <strong> cloud service management solutions </strong>. From deployment to maintenance, we streamline your cloud operations for enhanced efficiency and scalability.",
            heading1: "Customized strategies to maximize cloud performance",
            heading2: "Continous monitoring for optimal resource utilization",
            img: "img/services/AboutCard3.png",
            result: true
        },
        {
            id: 3,
            link: "digital-marketing-company",
            heading: "Digital Marketing Expert Solutions",
            para1: "Amplify your online presence with our <strong> digital marketing expert solutions </strong>. From SEO to social media management, we craft tailored strategies to elevate your brand and drive meaningful engagement.",
            heading1: "Data-driven approaches for targeted audience reach",
            heading2: "Performance analysis and optimization for growth",
            img: "img/services/AboutCard4.png",
            result: false
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

    return (
        <div className='max-w-[1920px] mx-auto py-4 sm:py-12 pb-16 sm:pb-24 '>
            <div className='flex flex-col gap-16'>
                {
                    aboutCardData.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col px-4 sm:px-20 lg:justify-center'>

                                <div className={` flex item flex-col ${item.result ? "lg:flex-row" : "lg:flex-row-reverse"} lg:justify-between w-full`}>
                                    <div className={`flex flex-col lg:gap-[25px] sm:gap-[25px] gap-[8.9px] w-auto lg:w-1/2 ${!item.result && "md:pl-12"}`}>
                                        <div className='flex flex-col w-full '>
                                            <h2 className='font-rubik font-semibold w-[300px] sm:w-[400px] lg:w-[500px] mt-2 capitalize text-mobTitle sm:text-tabTitle lg:text-lapTitle leading-[23px] sm:leading-[29px] lg:leading-[43px] mb-1'>
                                                {item.heading}
                                            </h2>
                                            <div>
                                                <p className='font-krub  font-medium lg:text-[16px] sm:text-[16px] text-[12px] text-[#666C89] my-2 sm:my-6'>
                                                    {renderTextWithBold(item.para1)}
                                                </p>
                                            </div>

                                            {/* //heading and para start  */}
                                            <div className='w-full flex flex-row items-center gap-2 sm:items-start leading-4 px-4 py-3 pl-2 sm:pl-10 mt-2 border-2 rounded-[20px]'>
                                                <div className='w-4 h-4 rounded-full bg-custom-gradient '>
                                                </div>

                                                <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px]'>
                                                    {item.heading1}
                                                </h3>
                                            </div>
                                            <div className='w-full flex items-center sm:items-start gap-2  px-4 leading-4 py-3 sm:pl-10 mt-2 border-2 rounded-[20px] '>
                                                <div className='w-4 h-4 rounded-full bg-custom-gradient '>
                                                </div>

                                                <h3 className='font-rubik font-bold text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay inline text-mobTitle3 sm:text-tabTitle3 lg:text-lapTitle3 leading-[16px] sm:leading-[16px]'>
                                                    {item.heading2}
                                                </h3>


                                            </div>

                                            <button type="submit" className={`bg-red-500 ${item.result ? "justify-start" : "justify-end"} text-start w-[150px] bg-custom-gradient px-[25px] py-[14px] text-black font-rubik font-normal mt-8`}>
                                                <Link to="/contact-us" className='w-full text-center block'>
                                                    Learn More
                                                </Link>
                                            </button>
                                            {/* //heading and para end  */}
                                        </div>
                                    </div>

                                    {/* Image  */}
                                    <div className='flex justify-end sm:justify-end lg:justify-normal mt-10 lg:mt-0 lg:ml-4'>

                                        <img loading="lazy" src={item.img} alt="" className='w-[90%] h-full object-cover ' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


import React from 'react';
import { Banner } from '../component/home/Banner';
import { Intro } from '../component/home/Intro';
import { WhatWeDo } from '../component/home/WhatWeDo';
import { WhyUs } from '../component/home/WhyUs';
import { ServiceWeOffer } from '../component/home/ServiceWeOffer';
import { Testimonial } from '../component/home/Testimonial';
import { HowWorks } from '../component/home/HowWorks';
import { ComputerSolutions } from '../component/home/ComputerSolutions';
import { HomeBlog } from '../component/home/HomeBlog';
import { GetInTouchContact } from '../component/contact/GetInTouchContact';
import { FaqContact } from '../component/contact/FaqContact';


export const Home = () => {
    const data = [
        {
            id: 0,
            doubt: " What is Remote Technical Support and Maintenance, and how does it benefit businesses?",
            solution: "Remote Technical Support and Maintenance offered by Cutech Solutions involves troubleshooting, diagnosing, and resolving technical issues remotely. This service benefits businesses by providing quick and efficient solutions to IT problems without the need for on-site visits, reducing downtime and costs associated with traditional support methods"
        },
        {
            id: 1,
            doubt: "How does Cutech Solutions ensure robust Computer Cyber Security Service Solutions for its clients?",
            solution: "Cutech Solutions employs advanced cybersecurity measures, including real-time threat detection, intrusion prevention, and data encryption, to safeguard clients' systems and data. Our team of experts continually monitors and updates security protocols to stay ahead of evolving cyber threats, providing comprehensive protection against malware, phishing attacks, and data breaches."
        },
        {
            id: 2,
            doubt: " What are the key advantages of implementing Cloud Service Management Solutions from Cutech Solutions?",
            solution: "Cloud Service Management Solutions offered by Cutech Solutions streamline IT operations, improve scalability, and enhance flexibility for businesses. By migrating to the cloud, organizations can reduce infrastructure costs, increase accessibility to data and applications, and leverage advanced cloud services for enhanced performance and efficiency."
        }
    ];

    return (
        <div className='font-krub'>
            {/* <Banner /> */}
            <Intro />
            <WhatWeDo />
            <WhyUs />
            <ServiceWeOffer />
            <GetInTouchContact />
            <Testimonial />
            <HowWorks />
            <ComputerSolutions />
            <FaqContact data={data} />
            <HomeBlog />
        </div>
    );
};


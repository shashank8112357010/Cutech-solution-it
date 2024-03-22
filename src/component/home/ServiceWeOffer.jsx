import React, { useRef } from 'react'
import Slider from 'react-slick';


const data = [
    { heading: "Tailored Solutions for Your Business Needs", para: "At our firm, we believe in tailoring IT solutions to fit each client's unique needs. Whether you're a startup or an enterprise, we customize our services to match your business size, sector, and goals. With a personalized approach, we ensure your IT infrastructure remains strong and reliable. Proudly offering <strong> top-tier technical support in UK </strong>, we prioritize understanding your requirements to deliver bespoke solutions." },
    { heading: "Comprehensive Range of Services", para: "At Cutech Solutions, we offer a wide array of IT services to fulfill all your needs. From <strong> B2B support in UK </strong> , cloud management, pay-per-click, and <strong>  digital marketing in UK </strong> , we've got you covered. With expert cyber security solutions, centralizing your IT with us streamlines operations, cuts costs, and simplifies vendor management, saving you valuable time and resources." },
    { heading: "Expertise and Experience", para: "With years of <strong> industry experience </strong> and a team of seasoned professionals, Cutech Solutions brings a wealth of expertise and knowledge to the table. Our technicians, engineers, and digital marketers are experts in their respective fields, staying abreast of the latest technologies, trends, and best practices to deliver cutting-edge solutions that drive results for your business." },
    { heading: "Commitment to Excellence", para: "At Cutech Solutions, excellence is not just a goal – it's our standard. We are committed to delivering exceptional service and results to every client, exceeding their expectations and earning their trust and satisfaction. From our responsive customer support to our meticulous attention to detail, we go above and beyond to ensure that every interaction with Cutech Solutions is a positive and productive one." },
    { heading: "Priority Issue Resolution", para: "We understand that downtime can be costly for businesses, which is why we prioritize issue resolution based on its severity and impact on your operations. Our team is dedicated to addressing critical issues promptly and efficiently, minimizing downtime and disruption to your business. With Cutech Solutions by your side, you can rest assured that your IT needs will be addressed with urgency and professionalism." },
    { heading: "Transparent Pricing and Value for Money", para: "Cutech Solutions assures transparency and integrity in pricing for <strong> B2B IT Support Services </strong> . We provide competitive rates, devoid of hidden fees or unexpected charges. Our pricing structure is tailored to deliver optimal value, ensuring you receive the best return on investment. Rest assured, with Cutech Solutions, you're receiving premium service at a fair and justifiable cost." },
    { heading: "Continuous Support and Collaboration", para: "Our relationship with clients doesn't end after the project is completed – it's just the beginning. We believe in fostering long-term partnerships with our clients, providing ongoing support, maintenance, and collaboration to help them achieve their business goals. Whether you need <strong> assistance with troubleshooting a technical issue </strong> or advice on implementing a new technology, Cutech Solutions is always here to help." },
];

export const ServiceWeOffer = () => {
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickPrev();
    };
    const previous = () => {
        sliderRef.slickNext();
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        useTransform: false,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 500,
                    pauseOnHover: true,
                    autoplay: false,
                    autoplaySpeed: 0,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 500,
                    pauseOnHover: true,
                    autoplay: false,
                    autoplaySpeed: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 500,
                    pauseOnHover: true,
                    autoplay: false,
                    autoplaySpeed: 0,
                },
            },
        ]
    };

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
        <section className='sm:mb-20 max-w-[1920px] mx-auto serviceWeOffer'>
            <div className='mb-8 flex items-center px-4 justify-center flex-col gap-[20px] sm:gap-[39px]'>
            </div>
            <div className='relative text-center my-12'>
                <div className="absolute -top-6 left-[35%] sm:left-[45%] flex h-[7px] w-[30%] sm:w-[10%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500"></div>
                <h2 className="text-mobTitletext-lapTitle2 sm:text-tabTitle lg:text-lapTitle font-semibold font-rubik leading-[23px] sm:leading-[29px] lg:leading-[41px] my-4">
                    Why Choose Cutech Solutions?  <br />
                    <span className='text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay'>Unlocking Your Business's Potential</span>
                </h2>
                <p className='font-krub text-mobBody sm:text-tabBody lg:text-lapBody leading-[18px] sm:leading-[24px] text-center px-4 lg:px-36'>
                    When it comes to selecting a partner for your business's IT needs, the choice is crucial. At Cutech Solutions, we understand the importance of making an informed decision, which is why we stand out as the premier choice for businesses seeking reliable, innovative, and client-focused IT solutions. Here are some compelling reasons why you should choose Cutech Solutions: <strong> IT Managed Service Providers.</strong>
                </p>
            </div>

            <div className='w-full !flex !flex-row relative !justify-between !items-center gap-0 md:gap-8  overflow-hidden'>

                {/* //nextButton  */}
                <div className=" absolute z-[40] left-4 sm:left-16 block cursor-pointer"
                    onClick={next}
                >
                    <img loading="lazy" src="/img/testimonial/TestimonialLeftArrow.svg" className=" h-8 md:h-12 w-8 md:w-12" alt="LeftArrow" />
                </div>

                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings} >
                    {data.map((item, index) => (
                        <div key={index} className="mr-4 flex justify-center items-center gap-12 ">
                            <div className='sm:mx-4 transition-all duration-300 h-[300px] w-[290px] sm:w-[320px] lg:w-[500px] pb-8 sm:px-4 ease-in-out flex-grow border-2 border-[#E7DAED] shadow-custom justify-center flex flex-col px-2 sm:p-3 sm:my-8 gap-2 rounded-[9px] '>
                                <h3 className='font-rubik text-mobTitle2 text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay sm:text-tabTitle2 lg:text-lapTitle2 font-semibold leading-[27px]'>
                                    {item.heading}
                                </h3>
                                <p className='text-mobBody2 sm:text-tabBody2 lg:text-lapBody2 text-textgray font-rubik leading-[18px] md:leading-[22px]'>
                                    {renderTextWithBold(item.para)}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* //previous button */}
                <div className="block absolute z-[40px] right-4 sm:right-16 cursor-pointer"
                    onClick={previous}
                >
                    <img loading="lazy" src="/img/testimonial/TestimonialRightArrow.svg" className=" h-8 md:h-12 w-8 md:w-12" alt="RightArrow" />
                </div>
            </div>

        </section>
    )
}



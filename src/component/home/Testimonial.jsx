import React, { useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        img: "/img/testimonial/TestimonialImg2.png",
        name: "Tom",
        route: "Milestone",
        review: "Cutech Solutions has been a game-changer for our small business. Their remote technical support services have saved us countless hours of downtime, allowing us to focus on growing our company. Plus, their cybersecurity solutions have given us peace of mind knowing that our data is safe and secure. Highly recommend their services to any business looking for reliable IT support! -",
        bgColor: "lightWhite",
        paraColor: "textgray",
        headingColor: "darkestBlue"
    },
    {

        img: " /img/testimonial/TestimonialImg3.png",
        name: "Emma",
        route: "User-Support",
        review: "We were hesitant to switch IT support providers, but Cutech Solutions exceeded our expectations in every way. Their team is incredibly responsive and knowledgeable, always providing prompt solutions to our technical issues. Their cloud service management solutions have also helped streamline our operations and reduce costs. We're thrilled with the level of service and expertise they provide.",
        bgColor: "darkBlue",
        paraColor: "white",
        headingColor: "white"
    },
    {
        img: "/img/testimonial/TestimonialImg1.png",
        name: "David",
        route: "Tech-Support",
        review: "Choosing Cutech Solutions for our cybersecurity needs was one of the best decisions we've made for our business. Their comprehensive approach to cybersecurity ensures that we're protected from every angle, giving us confidence in our data security. Their digital marketing solutions have also helped boost our online presence, driving more traffic to our website. We couldn't be happier with the results!",
        bgColor: "lightWhite",
        paraColor: "textgray",
        headingColor: "darkestBlue"
    },
    {
        img: "/img/testimonial/TestimonialImg4.png",
        name: "Sarah",
        route: "Transparency",
        review: "Cutech Solutions has been an invaluable partner for our growing business. Their remote technical support services have been essential in keeping our operations running smoothly, even during busy periods. Their dedication to providing tailored solutions to our unique needs sets them apart from other IT support providers. We highly recommend Cutech Solutions to any business looking for reliable and proactive IT support",
        bgColor: "darkBlue",
        paraColor: "white",
        headingColor: "white"
    },
];


export const FeatureSlider = () => {
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickPrev();
    };
    const previous = () => {
        sliderRef.slickNext();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

        ],
    };

    return (
        <>
            <div className="container relative m-auto md:mb-10 px-4 lg:px-28 !overflow-hidden">
                <div>
                    <div className="flex flex-row gap-2 py-6 px-4 relative justify-between">

                        <div>
                            <p className="text-lapContactBody mb-4 font-rubik bg-white/10 border-l-4 pl-2 border-yellow-500 ">
                                Testimonial
                            </p>
                            <h2 className="text-mobTitle sm:text-tabTitle lg:text-lapTitle font-rubik font-semibold leading-[23px] sm:leading-[30.81px]">
                                What Our Customer Say
                            </h2>
                        </div>

                        <div className=" flex-row gap-4 hidden sm:flex">
                            <div className="block cursor-pointer"
                                onClick={next}
                            >
                                <img loading="lazy" src="../../../img/testimonial/TestimonialLeftArrow.svg" className=" h-12 md:h-12 w-12 md:w-12" alt="LeftArrow" />
                            </div>
                            <div className="block cursor-pointer"
                                onClick={previous}
                            >
                                <img loading="lazy" src="../../../img/testimonial/TestimonialRightArrow.svg" className=" h-12 md:h-12 w-12 md:w-12" alt="RightArrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-10 md:pb-40 sm:flex sm:justify-center">
                    {/* //right arrow  */}
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings} className="slider lower-dots custom-dots px-3 overflow-hidden !w-[1050px] sm:w-[1000px]" >
                        {data.map((item, index) => (
                            <div key={index} className="">
                                <div className={`bg-${item.bgColor} w-[400px] sm:w-full !p-4 sm:!p-12 transition-all duration-150 ease-in-out hover:bg-cardWhite text-center my-custom-slide-style relative flex-col  gap-5 flex`}
                                >
                                    {/* first section  */}
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <div className="justify-between items-start flex w-[44px] sm:w-[54px] lg:w-[72px]">
                                                <img loading="lazy" className="object-cover w-full h-full" src={item.img} />
                                            </div>
                                            <div className="flex flex-col">
                                                <h2 className={`font-rubik text-${item.headingColor} text-start font-semibold text-mobTitle2 sm:text-tabTitle2 lg:text-lapTitle2`}>
                                                    {item.name}
                                                </h2>
                                                <p className={`font-krub font-medium leading-[24.24px] text-${item.headingColor}`}>
                                                    {item.route}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-[44px] sm:w-[54px] lg:w-[72px]">
                                            <img loading="lazy" className="object-cover w-full h-full" src="/img/testimonial/TestimonialIcon.svg" />
                                        </div>
                                    </div>

                                    {/* second section  */}
                                    <p className={`font-krub text-${item.paraColor} text-start font-medium text-mobBody3 sm:text-tabBody3 lg:text-lapBody3 leading-[14px] sm:leading-[24.24px] italic`}>{item.review}
                                    </p>
                                    {/* third section  */}
                                    <div className="sm:w-[180px] w-[120px] h-[20px] sm:h-[34px]">
                                        <img loading="lazy" className="object-cover w-full h-full" src="/img/testimonial/TestimonialStar.svg" />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className=" flex-row gap-4 flex sm:hidden justify-end pb-8">
                    <div className="block cursor-pointer"
                        onClick={next}
                    >
                        <img loading="lazy" src="../../../img/testimonial/TestimonialLeftArrow.svg" className=" h-8 md:h-8 w-8 md:w-8" alt="LeftArrow" />
                    </div>
                    <div className="block cursor-pointer"
                        onClick={previous}
                    >
                        <img loading="lazy" src="../../../img/testimonial/TestimonialRightArrow.svg" className=" h-8 md:h-8 w-8 md:w-8" alt="RightArrow" />
                    </div>
                </div>
            </div>
        </>
    );
};

 

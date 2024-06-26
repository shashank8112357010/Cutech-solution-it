import React from 'react'

export const GetInTouch = () => {
    return (
        <section className='mx-auto max-w-[1920px]'>
            <div className="bg-[#091242] py-20 text-white flex flex-col lg:flex-row justify-center items-center gap-[52.46px]">
                <div className="flex flex-col gap-10 w-full lg:w-[264.57px] lg:px-0 lg:mt-0 px-10 mt-12 items-center lg:items-start">
                    <div className="flex flex-col gap-2">
                        <p className="text-lapContactBody w-[78px] bg-white/10 border-l-4 pl-2 border-yellow-500 font-bold">
                            Contact
                        </p>
                        <h2 className="text-lapContactTitle capitalize sm:text-tabTitle font-rubik font-semibold leading-[30.81px]">
                            Get in touch with us
                        </h2>
                        <p className="font-rubik leading-[22.68px] font-normal sm:font-medium text-lapContactBody text-start">
                            Leverage agile frameworks to provide a robust synopsis for strategy
                            foster collaborative thinking to further the overall value.
                        </p>
                    </div>
                    <div className="flex gap-6 flex-col sm:flex-row sm:flex-wrap lg:flex-col justify-center">
                        <div className="flex gap-2">
                            <a className='sm:w-[47px] h-[47px]' href='mailto:info@cutechsolutions.co.uk' target='_blank'>
                                <img src="img/Contact/Message.webp" alt="email icon for email" className="inline-block" />
                            </a>
                            <div className="flex flex-col text-mobBody font-krub font-medium leading-[16.2px]">
                                <p>Email </p>
                                <a href='mailto:info@cutechsolutions.co.uk' target='_blank'>info@cutechsolutions.co.uk</a>
                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <a className='w-[47px] h-[47px]' href=' tel:+447424352181'>
                                <img src="img/Contact/Phone.webp" alt="phone icon for contact" className="inline-block" />
                            </a>
                            <div className="flex flex-col text-mobBody font-krub font-medium leading-[16.2px]">
                                <p>Call Us</p>
                                <a href='tel:+447424352181'>{" "} +44 7424 352181</a>
                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <img
                                src="img/Contact/Clock.webp"
                                alt="Get in Touch"
                                className="inline-block"
                            />
                            <div className="flex flex-col text-mobBody font-krub font-medium leading-[16.2px] mt-2">
                                <p>Mon - Sun 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-8 w-full sm:w-[568px] lg:mb-0 lg:px-0 px-10 mb-12 text-white">
                    <div className="flex gap-6 flex-col lg:flex-row">
                        <input
                            type="text"
                            className="bg-darkBlue Inputplaceholder w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683] "
                            placeholder="Your name*"
                        />
                        <input
                            type="text"
                            className="bg-darkBlue Inputplaceholder w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                            placeholder="Email*"
                        />
                    </div>
                    <div className="flex gap-6 flex-col lg:flex-row">
                        <input
                            type="text"
                            className="bg-darkBlue Inputplaceholder w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                            placeholder="Phone Number*"
                        />
                        <input
                            type="text"
                            className="bg-darkBlue Inputplaceholder w-full text-white font-normal font-rubik border-2 px-8 py-3 border-[#4E5683]"
                            placeholder="City*"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <textarea
                            type="text"
                            className="bg-darkBlue Inputplaceholder text-white font-normal font-rubik border-2 px-8 pt-4 pb-16 border-[#4E5683]"
                            placeholder="Your Message"
                        />
                        <div>
                            <button type="submit" className='bg-custom-gradient font-krub overflow-hidden font-semibold relative text-[12px] text-lightBlack w-[70px] h-[34px] sm:w-[136px] sm:h-[45px]'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


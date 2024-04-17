import React from 'react'
import { BannerAtom } from '../atom/BannerAtom'


export const Privacy = () => {
    return (
        <>
            <BannerAtom srcImg="/img/services/ServicesBanner.webp" title="Privacy Policy" heading="Privacy Policy" />
            <section className="max-w-7xl mx-auto mt-6 px-4 sm:px-20 bg-transparent ">

                <div className="flex  flex-col justify-center gap-4 items-center mb-14">
                    <h1 className="font-bold text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText leading-4 sm:leading-8 font-rubik">
                        Privacy Policy
                    </h1>
                </div>
                <div className="flex  flex-col justify-start gap-4 items-start mb-14">
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">At Cutech Solutions, we prioritize the privacy of our visitors and users. This Privacy Policy outlines the types of personal information collected and received by Cutech Solutions and how it is used.
                    </p>
                </div>

                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Information Collection and Use</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Cutech Solutions collects personal information when you register on our website, subscribe to our newsletter, fill out a form, or otherwise interact with our services. The information collected may include your name, email address, mailing address, phone number, or other details necessary to provide you with our services.</p>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">We could use the data we collect to serve a variety of purposes such as:</p>
                    <ol className="lg:leading-[27px] sm:leading-[20px] leading-6 text-[12px] sm:text-[16px] list-disc 2xl:text-[22px] ml-5  mb-7 ">
                        <li className="text-textgray mb-2">To Personalize your experience to better meet your specific preferences.</li>
                        <li className="text-textgray mb-2">To improve our website based on the feedback we receive from you.</li>
                        <li className="text-textgray mb-2">To process transactions, where your information will not be shared with any third parties except to the extent necessary to provide the service.</li>
                        <li className="text-textgray mb-2">To send periodic emails about announcements, promotions or other pertinent information. You may opt-out of receiving the emails at any time.</li>
                    </ol>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Data Security</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Cutech Solutions utilizes a variety of security measures to ensure the security of your personal data. We use encryption technology to protect sensitive information transmitted online and restrict access to your personal information to authorized personnel only.</p>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Cookies</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Cutech Solutions uses cookies to enhance your browsing experience. Cookies are little files that your web browser saves to the hard drive of your computer. These cookies are used to collect information about how you interact with our website and allow us to recognize your browser for improved functionality.</p>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Third-Party Links</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">On occasion, we might offer or include third-party goods or services on our website, at our sole discretion. The third-party websites have separate and separate privacy policies. Therefore, we have no obligation or responsibility for the activities and content of these sites. However, we strive to ensure the security of our website and would appreciate any feedback regarding these websites.</p>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Your Consent</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">You agree to our privacy statement by using our website.</p>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Changes to Our Privacy Policy</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Cutech Solutions reserves the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be made public on this site and the new Privacy Policy will become effective within a few hours of posting.</p>
                </div>
                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">If you have any questions or concerns about our Privacy Policy, please contact us at contact info@cutechsolutions.co.uk.</p>
                </div>
            </section>
        </>
    )
}

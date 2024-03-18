import React from "react";
import BannerAtom from "../atom/BannerAtom";

const Disclaimer = () => {
    return (
        <>
            <BannerAtom srcImg="/img/Disclaimer.png" title="Disclaimer" heading="Diclaimer" />
            <section className="max-w-7xl mx-auto mt-6 px-4 sm:px-20 bg-transparent ">
                <div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
                    <h1 className="text-center capitalize text-[22px] sm:text-[45px] 2xl:text-[50px] font-extrabold mt-8 font-rubik">
                        Disclaimer for Cutech Solutions 
                    </h1>
                </div>
                <div className="flex  flex-col justify-start gap-4 items-start mb-14">
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">All the information on this website - https://cutechsolutions.co.uk/ - is published in good faith and for general information purpose only. cutech solutions does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (cutech solutions), is strictly at your own risk. cutechsolutions will not be liable for any losses and/or damages in connection with the use of our website.</p>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
                </div>
                <div className="flex  flex-col justify-start gap-4 items-start mb-6">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px]">Consent</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                </div>
                <div className="flex  flex-col justify-start gap-4 items-start mb-12">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px]">Update</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading- font-krub8">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                </div>


            </section>
        </>
    );
};

export default Disclaimer;
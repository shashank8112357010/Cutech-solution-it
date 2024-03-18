import React from 'react'
import BannerAtom from '../atom/BannerAtom'

const RefundPolicy = () => {

    const refundPolicy = [
        {
            id: 0,
            policy: "Eligibility for Refund",
            solution: "Customers are eligible for a refund within the first 14 days of receiving the services from Cutech Solutions Ltd.",

        },
        {
            id: 1,
            policy: "Refund Process",
            solution: "To request a refund, customers must contact Cutech Solutions Ltd within the first 14 days of receiving the services. Refund requests can be made by contacting our customer support team via email at billing@cutechsolutions.co.uk or by phone at +44 7424 352181. Customers must provide their name, contact information, and details of the services for which they are requesting a refund.",

        }
        ,
        {
            id: 2,
            policy: "Refund Amount",
            solution: "Refunds will be issued for the full amount paid by the customer for the services within the first 14 days. No partial refunds will be provided.",

        },
        {
            id: 3,
            policy: "Refund Method",
            solution: "The same payment method used for the initial transaction will be used to issue refunds. For example, if the customer made the payment via credit card, the refund will be credited back to the same credit card used for the transaction",

        },
        {
            id: 4,
            policy: "Processing Time:",
            solution: "Once a refund request is received and approved, Cutech Solutions Ltd will process the refund within 7 business days. The time it takes for the refund to be credited to the customer's account may vary depending on the customer's financial institution.",

        }
    ]
    return (
        <>
            <BannerAtom srcImg="/img/RefundPolicy.png" title="Refund Policy" heading="Refund Policy" />
            <section className="max-w-7xl mx-auto mt-6 px-4 sm:px-20 bg-transparent">

                <div className="flex flex-col justify-center gap-4 items-center mb-10">
                    <h1 className="font-bold text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText leading-4 sm:leading-8 font-rubik">
                        Refund Policy
                    </h1>
                </div>

                <div className="flex flex-col justify-start gap-4 items-start mb-4">
                    <p className="font-extrabold text-textgray text-[12px] sm:text-[16px] 2xl:text-[24px] leading-4 sm:leading-8 font-krub">Cutech Solutions Ltd
                        128 City Road, London, United Kingdom, EC1V 2NX
                    </p>
                </div>
                <div className="flex  flex-col justify-start gap-4 items-start mb-14">
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">At Cutech Solutions Ltd, we strive to ensure the satisfaction of our customers with the services we provide. We are aware, though, that there may be instances in which a refund is required. Therefore, we have established the following refund policy to outline the terms and conditions under which refunds will be issued:</p>
                </div>


                {
                    refundPolicy.map((item) => {
                        return (
                            <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                                <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">{item.policy}</h2>
                                <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">{item.solution}</p>
                            </div>

                        )
                    })
                }

                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Exclusions:</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">The following services are not eligible for refunds:</p>

                    <ol className="lg:leading-[27px] sm:leading-[20px] leading-6 text-[12px] sm:text-[16px] list-disc 2xl:text-[22px] ml-5  mb-7 ">
                        <li className="text-textgray mb-2">Services provided after the initial 14-day period.</li>
                        <li className="text-textgray mb-2">Services that have been partially or fully consumed by the customer.</li>
                        <li className="text-textgray mb-2">Services that have been terminated due to a violation of Cutech Solutions Ltd's terms of service.</li>
                    </ol>
                </div>

                <div className="flex  flex-col justify-start items-start mb-8 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Disputes:</h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">Under applicable laws and regulations, a customer may report a problem to the relevant regulatory bodies or consumer protection organizations if they are unhappy with the answer Cutech Solutions Ltd. gave them regarding a refund request.</p>
                    <div className='bold'>
                        <p className='text-black'>Contact Information:</p>
                        <p className="text-textgray text-[8px] sm:text-[14px] 2xl:text-[20px] leading-4 sm:leading-8 font-krub">For any questions or concerns regarding our refund policy, please contact Cutech Solutions Ltd at the following address:</p>
                        <span className='text-textgray/85'>Cutech Solutions Ltd</span>
                        <span className='text-textgray/85'>128 City Road, London, United Kingdom, EC1V 2NX</span>
                        <span className='text-textgray/85'>Email: billing@cutechsolutions.co.uk</span>
                        <span className='text-textgray/85'>Phone: +44 7424 352181</span>
                    </div>
                </div>
                <div className="flex  flex-col justify-start items-start mb-12 gap-4">
                    <h2 className="text-darkBlue font-extrabold text-[18px] sm:text-[25px] 2xl:text-[30px] font-rubik">Effective Date:
                    </h2>
                    <p className="text-textgray text-[12px] sm:text-[16px] 2xl:text-[22px] leading-4 sm:leading-8 font-krub">This refund policy is effective as of 11/03/2024. Cutech Solutions Ltd reserves the right to update or modify this refund policy at any time without prior notice. Any changes to the refund policy will be communicated to customers via email or through our website.
                    </p>
                </div>
            </section>
        </>
    )
}

export default RefundPolicy
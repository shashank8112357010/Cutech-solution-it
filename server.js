/* eslint-disable no-undef */
import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

const isProduction = process.env.NODE_ENV === "production";
const Port = process.env.PORT || 3000;
const Base = process.env.BASE || "/";

const templateHtml = isProduction
    ? fs.readFileSync("./dist/client/index.html", "utf-8")
    : "";

// const ssrManifest = isProduction
//     ? fs.readFileSync("./dist/client/ssr-manifest.json", "utf-8")
//     : undefined;



const pageData = [
    {
        path: '/',
        metaTitle: 'Boost Your Business with Reliable B2B IT Support Service',
        metaDescription: "Elevate your company's tech game with top-notch B2B IT support services. Streamline operations & enhance productivity today",
        canonicalUrl: 'https://cutechsolutions.co.uk',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"
    },
    {
        path: '/about-us',
        metaTitle: 'Discover Our Story | Cutech Solutions About Us',
        canonicalUrl: 'https://cutechsolutions.co.uk/about-us',
        metaDescription: 'Explore the journey of Cutech Solutions. Learn about our overview, our mission, and core values. Get to know us better.',
        metaKeywords: "About Us, About Us Page, All About Us, Know About Us"

    },
    {
        path: '/blog',
        metaTitle: 'Cutech Solutions Blog: Stay Updated',
        metaDescription: "Explore the latest trends and insights in technology with Cutech Solutions' informative blog posts.",
        canonicalUrl: 'https://cutechsolutions.co.uk/blog',
        metaKeywords: "Latest Blogs, Blog Page, Blog Post Page"

    },
    {
        path: '/contact-us',
        metaTitle: 'Contact Page',
        metaDescription: 'Welcome to Cutech Solutions, your trusted B2B IT support solution in UK and globally. Contact us for 24/7 IT helpdesk support & tailored solutions.',
        canonicalUrl: 'https://cutechsolutions.co.uk/contact',
        metaKeywords: "Contact Us, Get in Touch, Get in Touch with Us, Contact Us Page, Connect with Us"

    },
    {
        path: '/disclaimer',
        metaTitle: 'Disclaimer',
        metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
        canonicalUrl: 'https://cutechsolutions.co.uk/disclaimer',
        metaKeywords: "Disclaimer, Legal Disclaimer, Terms of use, Website Disclaimer, Disclaimer Statement"

    },
    {
        path: '/terms-condition',
        metaTitle: 'Terms of Service',
        metaDescription: "Review our comprehensive terms and condition for Cutech Solutions. Learn about our commitments, usage policies, and legal agreements.",
        canonicalUrl: 'https://cutechsolutions.co.uk/terms-condition',
        metaKeywords: "Terms and Condition, Service Terms, Terms and Conditions Agreement, Website Policies, Contractual Terms, Terms and Conditions"

    },
    {
        path: '/refund-policy',
        metaTitle: 'Refund Policy',
        metaDescription: "Explore Cutech Solutions' Refund Policy: Clear guidelines ensuring customer satisfaction & transparency in all transactions. Your trust, our priority.",
        canonicalUrl: 'https://cutechsolutions.co.uk/refund-policy',
        metaKeywords: "Refund Policy, Refund Process, Refund Eligibility, Return Conditions, Refund Procedure"

    },
    {
        path: '/privacy-policy',
        metaTitle: 'Privacy Policy',
        metaDescription: "Explore Cutech Solutions' Disclaimer page to understand our policies, limitations, and legal obligations in delivering digital marketing services.",
        canonicalUrl: 'https://cutechsolutions.co.uk/privacy-policy',
        metaKeywords: "Privacy Policy, Privacy Statement, Privacy Rights, Privacy Assurance, User Consent"

    },
    {
        path: '/services',
        metaTitle: 'Cutech Solutions Services: Empowering Business with Tech',
        metaDescription: "Discover how our services can elevate your business. From B2B IT support services to digital marketing solutions, we've got you covered. Explore now",
        canonicalUrl: 'https://cutechsolutions.co.uk/services',
        metaKeywords: "B2B IT Support Service, Reliable B2B IT Support Service, Top notch B2B IT Support Service, On-Call 24x7 Technical Support, IT Helpdesk Support, IT Managed Service Providers, Remote Technical Support in UK, Technical Support in UK, Computer Cyber Security Service Solutions, Leading Computer Cyber Security Service Providers in UK, Cloud Managed Services in UK, Cloud Service Management in UK, Best SEO company in London, Digital Marketing Solutions , Digital Marketing Experts in UK, Digital Marketing Experts, SEO Company, SEO Company UK, Best SEO Company UK, SEO Company in the UK"

    },
    {
        path: '/elevate-your-business-with-expert-b2b-it-support',
        metaTitle: 'Elevate Your Business With Expert B2B-IT-Support',
        metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
        canonicalUrl: 'https://cutechsolutions.co.uk/elevate-your-business-with-expert-b2b-it-support',
        metaKeywords: "Expert B2B IT Support Services,  IT Helpdesk Services, Innovative IT Support Services, On-Call 24x7 Technical Support, IT Helpdesk Support in UK, Top-Quality IT Support, B2B IT Support Services UK, Remote Technical Support, Remote Technical Service,  IT Support Services UK, Remote Technical Support Service UK, Remote Technical Support UK, Remote Technical Support UK"
    },
    {
        path: '/remote-technical-support-services',
        metaTitle: 'Expert UK Remote Technical Support Services Cutech Solutions',
        metaDescription: "Get expert Remote Technical Support Services in UK for seamless troubleshooting and assistance. Reliable solutions for all your tech needs",
        metaKeywords: "Remote Technical Support Services in UK, Remote Technical Support in UK, Technical Support Services in UK, IT Helpdesk Service in UK, On-Call 24x7 Technical Support in UK, IT Helpdesk Support in UK, IT Managed Service Providers in UK, Technical Support in UK",
        canonicalUrl: 'https://cutechsolutions.co.uk/remote-technical-support-services'
    },
    {
        path: '/digital-marketing-company',
        metaTitle: 'Top Digital Marketing Services in UK | SEO Service UK',
        metaDescription: "Elevate your online presence with Cutech Solutions' digital marketing services in UK. Our SEO service in UK ensures top rankings and increased visibility.",
        canonicalUrl: 'https://cutechsolutions.co.uk/digital-marketing-company',
        metaKeywords: "Digital Marketing Services in UK, SEO Service UK, Digital Marketing Company in UK, Digital Marketing Service Provider, Digital Marketing Service Provider in UK, digital marketing experts, digital marketing services UK, Search Engine Optimization, Pay-Per-Click, Social Media Marketing, Digital Marketing Companies in UK, Digital Marketing Solutions",
    },
    {
        path: '/cyber-security-services',
        metaTitle: 'Cyber Security Services | Cyber Risk',
        metaDescription: "Safeguard your business with expert Cyber Security Services from Cutech Solutions. Mitigate cyber risks and protect your assets today.",
        canonicalUrl: 'https://cutechsolutions.co.uk/cyber-security-services',
        metaKeywords: "Cyber Security Services, Cyber Security Service Providers in UK, Computer Cyber Security Service Solutions, Computer Cyber Security Service Providers in UK, Cyber Security Service in UK, Best Cyber Security Service in UK, Top Cyber Security Service in UK",
    },
    {
        path: '/cloud-managed-services',
        metaTitle: 'Enhance Efficiency with Cloud Managed Services',
        metaDescription: "Discover cloud managed services in UK to optimize operations. Our experts ensure seamless integration & efficiency for your business needs.",
        canonicalUrl: 'https://cutechsolutions.co.uk/cloud-managed-services',
        metaKeywords: "Cloud Managed Services, Cloud Managed Services in UK, Cloud Service Management in UK, Cloud Service Management Provider, Cloud Managed Services the UK, Best Cloud Based Managed Services, Managed Cloud Services, Managed Cloud Services Providers, Cloud Server Management Solution",
    },
];


const app = express();
let vite;

// Add vite or respective production middlewares
if (!isProduction) {

    vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "custom",
    });

    app.use(vite.middlewares);
} else {
    const sirv = (await import("sirv")).default;
    const compression = (await import("compression")).default;
    app.use(compression());
    app.use(Base, sirv("./dist/client", {
        extensions: [],
        gzip: true,
    }));
}

app.use("*", async (req, res, next) => {
    try {
        // Find matching page data based on the request path
        const currentPage = pageData.find(page => page.path === req.originalUrl);
        if (!currentPage) {
            return res.status(404).send(`<div style="width:100%; display:flex; align-items:center; justify-content:center; margin-top: 0; margin-left:auto; margin-right:auto; margin-bottom: 0; height: 90vh">
            <div style="width:700px; height:300px">
                <img src='/img/PageNotFound.png' alt='pageNotFound' style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
        </div>`);
        }


        // Meta tags and body content based on the current page data

        const { metaTitle, metaDescription, canonicalUrl, metaKeywords } = currentPage;
        const metaTags = `
            <title>${metaTitle}</title>
            <meta name="description" content="${metaDescription}">
            <meta name="keywords" content="${metaKeywords}">
            <link rel="canonical" href="${canonicalUrl}">
        `;

        let template;
        if (!isProduction) {
            template = fs.readFileSync(path.resolve("./index.html"), "utf-8");
            template = await vite.transformIndexHtml(req.originalUrl, template);
        } else {
            template = templateHtml;
        }

        const html = template
            .replace(`<!--meta-tags-->`, metaTags)
            .replace(`<!--app-html-->`, ' ');

        res.status(200).setHeader("Content-Type", "text/html").end(html);
    } catch (error) {
        vite.ssrFixStacktrace(error);
        next(error);
    }
});

// Start http server
app.listen(Port, () => {
    console.log(`Server running on http://localhost:${Port}`);
});

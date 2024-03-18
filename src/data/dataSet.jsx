import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon, TelegramShareButton, TelegramIcon, } from "react-share";

export const socialIcon = [
    {
        icon:
            <LinkedinShareButton url='https://cutechsolutions.co.uk/'>
                <LinkedinIcon size={24} round={true} />
            </LinkedinShareButton>
    },
    {
        icon:
            <TwitterShareButton url='https://cutechsolutions.co.uk/'>
                <TwitterIcon size={24} round={true} />
            </TwitterShareButton>
    },
    {
        icon:
            <FacebookShareButton url='https://cutechsolutions.co.uk/'>
                <FacebookIcon size={24} round={true} />
            </FacebookShareButton>
    },
];


export const HomeSocialIcon = [
    {
        icon:
            <LinkedinShareButton url='https://cutechsolutions.co.uk/'>
                <LinkedinIcon size={35} round={false} />
            </LinkedinShareButton>
    },
    {
        icon:
            <TwitterShareButton url='https://cutechsolutions.co.uk/'>
                <TwitterIcon size={35} round={false} />
            </TwitterShareButton>
    },
    {
        icon:
            <FacebookShareButton url='https://cutechsolutions.co.uk/'>
                <FacebookIcon size={35} round={false} />
            </FacebookShareButton>
    },
];
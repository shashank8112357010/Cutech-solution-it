import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

export const socialIcon = [
    {
        icon: "/img/navbar/Linkdin.png",
        path: "https://www.linkedin.com/company/cutechsolutions/"
    },
    {
        icon: "/img/navbar/Twitter.png",
        path: "https://twitter.com/Cutech_Solution"
    },
    {
        icon: "/img/navbar/Facebook.png",
        path: "https://www.facebook.com/profile.php?id=61557138917291"
    },

];

export const HomeSocialIcon = [
    {
        icon: (
            <LinkedinShareButton url='https://www.linkedin.com/company/cutechsolutions/'>
                <LinkedinIcon size={35} round={false} />
            </LinkedinShareButton>
        )
    },
    {
        icon: (
            <TwitterShareButton url='https://twitter.com/Cutech_Solution'>
                <TwitterIcon size={35} round={false} />
            </TwitterShareButton>
        )
    },
    {
        icon: (
            <FacebookShareButton url='https://www.facebook.com/profile.php?id=61557138917291'>
                <FacebookIcon size={35} round={false} />
            </FacebookShareButton>
        )
    }
];

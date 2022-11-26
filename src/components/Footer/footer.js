import React from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Font = { size: 18 };

React.createElement("h3",{ style: Font });
const Footer = () => (

<div className="footer text-center p-5 text-white text-bg-danger">
<div className="footer">
<p className="text-center text-white" >
{new Date().getFullYear()} Copyright | All Steel Works (Pty) Ltd | - All Rights Reserved ®
</p> 
</div>

<div className="e-mail">
<p className="text-white"> <ContactMailIcon/> E-mail : ropsnetsianda@gmail.com <br/> <ForwardToInboxIcon/> Alternative: btfossil@gmail.com</p>
<hr/>
<WorkspacePremiumIcon/> BBBEE STATUS: 125% (Level 2)
</div>

        <div className="container-flex text-center pt-5 pb-5 " id="SocialIcons">
            <a className="text-white" href="https://www.facebook.com/all-steel-works"><FacebookRoundedIcon fontSize="large" /></a>
            <a className="text-white" href="/"><InstagramIcon fontSize="large" /> </a>
            <a className="text-white" href="/"><TwitterIcon fontSize="large" /> </a>
            <a className="text-white" href="/"><LinkedInIcon fontSize="large" /></a>
        </div>

</div>
);

export default Footer;

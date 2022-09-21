import './SocialSec.css';
import ContactForm from './contactForm/contactForm';
import SpreadForm from './SpreadForm/spreadForm';
import React from 'react';

const SocialSec = () => {
    const srcs = [{
        name: 'facebook',
        href: "https://www.facebook.com/search/top?q=%D7%A0%D7%98%D7%A2%20%D7%90%D7%91%D7%A7%D7%A1%D7%99%D7%A1%20neta%20abecassis"
    }, {
        name: "youtube",
        href: "https://www.youtube.com/channel/UCx86a27W_bGdlT6Ij-S4RDQ" 
    }, {
        name: "instagram",
        href: "https://www.instagram.com/neta_abec/"
    }, {
        name: "spotify",
        href: "https://open.spotify.com/artist/2dhM2RLP1N4kfmaVaB8SoO"
    }];

    return (
        <div className='social' id='עוד'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className='socialTitle'>חפשו אותי</h1>
            <div className='iconsDiv'>
                {srcs.map((src, i) => {
                    const a_class = `fa fa-${src.name}`;
                    
                    return <a target='_blank' href={src.href} className={a_class} key={`${i}${src.name}`} rel='noreferrer'></a>;
                })}
            </div>
            <div className='formsSec'>
                <ContactForm />
                <SpreadForm />
            </div>
            <p className='credit'>photos by <a className='creditLink' target='_blank' rel='noreferrer' href='https://roicphotography.mypixieset.com/'>roi cohen</a>   <b>·</b>   © 2022 Gilad Shenhar</p>
        </div>
    )
};

export default SocialSec;

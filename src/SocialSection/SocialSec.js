import './SocialSec.css';
import ContactForm from './contactForm/contactForm';
import SpreadForm from './SpreadForm/spreadForm';
import React from 'react';

const SocialSec = () => {
    const srcs = [{
        name: 'facebook',
        href: "https://www.facebook.com/netaabecassismusic/about"
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
        <div className='social' id='social'>
            <h1 className='socialTitle'>חפשו אותי</h1>
            <div className='iconsDiv'>
                {srcs.map((src, i) => {
                    const a_class = `social-icon fa fa-${src.name}`;
                    
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

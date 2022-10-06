import './SocialNavBar.css';
import React, { useState } from 'react';

const SocialNavBar = () => {
    const srcs = [{
        name: 'facebook',
        href: "https://www.facebook.com/netaabecassismusic/about"
    }, {
        name: "youtube",
        href: "https://www.youtube.com/channel/UCx86a27W_bGdlT6Ij-S4RDQ" 
    }, {
        name: "instagram",
        href: "https://www.instagram.com/neta_abec/"
    }];

    const [navDisplay, setNavDisplay] = useState({display: 'none'});
    const [fanPositions, setFanPositions] = useState([0, 0]);

    const handleDisplay = () => {
        if (navDisplay.display === 'none') {
            setNavDisplay({display: 'inline'});
        } else {
            setNavDisplay({display: 'none'});
        }
        fan();
    };

    const fan = () => {
        const icons = document.getElementsByClassName('social-nav-icon');
        console.log(icons);
        if (navDisplay.display !== 'inline') {
            let x = 0;
            let y = 2;
            for (let i = 0; i < icons.length; i++) {
                const icon = icons[i];
                icon.style.bottom = `${y*50}px`;
                icon.style.right = `${x*50}px`;
                x++;
                y--;
                console.log("iconss");
                console.log(i);
            }
        } else {
            for (let i = 0; i < icons.length; i++) {
                const icon = icons[i];
                icon.style.bottom = 0;
                icon.style.right = 0;
            }
        }
    }

    return (
        <div className='socialNav'>
            <button className='socialNavButton fa fa-comment' onClick={handleDisplay} />
            <div className='socialIconsDiv'>
                {srcs.map((src, i) => {
                    const a_class = `social-nav-icon fa fa-${src.name}`;
                    return <button className={a_class} key={`${i}${src.name}`} rel='noreferrer' style={navDisplay} />;
                })}
            </div>
        </div>
    )
};

export default SocialNavBar;
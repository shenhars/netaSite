import './SocialNavBar.css';
import React, { useState } from 'react';

const SocialNavBar = () => {
    const srcs = [{
        name: 'envelope',
        href: "https://www.facebook.com/netaabecassismusic/about"
    }, {
        name: "rss",
        href: "https://www.youtube.com/channel/UCx86a27W_bGdlT6Ij-S4RDQ" 
    }, {
        name: "hashtag",
        href: "https://www.instagram.com/neta_abec/"
    }];

    const [navDisplay, setNavDisplay] = useState({display: 'none'});

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
        if (navDisplay.display !== 'inline') {
            let degree = 0;
            let delay = 0.3;
            let color = [70, 160, 168];
            for (let i = 0; i < icons.length; i++) {
                const icon = icons[i];
                const angle = degree * (Math.PI / 180);
                icon.style.transition = `all 1s ease ${delay}s`;
                icon.style.bottom = `${15+100*Math.cos(angle)}px`;
                icon.style.right = `${15+100*Math.sin(angle)}px`;
                icon.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                degree += 45;
                delay += 0.3;
                color[0] += 50
            }
        } else {
            for (let i = 0; i < icons.length; i++) {
                const icon = icons[i];
                icon.style.bottom = '15px';
                icon.style.right = '15px';
            }
        }
    }

    return (
        <div className='socialNav'>
            <button className='socialNavButton snb fa fa-comment' onClick={handleDisplay} />
            <div className='socialIconsDiv'>
                {srcs.map((src, i) => {
                    const a_class = `social-nav-icon snb fa fa-${src.name}`;
                    return <button className={a_class} key={`${i}${src.name}`} rel='noreferrer' />;
                })}
            </div>
        </div>
    )
};

export default SocialNavBar;
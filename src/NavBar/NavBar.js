import './NavBar.css';
import headerGif from '../Images/neta-gif-new.gif';
import React, { useState } from 'react';

const NavBar = ({ srcs }) => {
    const phoneIcons = [{
        icon: "user",
        href: "עלי"
    }, {
        icon: "microphone",
        href: "הופעות"
    }, {
        icon: "play",
        href: "מוזיקה"
    }, {
        icon: "share",
        href: "עוד"
    }];

    const [hidden, setHidden] = useState({display: "none"});
    const [divBackground, setDivBackground] = useState({backgroundColor: "transparent"});
    const [arrowDir, setArrowDir] = useState("nav-icons fa fa-arrow-right");

    const handlePhoneMenuClick = () => {
        if (hidden.display === "inline") {
            setHidden({display: "none"});
            setDivBackground({backgroundColor: "transparent"});
            setArrowDir("nav-icons fa fa-arrow-right");
        } else {
            setHidden({display:"inline"});
            setDivBackground({
                backgroundColor: "rgba(198, 196, 199)",
                opacity: "0.6",
                width: "100%",
            });
            setArrowDir("arrow-icon nav-icons fa fa-arrow-left");
        }
    };

    return (
        <div className='headerDiv'>
            <header className='header'>
                <nav className='computer-nav'>
                    {srcs.map((src, i) => {
                        const link = `#${src}`;
                        return <a href={link} key={i} className='link'>{src}</a>
                    })}
                </nav>
                <img src={headerGif} alt='neta abecsis' className='headerGif'/>
            </header>
            <nav className='phone-nav' style={divBackground}>
                <button className={arrowDir} onClick={handlePhoneMenuClick} />
                {phoneIcons.map((phoneIcon, i) => {
                    const iconClass = `nav-icons fa fa-${phoneIcon.icon}`
                    const iconLink = `#${phoneIcon.href}`
                    const iconKey = `icon${i}`
                    return <a href={iconLink} className={iconClass} style={hidden} key={iconKey}></a>
                })}
            </nav>
        </div>
    )
};
    
export default NavBar;
import './NavBar.css';
import headerGif from '../Images/neta-gif-new.gif';
import React, { useState } from 'react';

const NavBar = ({ srcs }) => {
    const phoneIcons = [{
        icon: 'user',
        href: 'עלי'
    }, {
        icon: 'microphone',
        href: 'הופעות'
    }, {
        icon: 'play',
        href: 'מוזיקה'
    }, {
        icon: 'share',
        href: 'עוד'
    }];

    const [hidden, setHidden] = useState({display: 'none'});
    const [divBackground, setDivBackground] = useState();
    const [arrowDir, setArrowDir] = useState();
    const [spalsh, setSplash] = useState();

    const handlePhoneMenuClick = () => {
        if (hidden.display === 'flex') {
            setHidden({display: 'none'});
            setDivBackground({
                width: '15%',
                height: '15%',
            });
            setArrowDir({
                transform: 'rotate(0deg)'
            });
            setSplash({
                width: '1px',
                height: '1px',
                borderRadius: '50%'
            });
        } else {
            setHidden({display: 'flex'});
            setDivBackground({
                opacity: '0.95',
                width: '100%',
                height: '100%',
            });
            setArrowDir({
                transform: 'rotate(180deg)'
            });
            setSplash({
                backgroundImage: 'linear-gradient(135deg, rgba(50, 51, 51, 1) 47%, rgba(223, 224, 224, 1) 100%)',
                width: '284vmax',
                height: '284vmax',
                top: '-142vmax',
                left: '-142vmax',
                borderRadius: '100%'
            });
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
                <button className='arrow-icon nav-icons fa fa-arrow-right' onClick={handlePhoneMenuClick} style={arrowDir}/>
                <div className='phone-menu-div' style={hidden}>
                    {phoneIcons.map((phoneIcon, i) => {
                        const iconClass = `nav-icons`
                        const iconLink = `#${phoneIcon.href}`
                        const iconKey = `icon${i}`
                        return <a href={iconLink} className={iconClass} key={iconKey}><b>{' ' + phoneIcon.href}</b></a>
                    })}
                </div>
                <div className='splash' style={spalsh}></div>
            </nav>
        </div>
    )
};
    
export default NavBar;
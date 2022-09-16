import './NavBar.css';
import headerGif from '../Images/neta-gif-new.gif';
import React from 'react';

const NavBar = ({ srcs }) => {
    return (
        <header className='header'>
            <nav>
                {srcs.map((src, i) => {
                    const link = `#${src}`;
                    return <a href={link} key={i} className='link'>{src}</a>
                })}
            </nav>
            <img src={headerGif} alt='neta abecsis' className='headerGif'/>
        </header>
    )
};
    
export default NavBar;
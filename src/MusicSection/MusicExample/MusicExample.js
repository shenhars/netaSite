import './MusicExample.css';
import React from 'react';

const MusicExample = ({ src }) => {
    const a = require(`../../Images/${src.imgUrl}.jpg`);
    return (
        <div className='songDiv'>
            <a href={src.videoUrl} target='_blank' rel='noreferrer'>
                {/* <div className='playDiv'>לחץ להשמעה</div> */}
                <img className='songImg' src={a} alt={src.url}/>
            </a>
            <p className='songDetails'>{src.songName}</p>
            <p className='songDetailsLength'>{src.songLength}</p>
        </div>
    )
}

export default MusicExample;
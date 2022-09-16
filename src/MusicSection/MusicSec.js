import './MusicSec.css';
import MusicExample from './MusicExample/MusicExample';
import React from 'react';

export default function MusicSec() {
    const srcs = [{
        imgUrl: "i-used-to-love-her",
        songName: "אהבתי אותה פעם",
        songLength: "2:58",
        videoUrl: "https://www.youtube.com/watch?v=utMbbNLDov4"
    }, {
        imgUrl: "the-song-i-sang-to-you",
        songName: "השיר ששרתי לך",
        songLength: "3:45",
        videoUrl: "https://www.youtube.com/watch?v=8aCJiCEHXto"
    }, {
        imgUrl: "kid",
        songName: "ילד",
        songLength: "3:15",
        videoUrl: "https://www.youtube.com/watch?v=1bbmxXgjm5I"
    }]

    
    return (
        <div className='music' id='מוזיקה'> 
            <h1 className="musicTitle">:כמה טעימות</h1>
            <div className='musicExmp'>
                {srcs.map((exmpSrc, i) => {
                    return <MusicExample src={exmpSrc} key={i} />
                })}
            </div>   
        </div>
    )
}

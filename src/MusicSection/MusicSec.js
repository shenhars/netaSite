import './MusicSec.css';
import MusicExample from './MusicExample/MusicExample';
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function MusicSec() {
    const srcs = [{
        index: 0,
        imgUrl: "i-used-to-love-her",
        songName: "אהבתי אותה פעם",
        songLength: "2:58",
        videoUrl: "https://www.youtube.com/watch?v=utMbbNLDov4"
    }, {
        index: 1,
        imgUrl: "the-song-i-sang-to-you",
        songName: "השיר ששרתי לך",
        songLength: "3:45",
        videoUrl: "https://www.youtube.com/watch?v=8aCJiCEHXto"
    }, {
        index: 2,
        imgUrl: "kid",
        songName: "ילד",
        songLength: "3:15",
        videoUrl: "https://www.youtube.com/watch?v=1bbmxXgjm5I"
    }, {
        index: 3,
        imgUrl: "simple-love-story",
        songName: "סיפור אהבה פשוט",
        songLength: "3:28",
        videoUrl: "https://www.youtube.com/watch?v=r2NYOxZkt0I"
    }]

    const [indexArray, setIndexArray] = useState([srcs[0], srcs[1], srcs[2]]);
    let srcLength = srcs.length - 1;
    
    const handleRightArrow = () => {
        setIndexArray(indexArray.map((element) => {
            if (element.index === srcLength) {
                return srcs[element.index - srcLength];
            } else {
                return srcs[element.index + 1];
            }
        }));
    }

    const handleLeftArrow = () => {
        setIndexArray(indexArray.map((element) => {
            if (element.index === 0) {
                return srcs[element.index + srcLength];
            } else {
                return srcs[element.index - 1];
            }
        }));
    }
    
    return (
        <div className='music' id='music'> 
            <h1 className="musicTitle">:כמה טעימות</h1>
            <div className='musicExmp'>
                <FaArrowAltCircleLeft className='arrow' onClick={handleLeftArrow}/>
                {indexArray.map((exmpSrc, i) => {
                    return <MusicExample src={exmpSrc} key={i} />
                })}
                <FaArrowAltCircleRight className='arrow' onClick={handleRightArrow}/>
            </div>   
        </div>
    )
}

import './AboutSec.css';
import React from 'react';

const AboutSec = () => {
    return (
        <div className='aboutMe' id='aboutMe'>
            <div className='parDiv'>
                <h1 className='aboutHeader'>:קצת עלי</h1>
                <p className='aboutPar'>
                    נטע אבקסיס, 24, נולדתי וגלדתי במודיעין, וכיום חי בירושלים<br />
                    מוזיקה היא כל חיי, החל מגיל קטן - בבית הספר והרכבים שהקמתי, עד היום - בפרויקטים אישיים ובאקדמיה למוזיקה<br />
                    מוזיקה היא התשוקה שלי וממלאת כל חור בחיי
                 </p>
            </div>
        </div>
    )
};

export default AboutSec;
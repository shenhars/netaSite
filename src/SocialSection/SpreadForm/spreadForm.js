import React from 'react';
import './spreadForm.css';

const SpreadForm = () => {
    return (
        <form className='spreadSec'>
            <div className='innerContent'>
                <h3 className='spreadHeader' htmlFor='fname'>הצטרפו לרשימת התפוצה שלי להיות הראשונים לקבל את כל הדברים החדשים</h3><br />
                <input className='spreadInputs' id='fname' type='text' placeholder='שם מלא' /><br />
                <input className='spreadInputs' id='mail' type='mail' placeholder='אימייל' /><br />
                <button className='submissionSpreadButton' type='submit'>הרשמה</button><br />
            </div>
        </form>
    )
};

export default SpreadForm;
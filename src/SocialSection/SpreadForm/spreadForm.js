import axios from 'axios';
import React, { useState } from 'react';
import './spreadForm.css';

const PORT = 'https://netasite-server.onrender.com';
const buildPORT = '4001';

const SpreadForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const addToDatabase = async (e) => {
        e.preventDefault();

        await axios.post(`https://netasite-server.onrender.com/addToDatabase`, {
            name: name,
            email: email
        })
        .then((res) => {
            console.log(res);
            e.target.reset();
            alert('נוספת לרשימה בהצלחה');
        })
        .catch((err) => {
            console.log(err);   
            alert('קרתה תקלה, נסה שוב מאוחר יותר');
        });
    }

    return (
        <form className='spreadSec' onSubmit={addToDatabase}>
            <div className='innerContent'>
                <h3 className='spreadHeader' htmlFor='name'>הצטרפו לרשימת התפוצה שלי להיות הראשונים לקבל את כל הדברים החדשים</h3><br />
                <input className='spreadInputs' id='name' type='text' placeholder='שם מלא' onChange={handleNameChange} required/><br />
                <input className='spreadInputs' id='mail' type='mail' placeholder='אימייל' onChange={handleEmailChange} required/><br />
                <button className='submissionSpreadButton' type='submit'>הרשמה</button><br />
            </div>
        </form>
    )
};

export default SpreadForm;
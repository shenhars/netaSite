import './contactForm.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`https://netasite-server.onrender.com/sendMail`, {
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then((res) => {
            console.log(res);
            e.target.reset();
            alert('!נשלח');
        })
        .catch((err) => {
            console.log(err);
            alert('קרתה תקלה, נסה שוב מאוחר יותר');
        });
        
        // emailjs.sendForm('service_tv65c5d', 'template_lab00tg', e.target, 'Mg28HpnzbfTgc3sge')
        //     .then((result) => {
        //         console.log(result.text);
        //         e.target.reset();
        //         alert('נשלח!');
        //     }, (error) => {
        //         console.log(error.text);
        //         alert('קרתה תקלה, נסה שוב מאוחר יותר');
        // });
    }

    return (
        <form className='contactSec' method='POST' onSubmit={handleSubmit}>
            <div className='innerContact'>
                <h1 className='contactHeader'>:צור קשר</h1>
                <input id='name' name='name' type='text' placeholder='שם מלא' className='contactInputs' onChange={e => setName(e.target.value)} required /><br/>
                <input id='mail' name='mail' type='mail' placeholder='אימייל' className='contactInputs' onChange={e => setEmail(e.target.value)} required /><br />
                <input id='subject' name='subject' type='text' placeholder='נושא' className='contactInputs' onChange={e => setSubject(e.target.value)} required /><br />
                <textarea id='message' name='message' type='text' placeholder='הודעה' className='contactInputs' onChange={e => setMessage(e.target.value)} required /><br />
                <button className='submissionContactButton form-button' type='submit'>שלח</button>
            </div>
        </form>
    )
};

export default ContactForm;
import React from 'react';

function Contact() {
    return (
        <div>
            <form className='mx-3'>
                <div className='my-3'>
                    <label className='form-label'>Name:</label>
                    <input id="nameInput" className='form-control' type="text"></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email:</label>
                    <input id="emailInput" className='form-control' type="email"></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Message:</label>
                    <textarea id='messageInput' className='form-control' rows='8'></textarea>
                </div>
                <button className='btn btn-success' type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;
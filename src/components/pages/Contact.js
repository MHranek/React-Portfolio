import React from 'react';

function Contact() {
    return (
        <div>
            <ul className='list-group list-group-horizontal justify-content-center fs-5 my-5'>
                <li className='list-group-item'>610-304-6516</li>
                <li className='list-group-item'><a href="mailto:mhranekdev@gmail.com">mhranekdev@gmail.com</a></li>
                <li className='list-group-item'><a href="https://github.com/MHranek" target='_blank' rel='noreferrer'>GitHub</a></li>
                <li className='list-group-item'><a href="https://www.linkedin.com/in/michael-hranek/" target='_blank' rel='noreferrer'>Linkedin</a></li>
            </ul>
        </div>
    )
}

export default Contact;
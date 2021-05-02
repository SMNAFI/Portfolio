import React from 'react';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = e => {
        e.preventDefault();

        send(
            'service_ko42xcs',
            'template_ekki4b5',
            toSend,
            'user_5Cb865Eo67COlbvSQYL9N'
        )
            .then((response) => {
                alert("Thank you for your message");
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-dark vh-100">
            <Nav />
            <div className="contact-container">
                <div className="contact mx-auto">
                    {/* <h1 className="text-center mb-3">Contact</h1> */}
                    <div className="text-center pb-4">
                        <h1 className="glitch" data-text="Contact">Contact</h1>
                    </div>
                    <p className="text-center text-secondary">Feel free to drop me a line! I would get back to you within 24 hours.</p>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input
                                    className="form-control message"
                                    type='text'
                                    name='from_name'
                                    placeholder='Your Name*'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input
                                    className="form-control message"
                                    type='text'
                                    name='reply_to'
                                    placeholder='Email*'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control message"
                                rows="5"
                                type='text'
                                name='message'
                                placeholder='Message*'
                                value={toSend.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type='submit' className="btn-main">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
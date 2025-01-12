import React, { useRef } from 'react'
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const FirstContactSect = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2y3p0yo', 'template_amygs4i', formRef.current, {
                publicKey: 'xPwYcJgxZjiL3m6DI',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Your message has been sent successfully!",
                        icon: "success",
                        preConfirm: () => { window.location.reload() }
                    })
                },
                (error) => {
                    Swal.fire({
                        title: "Something wrong!",
                        icon: "error"
                    })
                },
            );
    };

    return (
        <div className='first-contact-sect'>
            <div className="container-fluid">
                <div className="contact-body">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                            <div className="left-side-text">
                                <h1>SAY HI. DON'T BE SHY</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus a lectus semper consequat a at felis. Mauris sed neque id nisl lacinia imperdiet.</p>
                                <div className="contact-sosial-acc">
                                    <a target='_blank' href="https://x.com/"><FaTwitter /></a>
                                    <a target='_blank' href="https://www.linkedin.com/in/firuzeveliyeva2/"><FaLinkedinIn /></a>
                                    <a target='_blank' href="https://www.instagram.com/"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                            <div className="right-side-form">
                                <form ref={formRef} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea required className="form-control" name="message" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" required placeholder='Your Name' className="form-control" name='from_name' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" required placeholder='Your Email' className="form-control" name='email' />
                                    </div>
                                    <div className="send-button">
                                        <button type='submit' className='btn-send btn btn-outline-light btn-shop px-3 py-2'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstContactSect
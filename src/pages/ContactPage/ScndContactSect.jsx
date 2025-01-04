import React from 'react'
import innerImg from '../../../src/assets/images/contactus/inner-img-2.jpg'
const ScndContactSect = () => {
    return (
        <div className='scnd-contact-sect'>
            <div className='scndf-contact-sect'>
                <div className="container-fluid">
                    <h4>CONTACT INFO</h4>
                    <div className="contact-info-table">
                        <table>
                            <tr>
                                <td className='thead'>Office</td>
                                <td><a href="mailto:firuzeveliyeva2@gmail.com">coppola@qodeinteractive.com</a></td>
                                <td><a href="tel:+1234567890">+(123) 456-7890</a></td>
                            </tr>
                            <tr>
                                <td className='thead'>Studio Manager</td>
                                <td>
                                    <p>Lorene Priolet</p>
                                    <a href="mailto:firuzeveliyeva2@gmail.com">coppola@qodeinteractive.com</a>
                                </td>
                                <td><a href="tel:+1234567891">+(123) 456-7891</a></td>
                            </tr>
                            <tr>
                                <td className='thead'>Production</td>
                                <td>
                                    <a href='mailto:firuzeveliyeva2@gmail.com'>coppola@example.com</a><br />
                                    <a href="mailto:firuzeveliyeva2@gmail.com">coppola@qodeinteractive.com</a>
                                </td>
                                <td>
                                    <a href="https://www.google.com/maps/search/1316+Via+del+Parione+Florence+CA+90291,+Italy/@38.149762,-56.616014,3z/data=!3m1!4b1">1316 Via del Parione <br />
                                        Florence CA 90291, Italy</a> <br />
                                    <a href="tel:+1234567892">+(123) 456-7892</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='thead'>Design Office</td>
                                <td><a href="mailto:firuzeveliyeva2@gmail.com">coppola@qodeinteractive.com</a></td>
                                <td><a href="tel:+1234567893">+(123) 456-7893</a></td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>

            <div className="location-sect">
                <div className="row g-0 m-0 p-0">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="loc-img">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4499491063148!2d49.83913827582529!3d40.37671927144608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6343917fff%3A0xae9045d8425faf97!2sMatrix%20academy!5e0!3m2!1saz!2saz!4v1735983941785!5m2!1saz!2saz" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="loc-img">
                            <img src={innerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScndContactSect
import React from 'react';
import footerModel from '../assets/footerModel.png';
import logo from '../assets/logo.png';
import goTop from '../assets/goTop.png';
import PaymentMethods from '../assets/PaymentMethod.png';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='newsLetterSub'>
                <div className='newsLetter'>
                <img className='ftrImg' src={footerModel} alt="footer model"/>
                <div className='newsLetterSubText'>
                    <h2 className='subHead'>Subscribe To Our <a href='#links'>Newsletter!</a></h2>
                    <p className='eng'>We are 100+ professional software engineers with more than 10 years in delive ring super products it because you've seen it.</p>
                    <div className='serachBar'>
                        <input type='text' placeholder='Your Email'/>
                        <button>SUBMIT</button>
                    </div>
                </div>
                </div>
            </div>
            <div className='addNLinks'>
                <div className='address'>
                    <img src={logo} alt="logo"/>
                    <p className='addP'>Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</p>
                    <img className="paymentMethod" src={PaymentMethods} alt='payment methods'/>
                </div>
                <div className='links'>
                    <div className='Resources'>
                        <h2>Resources</h2>
                        <a href='#links'>Carreer</a>
                        <a href='#links'>About Us</a>
                        <a href='#links'>Features</a>
                        <a href='#links'>Service</a>
                    </div>
                    <div className='company'>
                        <h2>Company</h2>
                        <a href='#links'>Company</a>
                        <a href='#links'>Developer</a>
                        <a href='#links'>Our Story</a>
                        <a href='#links'>About Us</a>
                    </div>
                    <div className='support'>
                        <h2>support</h2>
                        <a href='#links'>Customer</a>
                        <a href='#links'>Developer</a>
                        <a href='#links'>Contact</a>
                        <a href='#links'>Services</a>
                    </div>
                </div>
            </div>
            <hr className='horizontalLine'/>
            <div className='copyright'>
                <h3>Copyright © 2024, All Rights Reserved.</h3>
                <img className="goTop" src={goTop} alt='Go to Top'/>
            </div>
        </div>
    );
};

export default Footer;
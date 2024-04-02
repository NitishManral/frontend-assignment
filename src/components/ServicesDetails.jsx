import React from 'react';
import '../styles/ServicesDetails.css';
import greenArrow from '../assets/greenArrow.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import happyClient from '../assets/happyClients.png';
const ServicesDetails = () => {
    return (
        <div className='serviceDetails'>
            <div className='exp'>
                <div className='aboutUs'>
                    <img className='greeArrow' src={greenArrow} alt='greenArrow' />
                    <p className='aboutusTxt'> ABOUT US</p>
                </div>
                <h2 className='weWant'>We Want To Give You The Best Service</h2>
                <p className='weAre'>We are 100+ professional software engineers with more 
                    than 10 year of experience in delivering superior products 
                    Believe it because you have seen it. Here are real numbers
                </p>
                <div className='expInYear'>
                    <div>
                        <h1 className='count24'>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <CountUp end={isVisible ? 24 : 1}  duration={4}/>
                            )}
                        </VisibilitySensor>
                        </h1>
                        <p className='yearsOf'>Year Experience</p>
                    </div>
                    <div className='checkList'>
                        <h3 className="check-list">Product Engineering</h3>
                        <h3 className="check-list">Digital Services</h3>
                        <h3 className="check-list">IT Consultancy</h3>
                        <h3 className="check-list">Digital Services</h3>
                    </div>
                </div>

            </div>
            <div className='happyClient'>
                <img src={happyClient} alt='happyClient' />
            </div>
            
        </div>
    );
};

export default ServicesDetails;
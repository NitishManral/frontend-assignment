import React from 'react';
import amazon from '../assets/Group.png';
import google from '../assets/google.png';
import walmart from '../assets/walmart.png';
import slack from '../assets/slack.png';
import linkedin from '../assets/linkedin.png';
import '../styles/ClientList.css';
const ClientList = () => {
    return (
        <div className='ClientList'>
            <div className='clientNumber'>
                <h1>
                    <span>200+</span>
                    Trusted Partners
                </h1>
            </div>
            <div className='clientList'>
                <img src={amazon} alt="amazon"/>
                <img src={google} alt="google"/>
                <img src={walmart} alt="walmart"/>
                <img src={slack} alt="slack"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
        </div>
    );
};

export default ClientList;
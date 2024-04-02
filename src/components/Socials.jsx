import React from 'react';
import left from '../assets/Rectangle 24.png';
import middle from '../assets/Rectangle 25.png';
import right from '../assets/Rectangle 26.png';
import '../styles/Socials.css';
import upArrow from '../assets/up-arrow.png';

const Socials = () => {
    return (
        <div className='an'>
        <div className='socials'>
            <div className='upper'></div>
            <img src={left} alt='left' />
            <img src={middle} alt='middle' />
            <img src={right} alt='right' />
            <div className='lower'></div>
        </div>
        <div className='gettingStarted'>
            <h3>Checkout Socials</h3>
                <div className='anotherDuckTap'>
                    <img src={upArrow} alt='up-arrow' />
                </div>
             </div>
        </div>

    );
};

export default Socials;
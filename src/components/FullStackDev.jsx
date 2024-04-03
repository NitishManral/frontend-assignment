import React from 'react';
import upArrow from '../assets/up-arrow.png';
import lady from '../assets/lady.png';
import  man from '../assets/man.png';
import boy from '../assets/boy.png';
import '../styles/FullStackDev.css';
const FullStackDev = () => {
    return (
        <div className='fullStackDev'>
            <div className='profiles'>
                <div className="profile">
                    <img className='profilePic' src={lady} alt='lady' />
                    <h2>RACHNA SHETH</h2>
                    <h4>FULL STACK DEVELOPER</h4>
                </div>
                <div className="profile">
                    <img className='profilePic' src={man} alt='lady' />
                    <h2>RACHNA SHETH</h2>
                    <h4>FULL STACK DEVELOPER</h4>
                </div>
                <div className="profile">
                    <img className='profilePic' src={boy} alt='lady' />
                    <h2>RACHNA SHETH</h2>
                    <h4>FULL STACK DEVELOPER</h4>
                </div>
            </div>
            <div className='gettingStarted'>
                    <h3>View All Team</h3>
                <div className='anotherDuckTap'>
                    <img src={upArrow} alt='up-arrow' />
                </div>
             </div>
            
        </div>
    );
};

export default FullStackDev;
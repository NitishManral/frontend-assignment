import React from 'react';
import '../styles/Poster.css';
import PosterGirl from '../assets/posterGirl.svg';
import arrow from '../assets/greenArrow.png';
import upArrow from '../assets/up-arrow.png';
import play from '../assets/play.png';
import Ellipse1 from '../assets/Ellipse 3.png';
import Ellipse2 from '../assets/Ellipse 4.png';
import Ellipse3 from '../assets/Ellipse 5.png';
import Ellipse4 from '../assets/Ellipse 6.png';

function Poster() {
    return (
        <div className='poster'>
           <div className='posterGirl'>
                <img className='posterGirlImg' src={PosterGirl} alt='posterGirl' />
                <div className='posterGirlEllipse'>
                    <div className='duckTap'>
                    <div className="customerSetisfaction">
                        <img src={Ellipse1} alt='customer image1'/>
                        <img src={Ellipse2} alt='customer image2'/>
                        <img src={Ellipse3} alt='customer image3'/>
                        <img src={Ellipse4} alt='customer image4'/>
                    </div>
                    </div>
                    <div className='customerStats'>
                            <h3>5.4k</h3>
                            <p>Clients Satisfaction</p>
                    </div>
                </div>
                
           </div>
           <div className='posterText'>
                <div className='wlc'>
                    <img src={arrow} alt='arrow' />
                    <p className='welcomeTxt'>WELCOME TO JYTHU</p>
                </div>
                    <h2 className='posterTagLine'>A Marketing <a href="#link" className='agency'>Agency</a> To Grow Your Business</h2>
                    <p className='smallIntro'>We are 100+ professional software engineers with more than 10 year of 
                        experience in delivering superior products Believe it because you have 
                        seen it. Here are real numbers
                    </p>
                    <div className='extraLinks'>
                        <div className='gettingStarted'>
                            <h3>GET STARTED</h3>
                            <div className='anotherDuckTap'>
                                <img src={upArrow} alt='up-arrow' />
                            </div>
                        </div>
                        <div className='watchVideo'>
                            <div className='playIcon'>
                                <img src={play} alt='play'/>
                            </div>
                            <h3 className='watchVideoLink'>WATCH VIDEOS </h3>
                        </div>
                    </div>
           </div>
           
        </div>
    );
}

export default Poster;
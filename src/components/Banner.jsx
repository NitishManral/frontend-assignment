import React from 'react';
import '../styles/Banner.css';
import BannerImg from '../assets/bannerImg.png';
const Banner = () => {
    return (
        <div className="banner">
            <div className='bannerMovingPart'>
                <h1 className='bannerText digital'>DIGITAL</h1>
                <img src={BannerImg} alt=""/>
                <h1 className='bannerText JYHTU' >JYHTU</h1>
                <img src={BannerImg} alt=""/>
                <h1 className='bannerText CREATIVE'>CREATIVE</h1>
            </div>
        </div>
    );
};

export default Banner;
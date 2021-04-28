import React from 'react';
import './about.css'

const About = () => {
    return (
        <div id='about'>
            <div className='left-box'>
                <img src={process.env.PUBLIC_URL + '/img/unnamed.gif'} />
            </div>
            <div className='right-box'>
                <h6>LIVE COFFEE MAKING PROCESS</h6>
                <h1>We Telecast our Coffee Making Live</h1>
                <h5>We are here to listen from you deliver exellence </h5>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>

            </div>
        </div>
    );
}

export default About;

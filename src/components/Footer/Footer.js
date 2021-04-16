import React from 'react';
import './Footer.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineDribbble} from 'react-icons/ai';
import {AiOutlineBehance} from 'react-icons/ai';
const Footer = () => {
    return (
        <footer style={{
            background: `url('${process.env.PUBLIC_URL}/img/footer-bg.jpg')`
          }}>
           <div className='footer-inside'>
                <div className='footer-box'>
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <h4>Copyright ©2021 All rights reserved | This template is made with</h4>
                    <div className='copyright'><span><AiOutlineHeart/></span> by <span>Nvard</span></div>
                </div>
                <div className='footer-box'>
                    <h2>Newsletter</h2>
                    <p>Stay update with our latest</p>
                    <div className='send'>
                        <input type='text'/>
                        <button><BsArrowRightShort/></button>
                    </div>
                </div>
                <div className='footer-box'>
                    <h2>Follow us</h2>
                    <p>Let us be social</p>
                    <div className='icons'>
                        <span><Link to='/'><FaFacebookF/></Link></span>
                        <span><Link to='/'><AiOutlineTwitter/></Link></span>
                        <span><Link to='/'><AiOutlineDribbble/></Link></span>
                        <span><Link to='/'><AiOutlineBehance/></Link></span>

                    </div>
                </div>
           </div>
        </footer>
    );
}

export default Footer;

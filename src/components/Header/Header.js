import React,{useState,useEffect} from 'react';
import './Header.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
const Header = () => {
    const [navbar,setNavbar] = useState(false);
    const [burger, setBurger] = useState(false);


    useEffect(() => {
        const Changebackground = () =>{
   

            if( window.scrollY > 100 ) {
              
              
                  setNavbar(true);
            }else{
                setNavbar(false);
            }
        };
        window.addEventListener('scroll',Changebackground);
        
    }, []);
    function burgerClick(){
        setBurger(!burger);
      
    }
    function closeMobile(){
        setBurger(false);
    }
    return (
        <div className={ navbar ? 'header active-header' : 'header'}>
            <div className='logo'>
                    <Link to='main' className='logo-link'  spy={true} smooth={true} duration={500}><img src={process.env.PUBLIC_URL + '/img/logo.png'} /></Link>
                </div>
            <nav className='navbar'>
                
                <div className='menu'>
                    <ul className='menu-list'>
                        <li ><Link to='main' className='effect-5'  spy={true} smooth={true} duration={500}><span>Home</span></Link></li>
                        <li ><Link to='about' className='effect-5'spy={true} smooth={true} duration={500}><span>About</span></Link></li>
                        <li ><Link to='/' className='effect-5'  spy={true} smooth={true} duration={500}><span>Coffe</span></Link></li>
                        <li><Link to='' className='effect-5'  spy={true} smooth={true} duration={500}><span>Review</span></Link></li>
                        <li ><Link to='' className='effect-5'  spy={true} smooth={true} duration={500}><span>Blog</span></Link></li>

                    </ul>
                </div>
                <div className='burger' onClick={burgerClick}>{burger ? (<FiX/>): (<FiAlignRight/>)}</div>
                
                    <ul className={burger ? ' list-mobile': 'close '}>
                        <li ><Link to='main' className='effect-5' onClick={closeMobile} spy={true} smooth={true} duration={500}><span>Home</span></Link></li>
                        <li ><Link to='about' className='effect-5'onClick={closeMobile} spy={true} smooth={true} duration={500}><span>About</span></Link></li>
                        <li ><Link to='/' className='effect-5'  spy={true} smooth={true} duration={500}><span>Coffe</span></Link></li>
                        <li><Link to='' className='effect-5'  spy={true} smooth={true} duration={500}><span>Review</span></Link></li>
                        <li ><Link to='' className='effect-5'  spy={true} smooth={true} duration={500}><span>Blog</span></Link></li>

                    </ul>
              
            </nav>
            
        </div>
    );
}

export default Header;

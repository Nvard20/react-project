import React,{useState,useEffect} from 'react';
import './Header.css';
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
    const [navbar,setNavbar] = useState(false);

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

    return (
        <div className={ navbar ? 'header active-header' : 'header'}>
            <div className='logo'>
                    <Link to='main' className='logo-link'><img src={process.env.PUBLIC_URL + '/img/logo.png'} /></Link>
                </div>
            <nav className='navbar'>
                
                <div className='menu'>
                    <ul className='menu-list'>
                        <li ><Link to='main' className='effect-5'><span>Home</span></Link></li>
                        <li ><Link to='about' className='effect-5'><span>About</span></Link></li>
                        <li ><Link to='/' className='effect-5'><span>Coffe</span></Link></li>
                        <li><Link to='' className='effect-5'><span>Review</span></Link></li>
                        <li ><Link to='' className='effect-5'><span>Blog</span></Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;

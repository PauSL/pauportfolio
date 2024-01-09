import React, {useState} from 'react';
import logo from '../assets/img/logo.png';
import "./NavBarStyless.css";


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };
    const closeMenu = () => {
        setIsOpen(false)
    };

    return (
    <>
        <header className='header' id='header'>
            <nav className='nav container'>
                <a href='index.html' className='logo'><img src={logo} /></a>
               {/* <div className={clicked ? 'show' : ''}> */}
                <div className={isOpen ? 'nav__menu show' : 'nav__menu'} id='nav-menu'>
                    <ul className='nav-list'>
                         <li className='nav-item' style={{"listStyle": "none" }}><a className='active' href="#home">Home</a></li>
                         <li className='nav-item' style={{"listStyle": "none" }}><a href="#skills">Skills</a></li>
                        <li className='nav-item' style={{"listStyle": "none" }}><a href="#projects">Projects</a></li>
                    </ul> 

                    <a href='https://www.linkedin.com/in/pau-saezdev/' target='_blank' ><button className='btnnav' style={{ "--clr": "#06f6fd" }}><span>Let's Connect!</span><i></i></button> </a>
                    
                    {/* Close Button */}
                    <div className='nav-close' onClick={closeMenu}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                {/* Toggle button */}
                <div className='nav-toggle' onClick={toggleNavbar}>
                    <i className="ri-apps-2-line"></i>
                </div>    
            </nav>
        </header>
    </>
    );
 }

 



 


import logoHeaderWhite from "../../imagesSite/logo-blanc.png"
import facebookWhite from "../../imagesSite/facebookwhite.svg"
import instagramWhite from "../../imagesSite/instagramwhite.svg"
import { NavLink} from "react-router-dom"
import React, { useState, useEffect } from 'react';


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOkSlide, setOkSlide] = useState(false);
    
    const handleClickMenu = () => {
        setIsOpen(!isOpen)
        setOkSlide(!isOkSlide)
      }      
    const handleClickScrollhome = () =>{
    const element = document.getElementById("firstPart")
    if(element){
    element.scrollIntoView({behavior : "smooth"})
    }
    }

    const handleClickScrollAbout = () =>{
    const element = document.getElementById("SecondPart")
    if(element){
    element.scrollIntoView({behavior : "smooth"})
    }
    }

    const handleClickScrollService = () =>{
    const element = document.getElementById("threePart")
    if(element){
    element.scrollIntoView({behavior : "smooth"})
    }
    }

    const handleClickScrollContact = () =>{
    const element = document.getElementById("fourPart")
    if(element){
    element.scrollIntoView({behavior : "smooth"})
    }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
          const header = document.querySelector('nav');
          header.classList.toggle('scrolled', window.scrollY > 0);
        });
      }, []);



return (
    <div className="header">
    <nav>
        <div className="imgLogo">
            <NavLink to={{ hash: '#top' }} onClick={function(event){ handleClickScrollhome(); handleClickMenu()}}><img
                    src={logoHeaderWhite} alt="Logo de l'agence PandaCom" />
            </NavLink>
        </div>
        <ul className={`menu ${isOpen ? 'menuResponsive' : ''}`}>
            <li className="souligne">
                <NavLink to={{ hash: '#apropos' }} onClick={function(event){ handleClickScrollAbout(); handleClickMenu()}}>ABOUT
                </NavLink>
            </li>
            <li className="souligne">
                <NavLink to={{ hash: '#service' }} onClick={function(event){ handleClickScrollService(); handleClickMenu()}}>SERVICES
                </NavLink>
            </li>
            <li className="souligne">
                <NavLink to={{hash: '#contact' }} onClick={function(event){ handleClickScrollContact(); handleClickMenu()}}>CONTACT
                </NavLink>
            </li>
            <li className="social">
                <ul>
                    <li>
                        <NavLink to={`https://www.facebook.com/Pandacombelgium`} target={"_blank"}><img
                                src={facebookWhite} alt="facebook-logo" /></NavLink>
                    </li>
                    <li>
                        <NavLink to={`https://www.instagram.com/panda_com_belgium/`} target={"_blank"}><img
                                src={instagramWhite} alt="instagram-logo" /></NavLink>
                    </li>
                </ul>
            </li>
            <li className="langue">
                <NavLink className="fr " to={{ pathname : '/'}}>FR</NavLink> <span>|</span>
                <NavLink className="en langueSelect" to={{ pathname : '/en'}}>EN</NavLink>
            </li>
        </ul>
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleClickMenu}>
            <div className="bar1 bar"></div>
            <div className="bar2 bar"></div>
            <div className="bar3 bar"></div>
        </div>
    </nav>
</div>
);
}

export default NavBar;
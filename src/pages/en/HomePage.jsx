import NavBarFr from '../../components/en/NavBar'
import About from '../../components/en/About'
import Team from '../../components/en/Team'
import accueilGif from "../../imagesSite/slogan.gif"
import fleche from "../../imagesSite/arrow.png"
import MenuService from '../../components/en/SliderService/Menu';
import SlideService from '../../components/en/SliderService/Slide';
import panda from "../../imagesSite/panda.png"
import logoHeaderWhite from "../../imagesSite/logo-blanc.png"
import facebookWhite from "../../imagesSite/facebookwhite.svg"
import instagramWhite from "../../imagesSite/instagramwhite.svg"
import { NavLink} from "react-router-dom"
import sal from 'sal.js';
import SliderClient from '../../components/SliderClient';
import React, { useEffect } from 'react';

const HomePage = (props) => {
   


useEffect(() => {
sal({once: false,});
}, []);

const handleClickScrollAbout = () =>{
const element = document.getElementById("SecondPart")
if(element){
element.scrollIntoView({behavior : "smooth"})
}
}

return (
<div className="global">
    <div className="home" id="firstPart">
        <NavBarFr></NavBarFr>
        <div className="contentHome">
            <h1 data-sal="slide-up" data-sal-delay="300">PANDA'COM</h1>
            <h2>Your communication agency</h2>
        </div>
        <div className="slogan">
            <img src={accueilGif} alt="Slogan de Pandacom" />
        </div>
        <div id="arrow">
            <NavLink to={{ hash: '#propos' }} onClick={handleClickScrollAbout}><img src={fleche} alt="flèche" />
            </NavLink>
        </div>
    </div>
    <div className="aboutMixTeam" id="SecondPart">
        <About></About>
        <div className="bande"></div>
        <Team></Team>
    </div>
    <div className="service" id="threePart">
        <h2 data-sal="slide-right" data-sal-delay="300">Nos Services</h2>
        <div className="carouFull">
            <MenuService></MenuService>
            <SlideService></SlideService>
        </div>
        <div className="bande"></div>
        <div className="testimonial">
        <h3>They trust us</h3>
            <SliderClient></SliderClient>
        </div>
    </div>
    <div className="Contact" id="fourPart">
        <h2 data-sal="slide-right" data-sal-delay="300">Contact us</h2>
        <div className="contentContact">
            <div className="left">
                <img src={panda} alt="panda" data-sal="flip-up" data-sal-delay="500" />
                <h3>PANDA'COM</h3>
                <h4>AGENCE CREATIVE DIGITALE</h4>
                <div className="horaire">
                <p>From Monday to Friday, from 10am to 6pm</p>
                </div>
                <div className="adresse">
                    <p>Rue Grande 208 Q</p>
                    <p>7020 Maisières (Belgique)</p>
                </div>
                <div className="mail">
                    <p>contact@pandacom.be</p>
                </div>
                <div className="phone">
                    <p>+32 (0)471 56 05 90</p>
                </div>
            </div>
            <div className="right" data-sal="slide-left" data-sal-delay="500">
                <div className="text1">
                <p>Let's have a coffee together?</p><p>Great ideas are often born that way!</p>
                </div>
                <div className="text2">
                    <p>Make your project</p>
                    <p className="font" data-sal="zoom-in" data-sal-delay="700">Pandastic !</p>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="contentFooter">
            <div className="left">
                <img src={logoHeaderWhite} alt="Logo de l'agence PandaCom" />
            </div>
            <div className="center">
                <p>Copyright ©PANDA'COM2023</p>
            </div>
            <div className="right">
                <NavLink to={`https://www.facebook.com/Pandacombelgium`} target={"_blank"}><img src={facebookWhite}
                        alt="facebook-logo" /></NavLink>
                <NavLink to={`https://www.instagram.com/panda_com_belgium/`} target={"_blank"}><img src={instagramWhite}
                        alt="instagram-logo" /></NavLink>
            </div>
        </div>
    </footer>


</div>
);
}

export default HomePage;
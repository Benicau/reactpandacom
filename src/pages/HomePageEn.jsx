import logoHeaderWhite from "../imagesSite/logo-blanc.png"
import facebookWhite from "../imagesSite/facebookwhite.svg"
import instagramWhite from "../imagesSite/instagramwhite.svg"
import accueilGif from "../imagesSite/slogan.gif"
import fleche from "../imagesSite/arrow.png"
import arrow from "../imagesSite/Arrow1.png"
import panda from "../imagesSite/panda.png"
import pandaAvatar from "../imagesSite/pandavatar.png"
import { NavLink } from "react-router-dom"
import DOMPurify from 'dompurify';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from "../components/SliderEn"
import sal from 'sal.js';




const HomePageEn = (props) => {
//link navigation


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
    
// call axio database

const [page, setPage] = useState([]);
const [team, setTeam] = useState([]);
const [marque, setMarque] = useState([]);
var htmlString = ''

useEffect(() => {
Promise.all([
axios.get('https://symfony.pandacom.be/api/pages/1'),
axios.get('https://symfony.pandacom.be/api/teams'),
axios.get('https://symfony.pandacom.be/api/marques'),
])
.then(([pageResponse, teamResponse, marqueResponse]) => {
setPage(pageResponse.data);
setTeam(teamResponse.data['hydra:member']);
setMarque(marqueResponse.data['hydra:member']);
})
.catch(error => {
console.error('Error:', error);
});
}, []);
htmlString = page.textEn
const sanitizedHtml = DOMPurify.sanitize(htmlString);
useEffect(() => {
    sal();
  }, []);



return (
<div className="global">
    <div className="home" id="firstPart">
        <nav>
            <div className="imgLogo">
                
                <NavLink to={{ pathname: '/', hash: '#top' }} onClick={handleClickScrollhome}><img src={logoHeaderWhite} alt="Logo de l'agence PandaCom" />
                    </NavLink>
            </div>
            <ul className="menu">
                <li>
                    <NavLink to={{ pathname: '/', hash: '#apropos' }} onClick={handleClickScrollAbout}>ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to={{ pathname: '/', hash: '#service' }} onClick={handleClickScrollService}>SERVICES
                    </NavLink>
                </li>
                <li>
                <NavLink to={{ pathname: '/', hash: '#contact' }} onClick={handleClickScrollContact}>CONTACT
                    </NavLink>
                </li>
                <li className="social">
                    <ul>
                        <li>
                            <NavLink to={`https://www.facebook.com/Pandacombelgium`} target={"_blank"}><img src={facebookWhite} alt="facebook-logo" /></NavLink>
                        </li>
                        <li>
                            <NavLink to={`https://www.instagram.com/panda_com_belgium/`} target={"_blank"}><img src={instagramWhite} alt="instagram-logo" /></NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="" className="fr ">FR</NavLink> <span>|</span>
                    <NavLink to="" className="en langueSelect">EN</NavLink>
                </li>
            </ul>
        </nav>
        <div className="contentHome">
            <h1 data-sal="slide-up" data-sal-delay="300">PANDA'COM</h1>
            
        </div>
        <div className="banner" data-sal="zoom-in" data-sal-delay="500" >
            <h3>GRAPHIC DESIGN <span>|</span> COMMUNICATION <span>|</span> PRINT <span>|</span> COVERING <span>| </span>
            SOCIAL NETWORKS <span>|</span> LETTERING</h3>
                 
        </div>
        <div className="slogan">
            <img src={accueilGif} alt="Slogan de Pandacom" />
        </div>
        <div id="arrow">
            <NavLink to={{ pathname: '/', hash: '#propos' }} onClick={handleClickScrollAbout}><img src={fleche}
                    alt="flèche" /></NavLink>
        </div>
    </div>

    <div className="aboutMixTeam" id="SecondPart">
        <div className="about">
            <h2>{page.titleEn}</h2>
            <div className="contenuAbout">
                <div className="logoHight">
                    <img src={panda} alt="panda" />
                    <h3>AGENCE <br /> CREATIVE <br />DIGITALE</h3>
                </div>
                <div className="texteApropos">
                    <div className="rendu"  dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                    <NavLink to={{ pathname: '/', hash: '#contact' }} onClick={handleClickScrollService}>Discover our services<img src={arrow} alt="Découvrir les différents services de PandaCom" /></NavLink>
                </div>
            </div>
        </div>
        <div className="bande"></div>
        <div className="team" >
            <div className="logoTeam">
                <h4>THE TEAM<br /><span>Pandastic</span></h4>
            </div>
            <div className="collectionMember">
                {team.map(item =>(
                <div key={item.id} className="teamMembre">
                    <div className="avatar">
                    <img className="pandaAvatar" src={pandaAvatar} alt="Panda avatar" />
                    {item.image == null ? <img className="noPict" src={pandaAvatar} alt="Panda avatar" /> : <img className="pict" src={"http://127.0.0.1:8000/images/" + item.image} alt="Membre team Pandacom" />}
                    
                    
                    </div>
                    
                    <h2>{item.name} - {item.firstname}</h2>
                    <h3>{item.rolesEn}</h3>
                </div>
                ))
                }

            </div>
        </div>
    </div>
    <div className="service" id="threePart">
        <h2>Services</h2>

        <div className="slideServices">
        <Slider></Slider>
          
        </div>
        <div className="bande"></div>
        <div className="testimonial">
            <h3>They trust us</h3>
            <div className="sliderMarque">
            {marque.map(logo =>(
                <div key={logo.id} className="marque">  
                    <img className="logo" src={"https://symfony.pandacom.be/images/" + logo.images} alt={logo.name} />
                </div>
                ))
                }
            </div>
        </div>
    </div>
    <div className="Contact" id="fourPart">
    <h2>CONTACT US</h2>
    <div className="contentContact">
    <div className="left">
        <img src={panda} alt="panda" />
        <h3>PANDA'COM</h3>
        <h4>DIGITAL CREATIVE AGENCY</h4>
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
    <div className="right">
        <div className="text1"><p>A project ?</p><p>An event ?</p><p>A business ?</p> <p>An idea ?</p></div>
        <div className="text2"><p>Make your project</p> <p className="font">Pandastic !</p></div>
    </div>
    </div>
    </div>
    <footer>
        <div className="contentFooter">
            <div className="left">
                <img src={logoHeaderWhite} alt="Logo de l'agence PandaCom" />
            </div>
            <div className="center">
                <p>Copyright ©PANDA'COM2023 - Designed by PANDA'COM</p>
            </div>
            <div className="right">
                        <NavLink to={`https://www.facebook.com/Pandacombelgium`} target={"_blank"}><img src={facebookWhite} alt="facebook-logo" /></NavLink>
                        <NavLink to={`https://www.instagram.com/panda_com_belgium/`} target={"_blank"}><img src={instagramWhite} alt="instagram-logo" /></NavLink>            
            </div>
        
        

        </div>
    </footer>
</div>
);
}

export default HomePageEn;
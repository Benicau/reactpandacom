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
import Slider from "../components/Slider";
import sal from 'sal.js';





const HomePageFr = (props) => {
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
htmlString = page.textFr
const sanitizedHtml = DOMPurify.sanitize(htmlString);
useEffect(() => {
    sal({
       
        once: false,
    });
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
                    <NavLink to={{ pathname: '/', hash: '#apropos' }} onClick={handleClickScrollAbout}>À PROPOS
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
                    <NavLink to="" className="fr langueSelect">FR</NavLink> <span>|</span>
                    <NavLink to="" className="en">EN</NavLink>
                </li>
            </ul>
        </nav>
        <div className="contentHome">
            <h1 data-sal="slide-up" data-sal-delay="300">PANDA'COM</h1>
            
        </div>
        <div className="banner" >
            <h3 data-sal="zoom-in" data-sal-delay="300">GRAPHISME <span>|</span> COMMUNICATION <span>|</span> PRINT <span>|</span> COVERING <span>| </span>
                 RESEAUX SOCIAUX <span>|</span> LETTRAGE</h3>
                 
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
            <h2 data-sal="slide-left" data-sal-delay="300">{page.titleFr}</h2>
            <div className="contenuAbout">
                <div className="logoHight" data-sal="flip-down" data-sal-delay="400">
                    <img src={panda} alt="panda" />
                    <h3>AGENCE <br /> CREATIVE <br />DIGITALE</h3>
                </div>
                <div className="texteApropos" data-sal="slide-left" data-sal-delay="500">
                    <div className="rendu"  dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                    <NavLink to={{ pathname: '/', hash: '#contact' }} onClick={handleClickScrollService}>Découvrir
                        nos services<img src={arrow} alt="Découvrir les différents services de PandaCom" /></NavLink>
                </div>
            </div>
        </div>
        <div className="bande"></div>
        <div className="team" >
            <div className="logoTeam">
                <h4>LA TEAM<br /><span>Pandastic</span></h4>
            </div>
            <div className="collectionMember">
                {team.map(item =>(
                <div key={item.id} className="teamMembre">
                    <div className="avatar">
                    <img className="pandaAvatar" src={pandaAvatar} alt="Panda avatar" />
                    {item.image == null ? <img className="noPict" src={pandaAvatar} alt="Panda avatar" /> : <img className="pict" src={"http://127.0.0.1:8000/images/" + item.image} alt="Membre team Pandacom" />}
                    
                    
                    </div>
                    
                    <h2>{item.name} - {item.firstname}</h2>
                    <h3>{item.rolesFr}</h3>
                </div>
                ))
                }

            </div>
        </div>
    </div>
    <div className="service" id="threePart">
        <h2 data-sal="slide-right" data-sal-delay="300">Services</h2>

        <div className="slideServices" data-sal="slide-left" data-sal-delay="400">
        <Slider></Slider>
          
        </div>
        <div className="bande"></div>
        <div className="testimonial">
            <h3>Ils nous font confiance</h3>
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
    <h2 data-sal="slide-right" data-sal-delay="300">CONTACTEZ-NOUS</h2>
    <div className="contentContact">
    <div className="left">
        <img src={panda} alt="panda" data-sal="flip-up" data-sal-delay="500"/>
        <h3>PANDA'COM</h3>
        <h4>AGENCE CREATIVE DIGITALE</h4>
        <div className="horaire">
        <p>Du lundi au vendredi de 10h à 18h</p>
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
        <div className="text1"><p>Un project ?</p><p>Un Evénement ?</p><p>Un commerce ?</p> <p>Une Idée ?</p></div>
        <div className="text2"><p>Rendez votre project</p> <p className="font" data-sal="zoom-in" data-sal-delay="700">Pandastic !</p></div>
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

export default HomePageFr;
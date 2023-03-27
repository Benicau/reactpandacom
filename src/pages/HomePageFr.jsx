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
import sal from 'sal.js';
import SliderClient from '../components/SliderClient';

var activeService = 0;
var nbr = '1'


const HomePageFr = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOkSlide, setOkSlide] = useState(false);
    
    const handleClickMenu = () => {
        setIsOpen(!isOpen)
        setOkSlide(!isOkSlide)
      }

    const handleLanguageChange = (lang) => {
        localStorage.setItem('langage', lang);
        window.location.reload(true);
        };
        



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

const handleClickservice = (slide) =>{
    activeService = parseInt(slide) 
}

const serviceAffiche = (service) =>{
   if (nbr>0)
   {
    const slide = document.querySelectorAll('.slideService')
     const linkMenu = document.querySelectorAll('.linkMenuService')
     const linkMenu2 = document.querySelectorAll('.menuServiceLi')
     activeService=parseInt(activeService)
    
    slide.forEach((donnee,index)=>{
       var numberSlide = donnee.getAttribute('data') 
        numberSlide = parseInt(numberSlide)
       if(numberSlide === activeService)
       {
       
           donnee.classList.add('activeService')
           donnee.classList.remove('noActiveService')
       }
       else {
           donnee.classList.add('noActiveService')
           donnee.classList.remove('activeService')
       }
    })
    linkMenu.forEach((e =>{
        var color = e.getAttribute('data')
        color = parseInt(color)
       
        if(color === activeService)
        {
            
            e.style.color= "#00BCC8";
        }
        else
        {
            e.style.color= "#ffffff";
        } 
     }))


     linkMenu2.forEach((h =>{
        var color2 = h.getAttribute('data')
        color2=parseInt(color2)
        if(color2 === activeService)
        {
            if (window.innerWidth < 768) {
                h.style.backgroundColor= "#00BCC8";
              } else {
                h.style.backgroundColor= "#121212";
              }
        }
        else
        {
            if (window.innerWidth < 768) {
                h.style.backgroundColor= "white";
              } else {
                h.style.backgroundColor= "#121212";
              }
            
        } 
     }))
     
   }
  
}

var fin = 0
const ServiceDepart = (nbrService) => {
    const slideRecup = document.querySelectorAll('.slideService')
    
    if((nbrService === slideRecup.length && fin ===0))
    {
       fin++ 
       depart()
    }

}

const depart = () =>{
    var active
    setInterval(() => {
        serviceAffiche(activeService)
        active = parseInt(activeService)   
        if(isNaN(active))
        {
            activeService = 0
        }
    else
        {
            if( active === nbr-1)
        {
            activeService = 0
        }
        else{
            active++
            activeService = active
        }
            }
     
    }, 5000);
 
}




// call axio database
const [service, setService] = useState([]);
const [page, setPage] = useState([]);
const [team, setTeam] = useState([]);

var htmlString = ''

useEffect(() => {
Promise.all([
axios.get('https://symfony.pandacom.be/api/pages/1'),
axios.get('https://symfony.pandacom.be/api/teams'),
axios.get('https://symfony.pandacom.be/api/services')
])
.then(([pageResponse, teamResponse, serviceResponce]) => {
setPage(pageResponse.data);
setTeam(teamResponse.data['hydra:member']);
setService(serviceResponce.data['hydra:member']);
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


  useEffect(() => {
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('nav');
        header.classList.toggle('scrolled', window.scrollY > 0);
        
        nbr = document.querySelectorAll('.slideService').length
        ServiceDepart(nbr)
        
        
      });

    window.addEventListener('click', () =>{
         if(activeService !== '')
    {
     const slide = document.querySelectorAll('.slideService')
     const linkMenu = document.querySelectorAll('.linkMenuService')
     const linkMenu2 = document.querySelectorAll('.menuServiceLi')
     activeService=parseInt(activeService)

     slide.forEach((donnee,index)=>{
        var numberSlide = donnee.getAttribute('data') 
         numberSlide = parseInt(numberSlide)
        if(numberSlide === activeService)
        {
        
            donnee.classList.add('activeService')
            donnee.classList.remove('noActiveService')
        }
        else {
            donnee.classList.add('noActiveService')
            donnee.classList.remove('activeService')
        }
     })
     linkMenu.forEach((e =>{
        var color = e.getAttribute('data')
        color = parseInt(color)
       
        if(color === activeService)
        {
            
            e.style.color= "#00BCC8";
        }
        else
        {
            e.style.color= "#ffffff";
        } 
     }))
     linkMenu2.forEach((h =>{
        var color2 = h.getAttribute('data')
        color2=parseInt(color2)
        if(color2 === activeService)
        {
            if (window.innerWidth < 768) {
                h.style.backgroundColor= "#00BCC8";
              } else {
                h.style.backgroundColor= "#121212";
              }
        }
        else
        {
            if (window.innerWidth < 768) {
                h.style.backgroundColor= "white";
              } else {
                h.style.backgroundColor= "#121212";
              }
            
        } 
     }))
     
    }
    })
  }, []);






return (
<div className="global">
    <div className="home" id="firstPart">
        <div className="header">
            <nav>
                <div className="imgLogo">
                    <NavLink to={{ pathname: '/', hash: '#top' }} onClick={function(event){ handleClickScrollhome(); handleClickMenu()}}><img
                            src={logoHeaderWhite} alt="Logo de l'agence PandaCom" />
                    </NavLink>
                </div>
                <ul className={`menu ${isOpen ? 'menuResponsive' : ''}`}>
                    <li className="souligne">
                        <NavLink to={{ pathname: '/', hash: '#apropos' }} onClick={function(event){ handleClickScrollAbout(); handleClickMenu()}}>À PROPOS
                        </NavLink>
                    </li>
                    <li className="souligne">
                        <NavLink to={{ pathname: '/', hash: '#service' }} onClick={function(event){ handleClickScrollService(); handleClickMenu()}}>SERVICES
                        </NavLink>
                    </li>
                    <li className="souligne">
                        <NavLink to={{ pathname: '/', hash: '#contact' }} onClick={function(event){ handleClickScrollContact(); handleClickMenu()}}>CONTACT
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
                        <NavLink className="fr langueSelect" onClick={() => handleLanguageChange('fr')}>FR</NavLink> <span>|</span>
                        <NavLink className="en" onClick={() => handleLanguageChange('en')}>EN</NavLink>
                    </li>
                </ul>
                <div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleClickMenu}>
                    <div className="bar1 bar"></div>
                    <div className="bar2 bar"></div>
                    <div className="bar3 bar"></div>
                </div>
            </nav>
        </div>
        <div className="contentHome">
            <h1 data-sal="slide-up" data-sal-delay="300">PANDA'COM</h1>
            <h2>Votre agence de communication</h2>
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
                    <h3>AGENCE <span>CRÉATIVE</span></h3>
                </div>
                <div className="texteApropos" data-sal="slide-left" data-sal-delay="500">
                    <div className="rendu" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
                    <NavLink to={{ pathname: '/', hash: '#contact' }} onClick={handleClickScrollService}>Découvrir
                        nos services<img src={arrow} alt="Découvrir les différents services de PandaCom" /></NavLink>
                </div>
            </div>
        </div>
        <div className="bande"></div>
        <div className="team">
            <div className="logoTeam">
            <h4>LA TEAM<br /><span>Pandastic</span></h4>
            </div>
            <div className="collectionMember">
                {team.map((item) =>(
                <div key={item.id} className="teamMembre">
                    <div className="avatar">
                        <img className="pandaAvatar" src={pandaAvatar} alt="Panda avatar" />
                        {item.image == null ? <img className="noPict" src={pandaAvatar} alt="Panda avatar" /> : <img
                            className="pict" src={"https://symfony.pandacom.be/images/" + item.image}
                            alt="Membre team Pandacom" />}
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
    <h2 data-sal="slide-right" data-sal-delay="300">Nos Services</h2>
        <div className="carouFull">
            <div className="left" data-sal="slide-right" data-sal-delay="300">
                <nav>
                    <ul className="Menuservice">
                        {service.map((serviceMenu, index )=>(
                        <li key={serviceMenu.id} data={index} className="menuServiceLi">
                            <NavLink data={index} className="linkMenuService" onClick={() => handleClickservice(index)}>{serviceMenu.titleFr} </NavLink>
                        </li>
                        ) )}
                    </ul>
                </nav>
            </div>
            <div className="right" data-sal="slide-left" data-sal-delay="500">
                {service.map((serviceSlide, index) =>(
                <div key={serviceSlide.id} className="slideService" data={index}>
                    <div className="content">
                        <div className="textService">
                            <h3>{serviceSlide.titleFr}</h3>
                            <div className="text" dangerouslySetInnerHTML={{ __html: serviceSlide.description }} />
                            
                        </div>
                            <img src={"https://symfony.pandacom.be/images/" + serviceSlide.image} alt="" />
                    </div>
                </div>
                ) )}
            </div>
        </div>
        <div className="bande"></div>
        <div className="testimonial">
            <h3>Ils nous font confiance</h3>
            <SliderClient></SliderClient>
        </div>
    </div>
    <div className="Contact" id="fourPart">
        <h2 data-sal="slide-right" data-sal-delay="300">Contactez-nous</h2>
        <div className="contentContact">
            <div className="left">
                <img src={panda} alt="panda" data-sal="flip-up" data-sal-delay="500" />
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
            <div className="text1">
                    <p>Un project ?</p>
                    <p>Un Evénement ?</p>
                    <p>Un commerce ?</p>
                    <p>Une Idée ?</p>
                </div>
                <div className="text2">
                    <p>Rendez votre project</p>
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

export default HomePageFr;
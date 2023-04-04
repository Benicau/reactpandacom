import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink} from "react-router-dom"





const Menu = (props) => {

   
    var serviceAffiche = (slideActif) =>{
        const slide = document.querySelectorAll('.slideService')
        const linkMenu = document.querySelectorAll('.linkMenuService')
        const linkMenu2 = document.querySelectorAll('.menuServiceLi')
     
        console.log(slideActif)
        localStorage.setItem('slide', parseInt(slideActif));
        console.log(localStorage.getItem('slide'))
       
        slide.forEach((donnee, index)=>{
          if((slideActif!==0))
          {
              slide[0].style.display = "none";
           
          }
          else
          {
              slide[0].style.display = "block";   
          }
          var numberSlide = donnee.getAttribute('data') 
          numberSlide = parseInt(numberSlide)
          if(numberSlide === slideActif)
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
         
          if(color === slideActif)
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
          if(color2 === slideActif)
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

   
    const [service, setService] = useState([])  

    


        useEffect(() => {
            axios.get('https://symfony.pandacom.be/api/services')
            .then(response => {
            setService(response.data['hydra:member']); 
            })
            .catch(error => {
            console.error(error);

            });
            }, []);

            

return (
            <div className="left" data-sal="slide-right" data-sal-delay="300">
                <nav>
                <ul className="Menuservice">
                        {service.map((serviceMenu, index )=>(
                        <li key={serviceMenu.id} data={index} className="menuServiceLi">
                            <NavLink data={index} className="linkMenuService" onClick={() => serviceAffiche(index)}>{serviceMenu.titleEn} </NavLink>
                        </li>
                        ) )}
                    </ul>
                </nav>
            </div>
);
}

export default Menu;
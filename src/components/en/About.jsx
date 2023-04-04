import axios from 'axios';
import panda from "../../imagesSite/panda.png"
import { NavLink} from "react-router-dom"
import arrow from "../../imagesSite/Arrow1.png"
import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'


const About = (props) => {
const [page, setPage] = useState([]);

const handleClickScrollService = () =>{
const element = document.getElementById("threePart")
if(element){
element.scrollIntoView({behavior : "smooth"})
}
}

useEffect(() => {
axios.get('https://symfony.pandacom.be/api/pages/1')
.then(response => {
setPage(response.data);
})
.catch(error => {
console.error(error);
});
}, []);



return ( 
<div className="about">
<HelmetProvider>
    <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Pandacom: Your communication agency</title>
        <meta name='title' content={page.descriptionEn}/>
        <meta name='description' content={page.metaTittleEn}/>
    </Helmet>
</HelmetProvider>
    <h2 data-sal="slide-left" data-sal-delay="300">{page.titleEn}</h2>
    <div className="contenuAbout">
        <div className="logoHight" data-sal="flip-down" data-sal-delay="400">
            <img src={panda} alt="panda" />
            <h3>AGENCE <span>CRÉATIVE</span></h3>
        </div>
        <div className="texteApropos" data-sal="slide-left" data-sal-delay="500">
            <div className="rendu" dangerouslySetInnerHTML={{ __html: page.textEn}} />
            <NavLink to={{ hash: '#contact' }} onClick={handleClickScrollService}>Discover our services<img src={arrow} alt="Découvrir les différents services de PandaCom" /></NavLink>
        </div>
    </div>
</div>
);
}

export default About;
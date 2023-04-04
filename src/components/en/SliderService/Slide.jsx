import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Slide = (props) => {

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
    <div className="right" data-sal="slide-left" data-sal-delay="500">
    {service.map((serviceSlide, index) =>(
        <div key={serviceSlide.id} className="slideService" data={index}>
            <div className="content">
                <div className="textService">
                    <h3>{serviceSlide.titleEn}</h3>
                    <div className="text" dangerouslySetInnerHTML={{ __html: serviceSlide.descriptionEn }} />
                    
                </div>
                    <img src={"https://symfony.pandacom.be/images/" + serviceSlide.image} alt="" />
            </div>
        </div>
        ) )}
    </div>
);
}

export default Slide;
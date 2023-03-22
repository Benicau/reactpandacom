import axios from 'axios';
import React, { useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





const Slider = (props) => {

const [service, setService] = useState([]);
useEffect(() => {
Promise.all([
axios.get('https://symfony.pandacom.be/api/services')
])
.then(([serviceResponce]) => {
setService(serviceResponce.data['hydra:member']);
})
.catch(error => {
console.error('Error:', error);
});
}, []);


return (
<Carousel 
showArrows={true}
showIndicators={true}
showThumbs={false}
showStatus={true}
autoPlay={true}
infiniteLoop={true}
stopOnHover={false}
transitionTime={3050}
interval={8000}
>
    {service.map(item =>(
        <div className='itemService' key={item.id}>
            <div className="right">
            <h3>{item.titleFr}</h3> 
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
            <div className="left">
                <img src={"https://symfony.pandacom.be/images/" + item.image} alt="" />
            </div>
        </div>
    ) )}
    
</Carousel>
);
}

export default Slider
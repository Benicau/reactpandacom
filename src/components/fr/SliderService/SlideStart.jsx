import { useEffect} from "react";


const SlideStart = (props) => {
  

 var nbr=''
 localStorage.clear();


 const startSlide = () => {
  let slide = localStorage.getItem('slide') || 1; 
  setInterval(() => {
  slide = parseInt(slide); 
  serviceAffiche(slide);
    
    if (slide === (nbr -1)) {
      localStorage.setItem('slide', 0);
      slide = 0; 
    } else {
      slide++; 
      localStorage.setItem('slide', slide);
    }
  }, 9000);

};


 var serviceAffiche = (slideActif) =>{
  const slide = document.querySelectorAll('.slideService')
  const linkMenu = document.querySelectorAll('.linkMenuService')
  const linkMenu2 = document.querySelectorAll('.menuServiceLi')
  nbr = slide.length
 
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
  
 
    useEffect(() => {
      setTimeout(() => {
        clearInterval();
        serviceAffiche (0)
        startSlide()
      }, 300);    
      });

    
return null
}

export default SlideStart;
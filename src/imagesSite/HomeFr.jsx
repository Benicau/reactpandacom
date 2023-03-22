import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify"
import enveloppe from "../../images/envelope-solid.svg"
import fleche from "../../images/arrow.png"
import cookies from "../../images/cookie-bite-solid.svg"

const HomeFr = () => {

    const handleClickScrollAbout = () =>{
        const element = document.getElementById("about")
        if(element){
            element.scrollIntoView({behavior : "smooth"})
        }
    }
    
    return ( 
       <>
        <div id="cookies">
            <h3><img src={cookies} style={{width: "30px"}} alt="" />Ce site utilise des cookies</h3>
            <p>Nous utilisons des cookies pour assurer le bon fonctionnement du référencement du site web. </p>
            <button className="btncookies" >Accepter les cookies</button>
        </div>
        
        <div className="slide" id="home">
            <div id="popNews">
                <img src={enveloppe} style={{width:"50px"}} alt="" />
                <p>Laissez-nous votre adresse-mail pour vous inscrire à la newsletter&nbsp;! </p>
                
                <form action="">
                    <input type="mail" placeholder="Votre adresse-mail" /><br />
                    <button type="submit">Confirmer</button>
                    <button type="submit" id="cancel" style={{marginTop:"10px"}}>Annuler</button>
                </form>
            </div>
            <div className="content">
                <div className="homeContent">
                    <h1>PANDA'COM</h1>
                    <div id="title">
                        <h2 id="animate-text">BE CREATIVE.</h2>
                    </div> 
                </div>
        
                <div className="banner">
                    <h5>GRAPHISME  |  COMMUNICATION  |  PRINT  |  COVERING  |  RESEAUX SOCIAUX  |  LETTRAGE</h5>
                </div>

                <div className="buttons">
                    <NavLink id="newSub" to="#"><button>S'inscrire à la newsletter</button></NavLink>
                    {/* <NavLink to="#"><button>Demande de devis</button></NavLink> */}
                </div>
            </div>
            
            <div id="arrow"><NavLink onClick={handleClickScrollAbout} ><img src={fleche} alt="flèche" /></NavLink></div>
        </div>
       </>
     );
}
 
export default HomeFr;
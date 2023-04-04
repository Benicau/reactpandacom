import pandaAvatar from "../../imagesSite/pandavatar.png"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Team = (props) => {

const [team, setTeam] = useState([]);

useEffect(() => {
axios.get('https://symfony.pandacom.be/api/teams')
.then(response => {
setTeam(response.data['hydra:member']);
})
.catch(error => {
console.error(error);
});
}, []);



return (
<div className="team">
    <div className="logoTeam">
    <h4>THE TEAM<br /><span>Pandastic</span></h4>
    </div>
    <div className="collectionMember">
        {team.map(item =>(
        <div key={item.id} className="teamMembre">
            <div className="avatar">
                <img className="pandaAvatar" src={pandaAvatar} alt="Panda avatar" />
                {item.image == null ? <img className="noPict" src={pandaAvatar} alt="Panda avatar" /> : <img
                    className="pict" src={"https://symfony.pandacom.be/images/" + item.image}
                    alt="Membre team Pandacom" />}
            </div>
            <h2>{item.name} - {item.firstname}</h2>
            <h3>{item.rolesEn}</h3>
        </div>
        ))
        }

    </div>
</div>
);
}

export default Team;
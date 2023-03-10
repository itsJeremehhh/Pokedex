import React from "react"
import './pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

function PokeCard(props) {
 let imgSrc = `${POKE_API}${props.id}.png`;
 return (
    <div className="Pokecard">
        <div
        classname="pokecard-title">{
        props.name}</div>
        <img className="pokecard-image" src={imgSrc} />
        <div className="Pokecard-data"> type:{props.type}</div>
        <div className="Pokecard-data">EXP:{props.exp}</div>
    </div>
 );
}

export default PokeCard;
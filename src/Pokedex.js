import React from 'react';
import Pokecard from "./pPokecard";
import './Pokedex.css';

function Pokedex(props){
    let winMessage = null; //what is this for?
    if (props.isWinner) {
        winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>
    }

    return (
        <div className="Pokedex">
            <h2
            className="pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (<Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                    />
                    ))}
            </div>
            <h4>Total Experience: {props.exp}
            </h4>
            {winMessage}
        </div>
    );
}

export default Pokedex;
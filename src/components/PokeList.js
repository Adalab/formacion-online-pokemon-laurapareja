import React from 'react';
import PokeCard from './PokeCard';
import '../stylesheets/PokeList.scss'

const renderPokeList = (pokemones, query) => {
    if (query.length <= 1) {
        return pokemones.map((pokemon, index) => {
            return (<li key={index} className="pokeItemList">
                <PokeCard key={index} index={index + 1} pokemon={pokemon} />
            </li>)
        })
    } else {
        const pokemonesSelected = pokemones
            .filter(myPokemon => {
                return query === "" ? true : myPokemon.name.substr(0, 2).toUpperCase() === query.substr(0, 2).toUpperCase();
            })
        return pokemonesSelected.map((pokemon, index) => {
            return (<li key={index} className="pokeItemList">
                <PokeCard key={index} index={index + 1} pokemon={pokemon} />
            </li>)
        })
    }


}

const PokeList = (props) => {
    const { pokemones, query } = props
    return (<ul className="pokeList">
        {renderPokeList(pokemones, query)}
    </ul>)
}

export default PokeList;
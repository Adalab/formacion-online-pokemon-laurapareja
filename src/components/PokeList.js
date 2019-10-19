import React from 'react';
import PokeCard from './PokeCard';
import '../stylesheets/PokeList.scss'

const renderPokeList = (pokemones, query) => {
    const pokemonesSelected = pokemones.filter(pokemones => {
        return pokemones.name.includes(query)
    })
    return pokemonesSelected.map((pokemon, index) => {
        return (<li key={index} className="pokeItemList">
            <PokeCard key={index} index={index + 1} pokemon={pokemon} />
        </li>)
    })
}

const PokeList = (props) => {
    const { pokemones, query } = props
    return (<ul className="pokeList">
        {renderPokeList(pokemones, query)}
    </ul>)
}

export default PokeList;
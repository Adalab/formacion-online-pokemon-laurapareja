import React from 'react';
import PokeType from './PokeType';

const renderPokeTypeList = (types) => {
    return types.map((type, index) => {
        return (
            <PokeType key={index} index={index + 1} type={type} />
        )
    })

}

const PokeCard = (props) => {
    const { pokemon, index } = props
    const classTypes = pokemon.types.length === 1 ? "pokeTypeContainer alone" : "pokeTypeContainer";

    const renderBackgroundCard = (pokemon) => {
        if (pokemon.types.length === 1) {
            return `${pokemon.types[0]}`
        }
    }
    const renderBackgroundCard2 = (pokemon) => {
        if (pokemon.types.length !== 1) {
            return `${pokemon.types[0]}`
        }
    }
    const renderBackgroundCard3 = (pokemon) => {
        if (pokemon.types.length !== 1) {
            return `${pokemon.types[1]}`
        }
    }

    return (
        <div className={`pokeCard ${renderBackgroundCard3(pokemon)} ${renderBackgroundCard(pokemon)}`} key={index}>
            <div className='pokeCard'>
                <small className="pokeId">ID / {index}</small>
                <img className="pokePicture" src={pokemon.picture} alt={pokemon.name}></img>
                <h2 className="pokeName">{pokemon.name}</h2>
                <div className={classTypes}>{renderPokeTypeList(pokemon.types)}</div>
            </div>

            <div className={`pokeCardBack ${renderBackgroundCard2(pokemon)}`}></div>

        </div>)

}

export default PokeCard;
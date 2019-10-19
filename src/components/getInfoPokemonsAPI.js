import React from 'react';


const getInfoPokemonsAPI = async () => {
    const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25')
    const listData = await listResponse.json()

    return listData.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const pokemonData = await response.json()
        const types = pokemonData.types.map(type => type.type.name)

        const pokemonInfo = {
            name: pokemon.name,
            picture: pokemonData.sprites.front_default,
            types: types
        }

        return pokemonInfo
    })
}


export default getInfoPokemonsAPI;
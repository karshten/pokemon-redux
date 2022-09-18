import React from 'react'

export const PokemonItem = ({pokemon}) => {
  return (
    <li className='pokemons__item'>
        <img src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name ? pokemon.name : 'pokemon name'} />
        <h3>{pokemon.name}</h3>
    </li>
  )
}

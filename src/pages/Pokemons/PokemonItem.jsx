import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonItem = ({ pokemon }) => {
    return (
        <li className='pokemons__item'>
            <Link to={`/pokemons/:${pokemon.id}`}>
                <img src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other.home.front_default}
                    alt={pokemon.name ? pokemon.name : 'pokemon name'} />
                <h3>{pokemon.name}</h3>
            </Link>
        </li>
    )
}

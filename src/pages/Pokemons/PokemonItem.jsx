import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonItem = ({ pokemon }) => {
    return (
        <li className='pokemons__item'>
            <Link to="/help">
                <img src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name ? pokemon.name : 'pokemon name'} />
                <h3>{pokemon.name}</h3>
            </Link>
        </li>
    )
}

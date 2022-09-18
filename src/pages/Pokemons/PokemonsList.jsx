import React from 'react'
import { useSelector } from 'react-redux'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const pokemons = useSelector(state => state.pokemon.pokemonsList)
    console.log(pokemons);
    return (
        <main>
            <div className="main-container">
                <SortBy/>
            </div>
        </main>
    )
}

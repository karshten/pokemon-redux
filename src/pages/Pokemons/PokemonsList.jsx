import React from 'react'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    return (
        <main>
            <div className="main-container">
                <SortBy/>
            </div>
        </main>
    )
}

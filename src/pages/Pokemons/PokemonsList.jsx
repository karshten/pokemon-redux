import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../features/pokemons'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const pokemonsList = useSelector(state => state.pokemon.pokemonsList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemons())

        return () => {}
    }, [])

    return (
        <main>
            <div className="main-container">
                <SortBy />
                {pokemonsList.length && pokemonsList.map(pokemon =>
                    <div key={pokemon.name}>{pokemon.name}</div>
                )}
            </div>
        </main>
    )
}

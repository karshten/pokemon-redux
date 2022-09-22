import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCollection, setGenerations, setPokemons } from '../../features/pokemons'
import { PokemonItem } from './PokemonItem'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const pokemonsList = useSelector(state => state.pokemon.pokemonsList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCollection({endPoint: 'pokemon', reducer: setPokemons}))
        // dispatch(getCollection({endPoint: 'generation', reducer: setGenerations}))
        return () => { }
    }, [])

    return (
        <main>
            <div className="main-container">
                <SortBy />
                {pokemonsList.length >= 20 && <ul className='pokemons'>
                    {pokemonsList?.length && pokemonsList?.map(pokemon =>
                        <PokemonItem key={pokemon.name} pokemon={pokemon} />
                    )}
                </ul>}
            </div>
        </main>
    )
}

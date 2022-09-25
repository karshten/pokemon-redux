import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PokeLoader } from '../../components/Loader/PokeLoader'
import { getCollection } from '../../features/pokemons'
import { PokemonItem } from './PokemonItem'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const pokemonsList = useSelector(state => state.pokemon.pokemonsList)
    const isPending = useSelector(state => state.pokemon.isPending)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCollection({endPoint: 'pokemon'}))
        return () => { }
    }, [])

    return (
        <main>
            <div className="main-container">
                <SortBy />
                {!isPending ? <ul className='pokemons'>
                    {pokemonsList?.length && pokemonsList?.map(pokemon =>
                        <PokemonItem key={pokemon.name} pokemon={pokemon} />
                    )}
                </ul> : <PokeLoader/>}
            </div>
        </main>
    )
}

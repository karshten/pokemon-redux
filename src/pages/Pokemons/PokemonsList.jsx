import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PokeLoader } from '../../components/Loader/PokeLoader'
import { getCollection, setPokemons } from '../../features/pokemons'
import { PokemonItem } from './PokemonItem'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const pokemonsList = useSelector(state => state.pokemon.pokemonsList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCollection({endPoint: 'pokemon', reducer: setPokemons}))
        return () => { }
    }, [])

    return (
        <main>
            <div className="main-container">
                <SortBy />
                {pokemonsList.length ? <ul className='pokemons'>
                    {pokemonsList?.length && pokemonsList?.map(pokemon =>
                        <PokemonItem key={pokemon.name} pokemon={pokemon} />
                    )}
                </ul> : <PokeLoader/>}
            </div>
        </main>
    )
}

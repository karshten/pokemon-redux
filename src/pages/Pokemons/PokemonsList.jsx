import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PokeLoader } from '../../components/Loader/PokeLoader'
import { getCollection } from '../../features/Pokemons/pokemons'
import { PokemonItem } from './PokemonItem'
import './scss/pokemons.scss'
import { SortBy } from './SortBy'

export const PokemonsList = () => {
    const { pokemonsList, isPending, error } = useSelector(state => state.pokemon)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCollection({ endPoint: 'pokemon' }))
        return () => { }
    }, [])

    return (
        <main>
            <div className="main-container">
                <SortBy />
                {error && <h3 className='error'>Something went wrong: <span>{error}</span></h3>}
                {!isPending && pokemonsList?.length ? <ul className='pokemons'>
                    {pokemonsList?.map(pokemon =>
                        <PokemonItem key={pokemon.name} pokemon={pokemon} />
                    )}
                </ul> : error ? '' : <PokeLoader />}
            </div>
        </main>
    )
}

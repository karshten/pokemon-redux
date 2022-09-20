import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../features/pokemon'
import './scss/pokemon.scss'

export const Pokemon = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemonDescription.pokemon)

  useEffect(() => {
    dispatch(getPokemon(+id.slice(1, 2)))
    console.log(pokemon);
    return () => {}
  }, [id])


  return (
    <div className="main-container">
      <div>{pokemon?.name}</div>
    </div>
  )
}

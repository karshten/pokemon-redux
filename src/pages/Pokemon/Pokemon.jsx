import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../../features/pokemon'
import { toggleSidebar } from '../../features/sideBar'
import { PokemonItem } from '../../pages/Pokemons/PokemonItem'
import { PokemonInfoItem } from './PokemonInfoItem'
import { PokeLoader } from '../../components/Loader/PokeLoader'
import './scss/pokemon.scss'
import '../../pages/Pokemons/scss/pokemons.scss'

const pokemonInfo = [
  "Внешность",
  "Характер",
  "Способности",
  "Обитание",
  "В аниме",
  "Эволюция",
]
export const Pokemon = () => {
  const { id } = useParams()
  const [fullDescription, setFullDescription] = useState(false)

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemonDescription.pokemon)

  useEffect(() => {
    dispatch(toggleSidebar(false))
    dispatch(getPokemon(+id.replace(':', '')))
    return () => {
      dispatch(toggleSidebar(true))
    }
  }, [id])


  return (
    <div className="pokemon">

      {pokemon && pokemon.description && pokemon.Abilities ? <>
        <div className="pokemon__text-content">
          <Link to='/pokemons' className='pokemon__link-back'>
            <div className='pokemon__btn-back'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H3.82998L8.70998 2.12C9.09998 1.73 9.09998 1.09 8.70998 0.700001C8.31998 0.310001 7.68998 0.310001 7.29998 0.700001L0.70998 7.29C0.31998 7.68 0.31998 8.31 0.70998 8.7L7.29998 15.29C7.68998 15.68 8.31998 15.68 8.70998 15.29C9.09998 14.9 9.09998 14.27 8.70998 13.88L3.82998 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7Z" fill="#3F3F3F" />
              </svg>
              Вернуться в каталог
            </div>
          </Link>

          <div className='pokemon__description'>
            <article>
              <span>{pokemon.name}: </span>
              {fullDescription ? pokemon?.description : pokemon?.description?.slice(0, 400) + '...'}
            </article>
            <button onClick={() => setFullDescription(!fullDescription)}>{!fullDescription ? "full description..." : 'hide'}</button>
          </div>

          <div className="pokemon__info">
            <h3>Содержание</h3>
            <ul>{pokemonInfo.map((item, idx) => <li key={item}>{idx + 1}. {item}</li>)}</ul>
          </div>

          <PokemonInfoItem info={{
            articles: pokemon.Abilities,
            title: 'Способности'
          }} />
        </div>

        <div className="pokemon__side-preview">
          <PokemonItem pokemon={pokemon} />
        </div>
      </> : <PokeLoader />}

    </div>
  )
}

import React, { useState } from 'react'
import './scss/sideBar.scss'
import arrow from 'icons/arrow.svg'
import { useDispatch } from 'react-redux'
import { getGeneration, setPokemons } from '../../features/pokemons'

const generations = [
    1, 2, 3, 4, 5, 6, 7, 8
]
export const SideBar = () => {
    const [genOpen, setGenOpen] = useState(true)
    const dispatch = useDispatch()

    const handleFilterByGeneration = (e) => {
        const generation = e.target.value
        dispatch(setPokemons([]))
        dispatch(getGeneration({endPoint: `generation/${generation}`, reducer: setPokemons}))
    }

    return (
        <aside className='sideBar'>
            <div className="pokeball"></div>
            <div className='sideBar__content'>
                <div className="sideBar__generation">
                    <div className="sideBar__toggle">
                        <h3>Поколение</h3>
                        <img
                            onClick={() => setGenOpen(!genOpen)}
                            className={!genOpen ? 'open' : 'closed'}
                            src={arrow}
                            alt="arrow" />
                    </div>
                    <div className={genOpen ? 'openNav' : 'closedNav'}>
                        {generations.map(item => (
                            <div key={item} className='sideBar__radio-gen'>
                                <input onChange={(e) => handleFilterByGeneration(e)} type="radio" name="generation" value={item} />
                                <label>
                                    {item === generations.length ? item + '-e и новее' : item + '-e'}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

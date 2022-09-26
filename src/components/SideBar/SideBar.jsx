import React, { useState } from 'react'
import './scss/sideBar.scss'
import './scss/generationRadioInput.scss'
import './scss/pokemonType.scss'
import arrow from 'icons/arrow.svg'
import { useDispatch } from 'react-redux'
import { getGeneration, setPokemons } from '../../features/Pokemons/pokemons'

const generations = [
    1, 2, 3, 4, 5, 6, 7, 8
]
export const SideBar = () => {
    const [genOpen, setGenOpen] = useState(true)
    const [typeOpen, setTypeOpen] = useState(true)
    const [physicalType, setPhysicalType] = useState(false)
    const [specialType, seSpecialType] = useState(false)

    const dispatch = useDispatch()

    const handleFilterByGeneration = (e) => {
        const generation = e.target.value
        dispatch(setPokemons([]))
        dispatch(getGeneration({ endPoint: `generation/${generation}` }))
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
                    {genOpen && <div className={genOpen ? 'openNav' : 'closedNav'}>
                        {generations.map(item => (
                            <div key={item} className='sideBar__radio-gen'>
                                <input onChange={(e) => handleFilterByGeneration(e)} type="radio" name="generation" value={item} />
                                <label>
                                    {item === generations.length ? item + '-e и новее' : item + '-e'}
                                </label>
                            </div>
                        ))}
                    </div>}
                </div>
                <div className="sideBar__type">
                    <div className="sideBar__toggle">
                        <h3>Тип</h3>
                        <img
                            onClick={() => setTypeOpen(!typeOpen)}
                            className={!typeOpen ? 'open' : 'closed'}
                            src={arrow}
                            alt="arrow" />
                    </div>
                    {typeOpen && <div className={typeOpen ? 'openNav' : 'closedNav'}>
                        <label className="sideBar__type-checkbox">
                            <input onChange={() => setPhysicalType(!physicalType)} type="checkbox" />
                            Физические
                        </label>
                        <label className="sideBar__type-checkbox">
                            <input onChange={() => seSpecialType(!specialType)} type="checkbox" />
                            Специальные
                        </label>
                    </div>}
                </div>
            </div>
        </aside>
    )
}

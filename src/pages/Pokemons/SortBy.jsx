import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByAlphabet, sortByAttack } from '../../features/Pokemons/pokemons'
import './scss/pokemons.scss'

const sortByItems = [
    {
        sortMethod: sortByAlphabet,
        value: 'Алфавиту'
    },
    {
        sortMethod: sortByAttack,
        value: 'Уровню силы'
    },
    // {
    //     sortMethod: sortByAttack,
    //     value: 'Рейтингу'
    // },
    // {
    //     sortMethod: sortByAttack,
    //     value: 'Популярности'
    // }
]
export const SortBy = () => {
    const dispatch = useDispatch()

    return (
        <div className="sortBy">
            <h3>Сортировать по:</h3>
            <ul className="sortBy__list">
                {sortByItems?.length && sortByItems.map(item => (
                    <li
                        onClick={(e) => dispatch(item.sortMethod())}
                        key={item.value}
                        className='sortBy__item'
                    >{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

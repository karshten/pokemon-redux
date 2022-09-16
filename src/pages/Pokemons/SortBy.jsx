import React from 'react'
import './scss/pokemons.scss'

const sortByItems = [
    'Популярности',
    'Рейтингу',
    'Уровню силы'
]
export const SortBy = () => {
    return (
        <div className="sortBy">
            <h3>Сортировать по:</h3>
            <ul className="sortBy__list">
                {sortByItems?.length && sortByItems.map(item => (
                    <li key={item} className='sortBy__item'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

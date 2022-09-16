import React from 'react'
import './scss/header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <NavLink to="/pokemons">Все покемоны</NavLink>
          </li>
          <li>
            <NavLink to='/help'>Помощь</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

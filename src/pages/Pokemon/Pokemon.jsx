import React from 'react'
import { useParams } from 'react-router-dom'

export const Pokemon = () => {
  const { id } = useParams()
  return (
    <div className="main-container">
      <div>Pokemon</div>
    </div>
  )
}

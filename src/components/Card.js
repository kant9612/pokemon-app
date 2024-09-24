import React from 'react'

const Card = ({ pokemon }) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt='' />
      </div>
      <h3 className='cardName'>{pokemon.name}</h3>
    </div>
  )
}

export default Card
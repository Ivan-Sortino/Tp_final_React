import React from 'react'
import './ChicosView.css'

function ChicosView({chico}) {
  return (
    <div className='chicosview'>
        <h1>{chico.name}</h1>
        <h2>{chico.description}</h2>
        <img src={chico.image} alt={chico.name + " image"}/>
    </div>
  )
}

export default ChicosView
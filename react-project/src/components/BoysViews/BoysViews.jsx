import React from 'react';
import './BoysViews.css';

function BoysViews({boy}) {
  return (
    <div className='chicosview'>
        <h1>{boy.name}</h1>
        <h2>{boy.description}</h2>
        <img src={boy.image} alt={boy.name + " image"}/>
    </div>
  )
};

export default BoysViews;
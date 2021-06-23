import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.name}?set=set5&size=180x180`} alt="monster" />
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.email}</h4>
    </div >
)

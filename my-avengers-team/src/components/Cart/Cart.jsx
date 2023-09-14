/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors,remaining,totalCost}) => {
    console.log(selectedActors)

    return (
        <div>
            <h3>Total Actors:{selectedActors.length}</h3>
            <h5>Remaining:{remaining}</h5>
            <h5>Total Cost:{totalCost}</h5>
            {
                selectedActors.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
          
        </div>
    );
};

export default Cart;
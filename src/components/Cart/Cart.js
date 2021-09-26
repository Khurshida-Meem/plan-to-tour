import React from 'react';

const Cart = (props) => {

    const {place} = props;
    const totalReducer = (previous, place) => previous + place.cost;
    const total = place.reduce(totalReducer, 0)

    console.log(place);
    return (
        <div>
            <h2>Total Added: {place.length}</h2>
            <h4>Total Cost: {total}</h4>
        </div>
    );
};

export default Cart;
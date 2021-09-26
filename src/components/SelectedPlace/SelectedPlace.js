import React from 'react';
import './SelectedPlace.css'

const SelectedPlace = (props) => {

    // came the data from cart.js
    const { thumb, place, cost} = props.selectedPlace;
    
    // sho data after selecting
    return (
        <div className='selected-item-container'>
            <img src= {thumb} alt=""/>
            <div>
                <h3>{place}</h3>
                <p>${cost}</p>
            </div>
            
        </div>
    );
};

export default SelectedPlace;
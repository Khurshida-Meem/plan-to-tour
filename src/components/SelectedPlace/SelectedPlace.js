import React from 'react';
import './SelectedPlace.css'

const SelectedPlace = (props) => {
    // console.log(props);
    const { thumb, place, cost} = props.selectedPlace;
    
    console.log(props);
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
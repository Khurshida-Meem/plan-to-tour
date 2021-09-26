import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DestinationDetail.css'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const DestionationDetail = (props) => {
   const {place, thumb, country, cost} = props.destination;

    return (
        <div className="single-card">
            <img src={thumb} alt=""/>
            <h1>{place}</h1>
            <h3>Country: {country}</h3>
            <h1>Cost for 3 Days: ${cost}</h1>
            <button
            onClick= {() => props.handleAddItem(props.destination)}
            ><FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon>Add to Plan</button>
        </div>
    );
};

export default DestionationDetail;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DestinationDetail.css'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const DestionationDetail = (props) => {
    const { place, thumb, country, cost, star, starCount} = props.destination;

    return (
        <div className="single-card">
            <img src={thumb} alt=""/>
            <h1 className="place-heading">{place}</h1>
            <h3>Country: {country}</h3>
            <h2>Cost for 3 Days: ${cost}</h2>
           <Rating 
            className= "rating"
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
           readonly ></Rating>
            <small>({star})</small><br />
            <span><i class="fas fa-users"></i> {starCount}</span>
           <br />
            <button
            onClick= {() => props.handleAddItem(props.destination)}
            ><FontAwesomeIcon icon={faCalendarPlus} className="addPlan"></FontAwesomeIcon>Add to Plan</button>
        </div>
    );
};

export default DestionationDetail;
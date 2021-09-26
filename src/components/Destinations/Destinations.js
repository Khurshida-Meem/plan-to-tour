import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DestionationDetail from '../DestinationDetail/DestionationDetail';
import './Destination.css'

const Destinations = () => {
    const [data, setData] = useState([])
    const [place, setPlace] = useState([])
    
    // load data
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    // asigning to an array to calculate costings
    const handleAddItem = (singlePlace) => {
        const newPlace = [...place, singlePlace]
        setPlace(newPlace);
    }

    return (
        <div className='destination-container'>
            <div className='place-container'>
                {
                    data.map(destination => <DestionationDetail 
                    key = {destination.id}
                    destination={destination}
                    handleAddItem = {handleAddItem}
                    >

                    </DestionationDetail>)
                }
            </div>
            <div className='cart-container'>
                <Cart place={place}></Cart>
            </div>
        </div>
    );
};

export default Destinations;
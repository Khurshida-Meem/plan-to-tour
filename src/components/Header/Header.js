import React from 'react';
import './Header.css'

const Header = () => {
    const budget = 20000;
    return (
        // header element
        <div className='container'>
            <div className='element-container'>
                <h1>Wellcome <br /> to Travel World</h1>
                <p>Here you can make a budget for your tour plan</p>
                <button className='button-secondary'>Click to set Budget</button>
                <h3>Your Budget for Running Year: ${budget}</h3>
            </div>
        </div>
    );
};

export default Header;
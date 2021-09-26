import SelectedPlace from "../SelectedPlace/SelectedPlace";
import './Cart.css'

const Cart = (props) => {

    const { place } = props;
    let counter =0;
    const totalReducer = (previous, place) => previous + place.cost;
    const total = place.reduce(totalReducer, 0)
    
    return (
        <div className='cart-container'>
            {/* display  values */}
            <div>
                <h2><i className="fas fa-map-marked-alt"></i> Total Place Added: {place.length}</h2>
                <h3>Total Travel Cost: {total}</h3>
            </div>

            {/* display selected value by mapping*/}
            <div>
                {
                    place.map(selectedPlace => <SelectedPlace selectedPlace={selectedPlace}
                        key={counter++}
                    ></SelectedPlace> )
                }
            </div>
        </div>

    );
    
};

export default Cart;
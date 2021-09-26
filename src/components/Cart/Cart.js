import SelectedPlace from "../SelectedPlace/SelectedPlace";

const Cart = (props) => {

    const { place } = props;
    let counter =0;
    const totalReducer = (previous, place) => previous + place.cost;
    const total = place.reduce(totalReducer, 0)
    
    return (
        <div className='cart-container'>
            {/* display  values */}
            <div>
                <h2>Total Added: {place.length}</h2>
                <h4>Total Cost: {total}</h4>
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
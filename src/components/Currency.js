import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <span className="form-group" style={{ marginBottom: '1rem', backgroundColor: 'lightgoldenrodyellow', padding: '10px', borderRadius:'10%'}}>
            <label htmlFor="currencySelect" style={{ marginRight: '0.5rem'}}>Currency:</label>
            <select 
                id="currencySelect" 
                className="custom-select" 
                onChange={handleCurrencyChange}
                style={{backgroundColor: 'yellow'}}
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </span>
    );
};

export default Currency;

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value >= 20000) {
            alert('The budget should not exceed £20,000');
        } else if (value < totalExpenses) {
            alert('The budget cannot be lower than the total spending');
        } else {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                style={{ marginLeft: '1rem' }}
            />
        </div>
    );
};

export default Budget;

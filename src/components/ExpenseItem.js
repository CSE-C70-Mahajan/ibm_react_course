import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        // Dispatch action to increase expense by 10
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: props.name, cost: 5 }
        });
    };

    const decreaseAllocation = (name) => {
        // Dispatch action to reduce expense by 10
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 5 }
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button onClick={event => increaseAllocation(props.name)}>
                    <img src="data:image/png;base64,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" alt="add" width="25px" height="25px"></img>
                </button>
            </td>
            <td>
                <button onClick={event => decreaseAllocation(props.name)}>
                    <img src="data:image/png;base64,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" alt="substract" width="25px" height="25px"></img>
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;

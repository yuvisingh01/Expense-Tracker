import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // instead of using those three useStates we can do the below thing..

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        // ...userInput, //here ...is called a spread operator which basically copies the input data into the userInput to avoid getting lost.
        // enteredTitle:event.target.value,        
        //using this approach for managing multiple states in many cases both will work fine but keep in mind that react schedules state updates it does'nt performs it instantly, most of them gets scheduled and therefore theoritically a lot of state scheduled at the same time you could be depending on the outdated or incorrect state snapshots. So this is why this approach is incorrect , so instead we use
        // setUserInput((prevState)=>{
        //     return{ ...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredDate:event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate(''); 
    };


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={enteredDate} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >
                Add Expense
            </button>
        </div>
    </form>
};

export default ExpenseForm;
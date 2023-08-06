import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseDate.css';
import './Expenses.css';
// import React,{useState} from 'react';

const ExpenseItem=(props)=>
{
    // const [title, setTitle]=useState(props.title);


    // let title=props.title;

    // const clickHandler=() =>{
    //     console.log('clicked');
    //     setTitle('Updated');
    //     console.log(title);
    //     console.log('Title changed');
    // } 

    return (
        <li>
        <Card className="expenses">
            <div className="expense-item">
            <ExpenseDate date={props.date}/>            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;
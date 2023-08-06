import React, { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter.js";
import './Expenses.css';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fileteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  

  return (
    <div className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}   
      />
      <ExpensesChart expenses={fileteredExpenses}/>
      <ExpensesList items={fileteredExpenses}/>
    </div>
  );
}

export default Expenses;

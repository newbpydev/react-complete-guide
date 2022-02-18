import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ( props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // console.log( typeof event.target.value);
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(typeof event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => { 
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            name="expense-title"
            id="expense-title"
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            name="expense-amount"
            id="expense-amount"
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            name="expense-date"
            id="expense-date"
            min="2019-01-01"
            max="2023-12-31"
            required
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;

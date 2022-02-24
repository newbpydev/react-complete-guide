import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setIsFormActive(false);
  };

  // const form = (
  //   <form action="" onSubmit={submitHandler}>
  //     <div className="new-expense__controls">
  //       <div className="new-expense__control">
  //         <label htmlFor="expense-title">Title</label>
  //         <input
  //           onChange={titleChangeHandler}
  //           value={enteredTitle}
  //           type="text"
  //           name="expense-title"
  //           id="expense-title"
  //           required
  //         />
  //       </div>
  //       <div className="new-expense__control">
  //         <label htmlFor="expense-amount">Amount</label>
  //         <input
  //           onChange={amountChangeHandler}
  //           value={enteredAmount}
  //           type="number"
  //           name="expense-amount"
  //           id="expense-amount"
  //           min="0.01"
  //           step="0.01"
  //           required
  //         />
  //       </div>
  //       <div className="new-expense__control">
  //         <label htmlFor="expense-date">Date</label>
  //         <input
  //           onChange={dateChangeHandler}
  //           value={enteredDate}
  //           type="date"
  //           name="expense-date"
  //           id="expense-date"
  //           min="2019-01-01"
  //           max="2023-12-31"
  //           required
  //         />
  //       </div>

  //       <div className="new-expense__actions">
  //         <button type="submit">Cancel</button>
  //       </div>
  //       <div className="new-expense__actions">
  //         <button type="submit">Add Expense</button>
  //       </div>
  //     </div>
  //   </form>
  // );

  const btnAddExpense = (
    <div className="new-expense__actions">
      <button type="button" onClick={handleAddNewExpense}>
        Add New Expense
      </button>
    </div>
  );

  function handleAddNewExpense(event) {
    setIsFormActive((prevIsFormActive) => !prevIsFormActive);
  }

  return (
    // <div>{isFormActive ? form : btnAddExpense}</div>
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
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;

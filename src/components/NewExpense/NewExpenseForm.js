import React from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input type="text" name="expense-title" id="expense-title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Amount</label>
          <input type="number" name="expense-amount" id="expense-amount" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input type="date" name="expense-date" id="expense-date" min="2019-01-01" max="2023-12-31" />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
};

export default NewExpenseForm;
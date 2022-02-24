import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState("2021");


  // const filterExpenseItemEls = props.expensesList.filter((expense) =>
  //   expense.date.getFullYear().toString() === filterYear
  // );

  // const ExpenseItemEls = filterExpenseItemEls.map((expense) => (
  //   <ExpenseItem
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  // ));

  //! The same code but now together, note the pigiback from filter().map()
  const ExpenseItemEls = props.expensesList
    .filter((expense) => expense.date.getFullYear().toString() === filterYear)
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));


  function filterYearHandler(event) {
    setfilterYear(event.target.value);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterYearHandler} selected={filterYear} />

      {ExpenseItemEls}
    </Card>
  );
}

export default Expenses;

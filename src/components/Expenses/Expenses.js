import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState("");
  console.log(filter);

  function filterHander(event) {
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  console.log(props);
  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHander} />

      <ExpenseItem
        title={props.expensesList[0].title}
        amount={props.expensesList[0].amount}
        date={props.expensesList[0].date}
      />
      <ExpenseItem
        title={props.expensesList[1].title}
        amount={props.expensesList[1].amount}
        date={props.expensesList[1].date}
      />
      <ExpenseItem
        title={props.expensesList[2].title}
        amount={props.expensesList[2].amount}
        date={props.expensesList[2].date}
      />
      <ExpenseItem
        title={props.expensesList[3].title}
        amount={props.expensesList[3].amount}
        date={props.expensesList[3].date}
      />
    </Card>
  );
}

export default Expenses;

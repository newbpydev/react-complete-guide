import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  console.log(props.expensesList.length);
  const ExpenseItemEls = props.expensesList;

  if (props.expensesList.length === 0) {
    console.log("ho");
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return ExpenseItemEls;
}

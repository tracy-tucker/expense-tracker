import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("new", expenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
  );
}

export default App;

// Lifting State

// Think of the apple tree.
// The top of the tree is the parent.
// Each limb trickling down is a branch (child) of the top of the tree (parent).
// Each limb from left side to right side are siblings (comps in the same parent).
// The natural order is for apples (state) is to trickle down the tree.
// (Lifting State Up:)
// In order to lift the apples (state) back up the tree, you must build a bucket (function),
// and tell that bucket (function) what it needs to take in, the apple (state),
// then what to do with that apple (state) once it lifts it up the branch (comp).
// For each lift, you have to build a bucket (function).

// The left and right branches (sibling comps) cannot communicate with each other.
// They must go through the top of the tree (parent).
// EX: 2 siblings that don't get along.

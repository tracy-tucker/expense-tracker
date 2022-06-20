import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // UseState object - a secondary option
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log("title value", e.target.value);
    // Whenever you update state, and your state depends on previous state,
    // DO NOT update state like this!
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // THIS ONE is better because:
    // React schedules updates. These are not performed automatically
    // Therefore, if you update state using the above, you could be updating state with an outdated snapshot
    // You THIS ONE because it guarantees that you are using the most up-to-date snapshot of state.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    // prevent browser from sending the form event to the server.
    e.preventDefault();

    // create an object that stores the newly entered values for each form variable
    // These values come from the setEnteredTitle, etc. that the onChange has triggered from the inputs.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00"),
    };

    props.onSaveExpenseData(expenseData);
    console.log("DATE", expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2022-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// Two Way Binding
// Not only do inputs 'listen' for changes (onChange={}),
// but you can also pass a value back into the input!
// So, you can reset or change the input programmatically.
// Adding the value attribute to the input element allows you to set a new value for the input.

// This becomes Two Way Binding because the input is listening to changes in the input to update state,
// AND it feeds that state BACK INTO the input so that when the state changes it also changes the input.

// Button to add new expense
// when clicked, form appears & new expense button disappears
// when form is submitted, form disappears & new expense button reappears
// form cancel button clicked, form disappears and new expense button reappears

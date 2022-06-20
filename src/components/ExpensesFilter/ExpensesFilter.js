import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onChangeHandler = (e) => {
    const year = e.target.value;
    props.onChangeFilter(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// Controlled Component
// When the state is handled by the parent component, not by the child component.
// Here, this is being done by the Two Way Binding.
// The value of select, as well as changes to select, is being handled by Expenses (parent comp).

// Stateless VS Statefull
// Stateless/Presentational/Dumb = comps that do not manage any kind of state. It's just there to output the data

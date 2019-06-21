import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-largerScreens">Expense</div>
        <div className="show-for-largerScreens">Amount</div>
      </div>
      <div className="list-body">
        {props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Expenses Added.</span>
          </div>
        ) : (
          props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

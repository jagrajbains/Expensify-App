import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import "../locales/inr";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expense-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  numeral.locale("inr");
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

import uuid from "uuid";
import database from "../firebase/firebase";

//     1. ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});
/**
 * By default redux doesn't allow us to export a function
 * Since we have integrated redux-thunk and we are using the thunkMiddleware
 * we will be able to dispatch a callback function
 */
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref("Expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};
//     2. REMOVE_EXPENSE
export const removeExpense = ({ id = 0 } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
//     3. EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

//START_SET_EXPENSES
export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref("Expenses")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

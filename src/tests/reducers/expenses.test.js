import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("Should setup default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add a new expense to the array", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: 4,
      description: "Coffee",
      amount: 2400,
      note: "Coffee with someone",
      createdAt: moment()
        .add(6, "days")
        .valueOf()
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("Should edit an expense value", () => {
  const amount = 20000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("Should edit an expense value", () => {
  const amount = 20000;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

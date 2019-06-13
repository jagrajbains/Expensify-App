import getExpensesTotal from "../../selectors/expense-total";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should return zero if no expenses", () => {
  expect(getExpensesTotal([])).toBe(0);
});

test("Should correctly add up a Single Expense", () => {
  expect(getExpensesTotal([expenses[1]])).toBe(15000);
});

test("Should correctly add up multiple expenses", () => {
  expect(getExpensesTotal(expenses)).toBe(17515);
});

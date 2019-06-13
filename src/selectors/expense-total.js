export default expenses =>
  expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

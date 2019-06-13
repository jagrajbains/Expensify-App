import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should render ExpensesSummary with 1 expense correctly.", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={245.67} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with multiple expenses correctly.", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={25478.23546} />
  );
  expect(wrapper).toMatchSnapshot();
});

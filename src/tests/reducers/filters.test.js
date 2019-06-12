import moment from "moment";
import filterReducer from "../../reducers/filters";

test("Should setup default filters values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy value to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to date", () => {
  const prevState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filterReducer(prevState, { type: "SORT_BY_DATE" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set Text filter", () => {
  const text = "Something new";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("Should set startDate", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});

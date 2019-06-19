import authReducer from "../../reducers/auth";

test("Should set uid on login", () => {
  const uid = "123abc";
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should clear uid on logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "abc123" }, action);
  expect(state).toEqual({});
});

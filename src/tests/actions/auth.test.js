import { login, logout } from "../../actions/auth";

test("Should setup login action object", () => {
  const uid = "234abc";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("Should setup logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});

import numeral from "numeral";
import "../../locales/inr";

beforeEach(() => {
  numeral.locale("inr");
});

test("Should format the currency", () => {
  const arg = [1000.24, "$0,0.00", "₹1,000.24"];
  expect(numeral(arg[0]).format(arg[1])).toBe(arg[2]);
});

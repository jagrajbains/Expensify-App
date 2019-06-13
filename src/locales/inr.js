import numeral from "numeral";

numeral.register("locale", "inr", {
  delimiters: {
    thousands: ",",
    decimal: "."
  },
  currency: {
    symbol: "₹"
  }
});

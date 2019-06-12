import moment from "moment";
export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 15,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    amount: 15000,
    note: "This month's rent",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Credit Card Bill",
    amount: 2500,
    note: "This month's credit card bill",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import "../locales/inr";
const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  numeral.locale("inr");
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount).format("$0,0.00")}-
        {moment(createdAt).format("ddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default ExpenseListItem;

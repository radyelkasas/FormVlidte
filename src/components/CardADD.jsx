import React from "react";
import { Link } from "react-router-dom";

const CardADD = () => {
  return (
    <div className="card-add">
      <img src="./images/icon-complete.svg" alt="complete" />
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <Link to="/" className="mt-3">
        Confirm
      </Link>
    </div>
  );
};

export default CardADD;

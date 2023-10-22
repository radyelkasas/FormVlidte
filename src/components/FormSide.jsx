import React, { useEffect } from "react";
import { useState } from "react";

const FormSide = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [erorrName, setErorrName] = useState(false);
  const [erorrNumber, setErorrNumber] = useState(false);

  let Valide = true;
  const habdelValude = () => {
    let dateYear = new Date(`${year}-${month}-20`).getFullYear();
    if (name.length == 0) {
      setErorrName(true);
      document.getElementById("name").style.border = "1px solid red";
      Valide = false;
    }
    if (number.length < 13) {
      setErorrNumber(true);
      document.getElementById("number").style.border = "1px solid red";
      Valide = false;
    }
    if (month > 12 || month.length <= 1) {
      document.getElementById("month").style.border = "1px solid red";
      Valide = false;
    }
    if (dateYear <= 2022 || dateYear >= 2040 || dateYear.length < 3) {
      document.getElementById("year").style.border = "1px solid red";
      Valide = false;
    }
    if (cvc.length < 3) {
      document.getElementById("cvc").style.border = "1px solid red";
      Valide = false;
    }
  };
  const hundelSubmit = (e) => {
    habdelValude();
    if (Valide === false) {
      e.preventDefault();
    } else {
      e.stopPropagation()
    }
  };

  return (
    <form onSubmit={hundelSubmit} action="/cardadd">
      <div className="cardInput">
        <label htmlFor="name">Cardholder name</label>
        <input
          type="text"
          placeholder="e.g Jana Appleseed"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        {erorrName ? <span>Wrong, This required</span> : ""}
      </div>
      <div className="cardInput">
        <label htmlFor="number">Card number</label>
        <input
          type="number"
          placeholder="e.g. 1234 5678 9123 000"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {erorrNumber ? <span>Wrong, This required</span> : ""}
      </div>
      <div className="d-flex gap-5 align-items-center justify-content-center mt-5">
        <div>
          <label htmlFor="date">Exp. Date (mm/yy)</label>
          <div className="d-flex">
            <input
              type="text"
              placeholder="MM"
              id="month"
              className="w-50"
              maxLength="2"
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="text"
              placeholder="YY"
              id="year"
              className="w-50"
              maxLength="4"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cvc">cvc</label>
          <input
            type="text"
            placeholder="e.g. 123"
            id="cvc"
            onChange={(e) => setCvc(e.target.value)}
            maxLength={3}
          />
        </div>
      </div>
      <button type="submit" className="mt-5" onClick={hundelSubmit}>
        Confirm
      </button>
    </form>
  );
};

export default FormSide;

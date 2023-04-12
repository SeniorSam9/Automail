import { useEffect, useState } from "react";
import companies from "../data";
export default function Form() {
  let keys = [
    "Website/Email",
    "Sector",
    "Country",
    "City",
    "Address",
    "Tel/Fax",
  ];
  let [inputs, setInputs] = useState([]);
  let companiesName = companies.map((val) => {
    return <option>{val["Company Name "]}</option>;
  });
  let keysToInputs = keys.map((val) => {
    return [<p className="label">{val}</p>, <input type="text"></input>];
  });
  function handleChange(node) {
    console.log(node);
  }
  return (
    <form className="form" action="/send-email" method="post">
      <p className="label">Company</p>
      <select
        className="c-list"
        onChange={(node) => {
          handleChange(node);
        }}
      >
        {companiesName}
      </select>
      {keysToInputs}
    </form>
  );
}

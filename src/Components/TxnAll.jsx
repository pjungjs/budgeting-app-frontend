import axios from "axios";
import { useState, useEffect } from "react";
import TxnIndividual from "./TnxIndividual.jsx";
const API = process.env.REACT_APP_API_URL;

function TxnAll({ setBalance }) {
  const [allTxn, setAllTxn] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then(response => {
        let total = 0;
        response.data.forEach(txn => {
          if (txn.category.toLowerCase() === "income") {
            total += parseInt(txn.amount);
          } else if (txn.category.toLowerCase() === "expense") {
            total -= parseInt(txn.amount);
          }
        })
        setBalance(total);
        setAllTxn(response.data);
      })
      .catch(error => console.error("Error: GET", error))
  }, []);

  return (
    <div className="all">
      <h1>All Transactions</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              allTxn.map((txn, index) => {
                return <TxnIndividual key={index} txn={txn} />
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TxnAll;
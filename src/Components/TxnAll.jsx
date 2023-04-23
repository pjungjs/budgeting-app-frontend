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
    <div className="flex flex-col items-center mx-10">
      <h1 className="text-xl font-bold mb-4">All Transactions</h1>
      <section>
        <table className="table-fixed border-black border-2 text-center w-full">
          <thead className="bg-indigo-400 text-white">
            <tr>
              <th className="p-2 text-lg">Date</th>
              <th className="p-2 text-lg">Item Name</th>
              <th className="p-2 text-lg">From/To</th>
              <th className="p-2 text-lg">Tag</th>
              <th className="p-2 text-lg">Amount</th>
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
import axios from "axios";
import { useState, useEffect } from "react";
import { calculateAmount } from "../helper/proper.js";
import TxnIndividual from "./TnxIndividual.jsx";
const API = process.env.REACT_APP_API_URL;

function TxnAll({ setBalance }) {
  const [allTxn, setAllTxn] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API}/transactions`)
        .then(response => {
          setBalance(calculateAmount(response.data));
          setAllTxn(response.data);
        })
        .catch(error => console.error("Error: GET", error))
    }
    fetchData();
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
              <th className="p-2 text-lg">From / To</th>
              <th className="p-2 text-lg">Category</th>
              <th className="p-2 text-lg">Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              allTxn.map((txn) => {
                return <TxnIndividual key={txn.id} txn={txn} />
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TxnAll;
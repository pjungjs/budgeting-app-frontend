import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TxnDetails() {
  const [theTxn, setTheTxn] = useState([]);
  const { item_name, amount, date, from_to, category, note, type } = theTxn;
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API}/transactions/${id}`)
        .then(response => setTheTxn(response.data))
        .catch(error => console.error("Error: GET", error))
    }
    fetchData();
  }, [id]);

  async function handleDelete () {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await axios
        .delete(`${API}/transactions/${id}`)
        .then(() => navigate('/transactions'))
        .catch(error => console.error("Error: DELETE", error))
    }
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-4 flex flex-col items-center">Details</h1>
      <div className="pt-0 p-5 mx-auto shadow-lg bg-gray-200 rounded-lg">
        <div className="px-4 py-5 my-4">
          <p><strong>Title:</strong> {item_name}</p>
          <p><strong>Amount:</strong> {amount}</p>
          <p><strong>Date:</strong> {date}</p>
          <p>
            <strong>{
              type === "deposit"
              ? "From: "
              : type === "withdrawal"
                ? "To: "
                : null
            }</strong>
            {from_to}
          </p>
          <p><strong>Category: </strong>{category}</p>
          <p>
            <strong>{
              note
              ? "Note: "
              : null
            }</strong>
            {note}
          </p>
          <p><strong>Type:</strong> {type}</p>
        </div>
        <div className="text-white flex justify-center">
          <button className="mr-2 px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-400">
            <Link to="/transactions">Back</Link>
          </button>
          <button className="mr-2 px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-400">
            <Link to={`/transactions/${id}/edit`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="mr-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TxnDetails;
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TxnEditForm() {
  const [editTxn, setEditTxn] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from_to: "",
    tag: "",
    note: "",
    category: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setEditTxn(response.data))
      .catch((error) => console.error("Error: GET", error))
  }, [id]);

  function handleTextChange(event) {
    setEditTxn({ ...editTxn, [event.target.id]: event.target.value });
  };

  function updateTxn() {
    axios
      .put(`${API}/transactions/${id}`, editTxn)
      .then((response) => {
        setEditTxn(response.data);
        navigate(`/transactions`);
      })
      .catch((error) => console.warn("Error: PUT", error))
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateTxn();
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 flex flex-col items-center">Form</h1>
      <div className="pt-0 p-5 mx-auto shadow-lg bg-gray-200 rounded-lg">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex space-x-4 pt-3 py-3">
            <div className="w-1/2">
              <label htmlFor="item_name">Item Name: </label>
              <input
                id="item_name"
                type="text"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.item_name}
                onChange={handleTextChange}
                required
              />
            </div >
            <div className="w-1/2">
              <label htmlFor="from_to">From/To: </label>
              <input
                id="from_to"
                type="text"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.from_to}
                onChange={handleTextChange}
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 py-3">
            <div className="w-1/4">
              <label htmlFor="date">Date: </label>
              <input
                id="date"
                type="date"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.date}
                placeholder="mm-dd-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
                min="01-01-1997" max="12-31-2030"
                onChange={handleTextChange}
                required
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="amount">Amount: </label>
              <input
                id="amount"
                type="number"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-400"
                value={editTxn.amount}
                onChange={handleTextChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="tag">Tag: </label>
              <input
                id="tag"
                type="text"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.tag}
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="flex space-x-4 py-3">
            <div className="w-2/3">
              <label htmlFor="note">Note: </label>
              <textarea
                id="note"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.note}
                rows="2" cols="20"
                placeholder="Any note?"
                onChange={handleTextChange}
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="category">Category: </label>
              <select
                id="category"
                className="border border-gray-400 px-4 py-1 rounded w-full focus:outline-none focus:border-indigo-700"
                value={editTxn.category}
                onChange={handleTextChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4 justify-center">
            <button type="submit" className="bg-indigo-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-400">
              Submit
            </button>
            <button className="bg-indigo-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-400">
              <Link to={`/transactions/${id}`}>Back</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TxnEditForm;
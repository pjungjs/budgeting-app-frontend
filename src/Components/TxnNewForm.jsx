import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TxnNewForm() {
  const [newId, setNewId] = useState(0);
  const [newTxn, setNewTxn] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from_to: "",
    tag: "",
    note: "",
    category: "expense"
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then(response => {
        setNewId(parseInt(response.data[response.data.length-1].id) + 1);
      })
      .catch(error => console.error("Error: GET", error))
  }, []);

  function handleTextChange(event) {
    setNewTxn({ ...newTxn, id: newId, [event.target.id]: event.target.value });
  };

  function addTxn() {
    axios
      .post(`${API}/transactions`, newTxn)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => console.warn("Error: POST", error))
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTxn();
  }

  return (
    <div className="new-form">
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">*Item Name: </label>
          <input
            id="item_name"
            type="text"
            value={newTxn.item_name}
            onChange={handleTextChange}
            required
          />
        <br />
        <label htmlFor="amount">*Amount: </label>
          <input
            id="amount"
            type="number"
            value={newTxn.amount}
            onChange={handleTextChange}
            required
          />
        <br />
        <label htmlFor="date">*Date: </label>
          <input
            id="date"
            type="date"
            value={newTxn.date}
            pattern="\d{2}-\d{2}-\d{4}"
            min="01-01-1997" max="12-31-2030"
            onChange={handleTextChange}
            required
          />
        <br />
        <label htmlFor="from_to">*From/To: </label>
          <input
            id="from_to"
            type="text"
            value={newTxn.from_to}
            onChange={handleTextChange}
            required
          />
        <br />
        <label htmlFor="tag">Tag: </label>
          <input
            id="tag"
            type="text"
            value={newTxn.tag}
            placeholder="utility, subscription, etc."
            onChange={handleTextChange}
          />
        <br />
        <label htmlFor="note">Note: </label>
          <textarea
            id="note"
            value={newTxn.note}
            rows="2" cols="20"
            placeholder="Any note?"
            onChange={handleTextChange}
          />
        <br />
        <label htmlFor="category">**Category: </label>
          <select
            id="category"
            value={newTxn.category}
            onChange={handleTextChange}
          >
            <option value="expense" defaultValue>Expense </option>
            <option value="income">Income</option>
          </select>
        <br />
        <input type="submit" />
      </form>

      <Link to={`/transactions`}>
        <button>Back</button>
      </Link>
      
      <p>* are required</p>
      <p>** has default value of "Expense"</p>
    </div>
  );
}

export default TxnNewForm;
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
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
    <div className="edit-form">
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name: </label>
          <input
            id="item_name"
            type="text"
            value={editTxn.item_name}
            onChange={handleTextChange}
            required
          />
        <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            type="number"
            value={editTxn.amount}
            onChange={handleTextChange}
            required
          />
        <label htmlFor="date">Date: </label>
          <input
            id="date"
            type="date"
            value={editTxn.date}
            placeholder="mm-dd-yyyy"
            pattern="\d{2}-\d{2}-\d{4}"
            min="01-01-1997" max="12-31-2030"
            onChange={handleTextChange}
            required
          />
        <label htmlFor="from_to">From/To: </label>
          <input
            id="from_to"
            type="text"
            value={editTxn.from_to}
            onChange={handleTextChange}
            required
          />
         <label htmlFor="tag">Tag: </label>
          <input
            id="tag"
            type="text"
            value={editTxn.tag}
            onChange={handleTextChange}
          />
         <label htmlFor="note">Note: </label>
          <textarea
            id="note"
            value={editTxn.note}
            rows="2" cols="20"
            placeholder="Any note?"
            onChange={handleTextChange}
          />
         <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={editTxn.category}
            onChange={handleTextChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        <br />
        <input type="submit" />
      </form>

      <Link to={`/transactions/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TxnEditForm;
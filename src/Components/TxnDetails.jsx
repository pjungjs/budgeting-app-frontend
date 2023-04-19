import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TxnDetails() {
  const [theTxn, setTheTxn] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { item_name, amout, date, from_to, tag, note, category } = theTxn;

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then(response => setTheTxn(response.data))
      .catch(error => console.error("Error: GET", error))
  }, [id]);

  function handleDelete() {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => navigate('/transactions'))
      .catch(error => console.error("Error: DELETE", error))
  }

  return (
    <div className="details">
      <h1>TxnDetails</h1>
      <p>{item_name}</p>
      <p>{amout}</p>
      <p>{date}</p>
      <p>{from_to}</p>
      <p>{tag}</p>
      <p>{note}</p>
      <p>{category}</p>

      <Link to="/transactions">
        <button>Back</button>
      </Link>
      <Link to={`/transactions/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TxnDetails;
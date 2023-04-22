import { Link } from "react-router-dom";
import { properAmount } from "../proper.js";

function NavBar({ balance }) {

  return (
    <nav className="navbar">
      <h1><Link to="/transactions">Bugetting App</Link></h1>
      <p><Link to="/transactions/new">New Transaction</Link></p>
      <p>{"Balance: "}
        <span className={balance > 0 ? "positive" : balance < 0 ? "negative" : null}>
          {properAmount(balance)}
        </span>
      </p>
    </nav>
  )
}

export default NavBar;
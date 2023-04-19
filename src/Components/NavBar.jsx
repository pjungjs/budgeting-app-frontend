import { Link } from "react-router-dom";

function NavBar({ balance }) {
  const balanceInDollars = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <nav className="navbar">
      <h1><Link to="/transactions">Bugetting App</Link></h1>
      <p><Link to="/transactions/new">New Transaction</Link></p>
      <p>Balance:
        <span className={balance > 0 ? "positive" : balance < 0 ? "negative" : null}>
          {" "}
          {balanceInDollars}
        </span>
      </p>
    </nav>
  )
}

export default NavBar;
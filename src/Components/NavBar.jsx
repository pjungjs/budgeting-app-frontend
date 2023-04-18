import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1><Link to="/transactions">Bugetting App</Link></h1>
      <p><Link to="/transactions/new">New Trasaction</Link></p>
    </nav>
  )
}

export default NavBar;
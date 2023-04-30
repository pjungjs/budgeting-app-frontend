import { Link } from "react-router-dom";
import { properAmount } from "../helper/proper.js";

function NavBar({ balance }) {

  return (
    <nav className="bg-indigo-400 text-white p-4 flex space-x-14 text-2xl items-center justify-center">
      <h1 className="hover:underline decoration-1 hover:text-gray-300">
        <Link to="/transactions">View All</Link>
      </h1>
      <p>
        {"Balance: "}
        <span style={{"color": balance > 100 ? "green" : balance > 0 ? "yellow" : "red"}}>
          {properAmount(balance)}
        </span>
      </p>
      <p className="hover:underline decoration-1 hover:text-gray-300">
        <Link to="/transactions/new">Add New</Link>
      </p>
    </nav>
  )
}

export default NavBar;
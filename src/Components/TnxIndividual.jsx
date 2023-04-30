import { Link } from "react-router-dom";
import { properAmount, properDate, properWord } from "../helper/proper.js";

function TxnIndividual({ txn }) {
  const { id, item_name, amount, date, from_to, category, type } = txn;

  return(
    <tr className="hover:bg-gray-100">
      <td className="p-2">{properDate(date)}</td>
      <td className="p-2 hover:underline decoration-1 hover:text-blue-500">
        <Link to={`/transactions/${id}`}>
          {properWord(item_name)}
        </Link>
      </td>
      <td className="p-2">{properWord(from_to)}</td>
      <td className="p-2">{properWord(category)}</td>
      <td className="p-2"
        style={{"color": type.toLowerCase() === "deposit" ? "green" : type.toLowerCase() === "withdrawal" ? "red" : null}}
      >
        {properAmount(parseInt(amount))}
      </td>
    </tr>
  )
}

export default TxnIndividual;
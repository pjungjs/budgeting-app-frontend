import { Link } from "react-router-dom";
import { properAmount, properDate, properWord } from "../proper.js";

function TxnIndividual({ txn }) {
  const { id, item_name, amount, date, from_to, tag, category } = txn;

  return(
    <tr className="hover:bg-gray-100">
      <td className="p-2">{properDate(date)}</td>
      <td className="p-2 hover:underline decoration-1 hover:text-blue-500">
        <Link to={`/transactions/${id}`}>
          {properWord(item_name)}
        </Link>
      </td>
      <td className="p-2">{properWord(from_to)}</td>
      <td className="p-2">{properWord(tag)}</td>
      <td className="p-2"
        style={{"color": category.toLowerCase() === "income" ? "green" : category.toLowerCase() === "expense" ? "red" : null}}
      >
        {properAmount(parseInt(amount))}
      </td>
    </tr>
  )
}

export default TxnIndividual;
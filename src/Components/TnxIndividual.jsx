import { Link } from "react-router-dom";
import { properAmount, properDate, properWord } from "../proper.js";

function TxnIndividual({ txn }) {
  const { id, item_name, amount, date, category } = txn;

  function categoryColor() {
    return category.toLowerCase() === "income"
    ? "positive"
    : category.toLowerCase() === "expense"
      ? "negative"
      : null
  }

  return(
    <tr>
      <td>
        {properDate(date)}
      </td>
      <td>
        <Link to={`/transactions/${id}`}>
          {properWord(item_name)}
        </Link>
      </td>
      <td className={`${categoryColor()}`}>
        {properAmount(parseInt(amount))}
      </td>
    </tr>
  )
}

export default TxnIndividual;
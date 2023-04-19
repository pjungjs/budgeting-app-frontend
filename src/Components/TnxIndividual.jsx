import { Link } from "react-router-dom";

function TxnIndividual({ txn }) {
  const { id, item_name, amount, date, category } = txn;

  function properDate(day) {
    return day;
  }

  function properWord(words) {
    return words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  function properAmount(number) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

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
        {properAmount(amount)}
      </td>
    </tr>
  )
}

export default TxnIndividual;
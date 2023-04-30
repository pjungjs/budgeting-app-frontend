
function calculateAmount(data) {
  let total = 0;
  data.forEach(txn => {
    if (txn.type.toLowerCase() === "deposit") {
      total += parseInt(txn.amount);
    } else if (txn.type.toLowerCase() === "withdrawal") {
      total -= parseInt(txn.amount);
    }
  })
  return total;
}

function properAmount(number) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

function properDate(date) {
  // const newDate = new Date(date).toLocaleDateString("en-US", {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  // return newDate;
  return date;
}

function properWord(words) {
  return words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

module.exports = { calculateAmount, properAmount, properDate, properWord };

function properAmount(number) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

function properDate(day) {
  return day;
}

function properWord(words) {
  return words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

module.exports = { properAmount, properDate, properWord }
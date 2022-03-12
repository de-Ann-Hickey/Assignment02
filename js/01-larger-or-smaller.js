document.write("<h2>Larger or Smaller Game</h2>")
let first = parseInt(prompt('Enter the first number'));
let second = parseInt(prompt('Enter the second number'));
if (first > second) {
    document.write(`${first} is the larger number.`);
} else if (first < second) {
    document.write(`${second} is the larger number.`);
} else {
    document.write(`Numbers are equal.`);
}
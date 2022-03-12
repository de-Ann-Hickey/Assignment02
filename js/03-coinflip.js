// Coinflip game
document.write('<h2>Coin Flip Game</h2>');

let coinFlip = Math.round(Math.random());
let choice = prompt('Enter 1 for heads, 2 for tails.');
// random number is 1 for heads, 0 for tails
if (coinFlip === 1 && choice === '1') {     
    document.write('The flip was heads and you chose heads, you win!');
} else if (coinFlip === 1) {
    document.write('The flip was heads but you chose tails, you lose.');
}
if (coinFlip === 0 && choice === '2') {
    document.write('The flip was tails and you chose tails, you win!');
} else if (coinFlip === 0) {
    document.write('The flip was tails but you chose heads, you lose.');
}

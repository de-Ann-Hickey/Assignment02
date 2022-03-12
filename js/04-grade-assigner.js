//Grade Assigner
let score = parseInt(prompt('Enter a number between 1 and 100'));

if (90 <= score && score <= 100) {
    console.log('You received an A');
} else if (80 <= score && score <= 90) {
    console.log('You received a B');
} else if (70 <= score && score <= 80) {
    console.log('You received a C');
} else if (60 <= score && score <= 70) {
    console.log('You received a D');
} else if (0 <= score && score <= 60) {
    console.log('You received an F');
} else {
    alert('Only numbers between 1 and 100 are accepted.');
}

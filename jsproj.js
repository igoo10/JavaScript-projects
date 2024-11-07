// String Manipulation Functions
function reverseString() {
    const str = prompt("Enter a string to reverse:");
    const reversed = str.split('').reverse().join('');
    document.getElementById('stringResult').innerText = `Reversed String: ${reversed}`;
}

function countCharacters() {
    const str = prompt("Enter a string to count characters:");
    const count = str.length;
    document.getElementById('stringResult').innerText = `Number of Characters: ${count}`;
}

function capitalizeWords() {
    const str = prompt("Enter a sentence to capitalize:");
    const capitalized = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('stringResult').innerText = `Capitalized Sentence: ${capitalized}`;
}

// Array Functions
function findMaximum() {
    const arr = JSON.parse(prompt("Enter an array of numbers (e.g., [1, 2, 3]):"));
    const max = Math.max(...arr);
    document.getElementById('arrayResult').innerText = `Maximum Value: ${max}`;
}

function findMinimum() {
    const arr = JSON.parse(prompt("Enter an array of numbers (e.g., [1, 2, 3]):"));
    const min = Math.min(...arr);
    document.getElementById('arrayResult').innerText = `Minimum Value: ${min}`;
}

function sumArray() {
    const arr = JSON.parse(prompt("Enter an array of numbers (e.g., [1, 2, 3]):"));
    const sum = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById('arrayResult').innerText = `Sum of Array: ${sum}`;
}

function filterArray() {
    const arr = JSON.parse(prompt("Enter an array of numbers (e.g., [1, 2, 3]):"));
    const condition = parseFloat(prompt("Enter a number to filter out elements less than it:"));
    const filtered = arr.filter(num => num >= condition);
    document.getElementById('arrayResult').innerText = `Filtered Array: ${JSON.stringify(filtered)}`;
}

// Mathematical Functions
function calculateFactorial() {
    const num = parseInt(prompt("Enter a number to calculate its factorial:"));
    const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
    document.getElementById('mathResult').innerText = `Factorial: ${factorial(num)}`;
}

function checkPrime() {
    const num = parseInt(prompt("Enter a number to check if it's prime:"));
    const isPrime = (n) => {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };
    document.getElementById('mathResult').innerText = `Is Prime: ${isPrime(num)}`;
}

function generateFibonacci() {
    const terms = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"));
    const fibonacci = (n) => {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    };
    document.getElementById('mathResult').innerText = `Fibonacci Sequence: ${fibonacci(terms).join(', ')}`;
}

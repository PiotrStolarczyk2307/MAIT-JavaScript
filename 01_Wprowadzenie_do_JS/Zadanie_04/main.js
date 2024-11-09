const numbers = [5, 3, 8, 1, 10];

// Funkcja porównująca liczby
function compareNumbers(a, b) {
    return a - b;
}

// Sortowanie i wyświetlanie w konsoli
numbers.sort(compareNumbers);
console.log(numbers);
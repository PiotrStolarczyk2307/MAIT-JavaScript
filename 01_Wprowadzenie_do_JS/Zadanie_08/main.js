function randomEvenOrOdd() {
    // Losowanie liczby z zakresu 1-10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    // Sprawdzenie, czy liczba jest parzysta
    const result = (randomNumber % 2 === 0) ? "parzysta" : "nieparzysta";
    
    return {
        number: randomNumber,
        parity: result
    };
}

const result = randomEvenOrOdd();
console.log(result); // Przykładowy wynik: { number: 7, parity: "nieparzysta" }

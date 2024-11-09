// Przykładowa tablica pizzas
const pizzas = ["Margherita", "Pepperoni", "Funghi", "Hawajska"];

// Wypisywanie elementów tablicy za pomocą pętli for
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

// Wypisywanie elementów tablicy za pomocą metody forEach
pizzas.forEach(function(pizza) {
    console.log(pizza);
});
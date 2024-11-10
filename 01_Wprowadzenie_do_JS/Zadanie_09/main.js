const cake = "🎂";
// Obecna data
const currentDate = new Date();
const currentYear = currentDate.getUTCFullYear();

// Twój rok urodzenia (zmień na swój rok urodzenia)
const birthYear = 1999; // <-- Zmień na swój rok urodzenia

// Pętla, która wypisuje ciasto za każdy rok
for (let year = birthYear; year <= currentYear; year++) {
    console.log(cake, year);
}

console.log(`Minęło ${currentYear - birthYear} lat od twojego urodzenia.`);

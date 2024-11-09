function isPalindrome(str) {
    // Usuwamy wszystkie znaki inne niż litery oraz cyfry i zamieniamy na małe litery
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Sprawdzamy, czy ciąg po odwróceniu jest taki sam
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Przykłady
console.log(isPalindrome("Ala ma kota"));  // false
console.log(isPalindrome("A to kawa kota"));  // true









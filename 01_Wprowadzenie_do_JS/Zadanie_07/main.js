const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function findLongestCityName(cities) {
    let longestCity = "";
    
    cities.forEach(city => {
        if (city.length > longestCity.length) {
            longestCity = city;
        }
    });
    
    return {
        name: longestCity,
        length: longestCity.length
    };
}

const result = findLongestCityName(biggestCities);
console.log(result); // { name: 'São Paulo', length: 9 }

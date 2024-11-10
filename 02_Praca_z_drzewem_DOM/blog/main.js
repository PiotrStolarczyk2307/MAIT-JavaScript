// 1. Wyszukiwanie nagłówka "Life is a journey, stories are our mile markers"
const header = document.querySelector(".about-blog__content-title");
console.log("Nagłówek:", header);

// 2. Wyszukiwanie logo strony
// Zakładamy, że logo to pierwszy element <img> w nawigacji
const logo = document.querySelector("header nav img[alt='logo']");
console.log("Logo:", logo);

// 3. Wyszukiwanie formularza kontaktowego
const contactForm = document.querySelector("footer form");
console.log("Formularz kontaktowy:", contactForm);

// 4. Wyszukiwanie linku kierującego do maila
const emailLink = document.querySelector("a[href^='mailto:']");
console.log("Link do maila:", emailLink);

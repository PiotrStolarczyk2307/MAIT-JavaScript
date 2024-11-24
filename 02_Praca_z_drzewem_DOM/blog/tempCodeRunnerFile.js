//Zadanie 3
// 1. Zmień tekst nagłówka na dowolny wybrany. Wykorzystaj do tego jedną z omawianych metod.
const headerTitle = document.querySelector('.about-blog__content-title');
headerTitle.textContent = "Welcome to the Adventure Blog!";

// 2. Wyświetl w konsoli nazwę tagu loga strony.
const logoTag = document.querySelector('header .navigation-menu img');
console.log('Nazwa tagu loga:', logoTag.tagName);

// 3. Podmień obrazek na dowolne inne wybrane logo.
logoTag.src = 'https://via.placeholder.com/150'; // Wstaw link do nowego logo
logoTag.alt = 'New Logo';

// 4. Wyświetl zawartość HTML formularza.
const form = document.querySelector('footer form');
console.log('HTML formularza:', form.innerHTML);

// 5. Podmień w linku do maila adres na swój lub dowolny wybrany.
const emailLink1 = document.querySelector('footer .e-mail a');
emailLink.href = 'mailto:newemail@example.com';
emailLink.nextElementSibling.textContent = 'newemail@example.com';

// 6. Pobierz do zmiennej klasę nagłówka.
const headerElement = document.querySelector('header');
const headerClass = headerElement.className.trim(); // Zapisz klasy do zmiennej i usuń białe znaki
console.log('Klasa nagłówka:', headerClass);

// 7. Usuń klasę z nagłówka.
headerElement.classList.remove(...headerElement.classList);

// 8. Dodaj pobraną klasę do dowolnego innego elementu tekstowego na stronie.
const textElement = document.querySelector('.promo-article-title');

// Sprawdź, czy zmienna `headerClass` zawiera jakąkolwiek klasę
if (headerClass.length > 0) {
  textElement.classList.add(headerClass);
} else {
  console.warn('Nagłówek nie posiada klas, nic nie zostało dodane.');
}
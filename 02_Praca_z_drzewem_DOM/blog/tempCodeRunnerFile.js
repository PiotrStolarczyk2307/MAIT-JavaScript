document.addEventListener('DOMContentLoaded', function () {
    // Krok 1: Dodajemy element do menu
    const menuList = document.querySelector('.navigation-menu ul');
    
    // Sprawdzenie, czy menuList istnieje
    if (menuList) {
      const newMenuItem = document.createElement('li');
      const newLink = document.createElement('a');
      newLink.href = '#blog';
      newLink.textContent = 'Blog';
      newMenuItem.appendChild(newLink);
      menuList.appendChild(newMenuItem);
    }
  
    // Krok 2: Tworzymy nową sekcję bloga
    const newBlogSection = document.createElement('section');
    newBlogSection.classList.add('blog-section');
    newBlogSection.innerHTML = `
      <h2>Blog</h2>
      <p>Witaj na moim blogu! Tutaj znajdziesz różne artykuły i historie z podróży.</p>
    `;
    
    // Dodajemy sekcję do ciała dokumentu
    document.body.appendChild(newBlogSection);
  });
  
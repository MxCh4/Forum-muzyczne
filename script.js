// 1. Funkcjonalność JS: Rozwijane menu mobilne
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// 2. Funkcjonalność JS: Przełącznik motywu jasny/ciemny
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Zmień motyw';
  } else {
    themeToggleBtn.textContent = '🌙 Zmień motyw';
  }
});
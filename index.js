const menu = document.getElementById('menu');
const logo = document.querySelector("#logo");

logo.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

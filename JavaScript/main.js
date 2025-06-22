const quokka = { isAwesome: true, nodeVersion: process.version };

console.log(quokka);// Função que verifica se o número é par


const container = document.getElementById('cardContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
});
// Referências aos elementos
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Estado atual
let currentIndex = 0;

// Função para atualizar a posição do contêiner
function updateSlidePosition() {
    const offset = -currentIndex * 100; // Calcula a posição com base no slide atual
    slideContainer.style.transform = `translateX(${offset}vw)`;
}

// Evento para botão "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

// Evento para botão "Próximo"
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

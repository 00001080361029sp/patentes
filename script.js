// Referências aos elementos
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Índice do slide atual
let currentIndex = 0;

// Atualiza a posição do contêiner
function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
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

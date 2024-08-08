let carruselInterval; // Variable global para almacenar el intervalo

function initializeCarousel() {
    const breakpoint = 768; // Definir el punto de ruptura para pantallas pequeñas

    function handleResize() {
        const windowWidth = window.innerWidth;

        if (windowWidth <= breakpoint) {
            if (!carruselInterval) { //Inicializa si no está ya en ejecución
                setupCarousel();
            }
        } else {
            if (carruselInterval) { // Parar el carrusel si está en ejecución
                clearInterval(carruselInterval);
                carruselInterval = null; // Limpia la variable del intervalo
                // Opcional: Restablecer la posición del carrusel
                document.querySelector('.carruselInterno').style.transform = 'none';
            }
        }
    }

    function setupCarousel() {
        let index = 0;

        function showNextSlide() {
            const slides = document.querySelectorAll('.carruselItem');
            const totalSlides = slides.length;

            index = (index + 1) % totalSlides;
            const offset = -index * 100;
            document.querySelector('.carruselInterno').style.transform = `translateX(${offset}%)`;
        }

        // Inicia el carrusel
        carruselInterval = setInterval(showNextSlide, 3000);
    }

    handleResize(); // Inicializar al cargar la página
    window.addEventListener('resize', handleResize); // Actualizar en size
}

// Iniciar el carrusel solo cuando la página se carga por primera vez
document.addEventListener('DOMContentLoaded', initializeCarousel);
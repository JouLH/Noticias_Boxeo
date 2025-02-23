// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');

    const checkVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Si la sección está en el viewport
            if (sectionTop < window.innerHeight && sectionBottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidad al cargar la página
});
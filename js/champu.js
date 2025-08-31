'use strict'; // Activo modo estricto para evitar errores básicos y usar buenas prácticas

const logo = document.getElementById('logo');
const nav = document.getElementById('navMenu');

function esMovil() {
    return window.matchMedia("(max-width: 768px)").matches; // Detecto si la pantalla es de móvil
}

if (esMovil()) {
    // En móvil: con un click muestro o escondo el menú sin redirigir
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('visible');
    });
} else {
    // En ordenador: el menú se muestra con el ratón y el logo redirige al inicio
    logo.addEventListener('mouseenter', () => {
        nav.classList.add('visible');
    });
    logo.addEventListener('mouseleave', () => {
        nav.classList.remove('visible');
    });
    nav.addEventListener('mouseenter', () => {
        nav.classList.add('visible');
    });
    nav.addEventListener('mouseleave', () => {
        nav.classList.remove('visible');
    });

    logo.addEventListener('click', (e) => {
        window.location.href = 'index.html'; // Al hacer click me lleva a inicio
    });
}

// Cambio rápido de color cuando se hace click en el botón del footer
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.footer__butto button'); 

    if (boton) {
        boton.addEventListener('click', () => {
            boton.classList.add('cambio-color'); // Cambio de color breve al pulsar

            setTimeout(() => {
                boton.classList.remove('cambio-color'); // Vuelve al color normal tras 200ms
            }, 200); 
        });
    }
});

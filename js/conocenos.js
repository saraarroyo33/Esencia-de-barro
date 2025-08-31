'use strict'

const carrusel = document.querySelector('.main__carrusel'); // Selecciono el contenedor del carrusel
const puntos = document.querySelectorAll('.main__punto'); // Selecciono todos los puntos de navegación

puntos.forEach((punto, i) => { // Recorro todos los puntos con su índice
    punto.addEventListener('click', () => { // Escucho cuando se hace click en un punto
        let posicion = i; // Guardo la posición del punto que se ha clicado
        let operacion = posicion * -20; // Calculo el desplazamiento en porcentaje (cada imagen ocupa 20%)

        carrusel.style.transform = `translateX(${operacion}%)`; // Muevo el carrusel horizontalmente según el punto pulsado

        puntos.forEach((cadaPunto) => cadaPunto.classList.remove('activo')); // Quito la clase 'activo' a todos los puntos
        punto.classList.add('activo'); // Dejo solo activo el punto que se ha clicado
    });
});
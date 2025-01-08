const fireworksContainer = document.getElementById('fireworks-container');

// Generar fuegos artificiales con estrellas
function createFirework() {
    // Crear un contenedor para el fuego artificial
    const firework = document.createElement('div');
    firework.style.position = 'absolute';
    firework.style.top = `${Math.random() * 80 + 10}%`;
    firework.style.left = `${Math.random() * 80 + 10}%`;

    // Número de estrellas por explosión
    const numStars = 50;

    // Colores de las estrellas
    const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#FF33FF', '#33C3FF'];

    // Crear estrellas
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Elegir un color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;

        // Elegir una posición aleatoria para dispersar las estrellas
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 50; // Distancia aleatoria para la dispersión
        star.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        star.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        firework.appendChild(star);
    }

    // Agregar el contenedor del fuego artificial al contenedor principal
    fireworksContainer.appendChild(firework);

    // Eliminar el fuego artificial después de la animación
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

// Generar fuegos artificiales cada 2 segundos
setInterval(createFirework, 2000);

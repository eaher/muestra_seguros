// Efecto de desplazamiento suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Efecto servicios

document.addEventListener("DOMContentLoaded", function() {
    const serviceSection = document.getElementById('servicios');
    const serviceCards = document.querySelectorAll('.service-card');

    serviceSection.addEventListener('mouseenter', function() {
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                if (index % 2 === 0) {
                    card.classList.add('slide-in-left');
                } else {
                    card.classList.add('slide-in-right');
                }
            }, index * 150); // Ajusta el retardo entre las animaciones de las imágenes
        });
    });

    serviceSection.addEventListener('mouseleave', function() {
        serviceCards.forEach((card) => {
            card.classList.remove('slide-in-left', 'slide-in-right');
        });
    });
});


//pantalla de carga 

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Oculta la pantalla de carga
        document.getElementById('pantalla-carga').style.opacity = '0';
        document.getElementById('pantalla-carga').style.transition = 'opacity 0.5s ease';

        // Remueve el contenedor de la pantalla de carga después de la transición
        setTimeout(function() {
            document.getElementById('pantalla-carga').style.display = 'none';
        }, 500);
    }, 3000); // Mantiene la pantalla de carga visible durante 3 segundos
});

//


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
                card.classList.add('slide-in-left');
            }, index * 200); // Ajusta el retardo entre las animaciones para un efecto más suave
        });
    });

    serviceSection.addEventListener('mouseleave', function() {
        serviceCards.forEach((card) => {
            card.classList.remove('slide-in-left');
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

//Navbar

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const inicioSection = document.querySelector('#inicio');

    // Función para manejar el cambio de clase en el navbar
    const handleNavbarBackground = () => {
        const inicioHeight = inicioSection.offsetHeight; // Altura de la sección de inicio
        const scrollPosition = window.scrollY; // Posición actual del scroll

        if (scrollPosition > inicioHeight) {
            navbar.classList.add('navbar-scrolled'); // Añade clase para fondo blanco
        } else {
            navbar.classList.remove('navbar-scrolled'); // Elimina clase para volver a fondo transparente
        }
    };

    // Escucha el evento de scroll
    window.addEventListener('scroll', handleNavbarBackground);
});


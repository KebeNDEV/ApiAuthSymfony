// theme.js

// Esperar a que el DOM esté completamente cargado
window.addEventListener('load', function() {
    // Obtener el botón de cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verificar si el botón existe
    if (!themeToggle) {
        console.error('No se encontró el botón de tema');
        return;
    }

    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Cargar el tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    // Función para activar modo oscuro
    function enableDarkMode() {
        body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    }

    // Función para desactivar modo oscuro
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
    }

    // Toggle del tema
    themeToggle.addEventListener('click', function() {
        console.log('Cambiando tema...'); // Debug
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});

// theme.js

// Seleccionamos el botón y el cuerpo
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Verificamos si el modo oscuro ya está activado desde el almacenamiento local
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('bg-dark', 'text-white');
    toggleButton.innerText = 'Cambiar a Modo Claro';
}

// Función para alternar el tema
toggleButton.addEventListener('click', function() {
    if (body.classList.contains('bg-dark')) {
        // Si ya está en modo oscuro, cambiamos a modo claro
        body.classList.remove('bg-dark', 'text-white');
        toggleButton.innerText = 'Cambiar a Modo Oscuro';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        // Si está en modo claro, cambiamos a modo oscuro
        body.classList.add('bg-dark', 'text-white');
        toggleButton.innerText = 'Cambiar a Modo Claro';
        localStorage.setItem('darkMode', 'enabled');
    }
});

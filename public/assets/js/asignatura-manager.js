document.addEventListener('DOMContentLoaded', function() {
    // Función para agregar una nueva asignatura
    function addAsignaturaForm() {
        const container = document.querySelector('#asignaturas-container');
        if (!container) return;
        
        const prototype = container.dataset.prototype;
        const index = parseInt(container.dataset.index);
        const newForm = prototype.replace(/__name__/g, index);
        container.dataset.index = index + 1;
        
        const div = document.createElement('div');
        div.classList.add('asignatura-item', 'mb-3', 'p-3', 'border', 'rounded', 'position-relative');
        div.innerHTML = newForm;
        
        addDeleteButton(div);
        container.appendChild(div);
    }

    // Función para añadir botón de eliminar
    function addDeleteButton(element) {
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('btn', 'btn-sm', 'btn-custom', 'btn-custom-danger', 'position-absolute', 'top-0', 'end-0', 'm-2');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.onclick = function() {
            element.remove();
        };
        element.appendChild(deleteButton);
    }

    // Inicializar el gestor de asignaturas
    function initAsignaturaManager() {
        const container = document.querySelector('#asignaturas-container');
        if (container) {
            // Agregar botón para nuevas asignaturas
            const addButton = document.createElement('button');
            addButton.type = 'button';
            addButton.classList.add('btn', 'btn-custom', 'btn-custom-primary', 'mb-3');
            addButton.innerHTML = '<i class="fas fa-plus me-2"></i>Añadir asignatura';
            addButton.onclick = addAsignaturaForm;

            container.parentElement.insertBefore(addButton, container);

            // Agregar botones de eliminar a las asignaturas existentes
            document.querySelectorAll('.asignatura-item').forEach(addDeleteButton);
        }
    }

    // Inicializar confirmaciones de eliminación
    function initDeleteConfirmations() {
        document.querySelectorAll('form[data-confirmation]').forEach(form => {
            form.onsubmit = function(e) {
                e.preventDefault();
                if (confirm(this.dataset.confirmation)) {
                    this.submit();
                }
            };
        });
    }

    // Inicializar todas las funcionalidades
    initAsignaturaManager();
    initDeleteConfirmations();
}); 
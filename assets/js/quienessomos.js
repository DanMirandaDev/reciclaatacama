// Función para abrir el modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    // Obtenemos todos los modales
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function openModal(id) {
    const modal = document.getElementById(id);
    if(modal){
        modal.style.display = "block";
        document.body.classList.add('modal-open'); // Bloquea scroll del body
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if(modal){
        modal.style.display = "none";
        document.body.classList.remove('modal-open'); // Desbloquea scroll
    }
}

// Cerrar modal si se hace click fuera del contenido
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    });
}



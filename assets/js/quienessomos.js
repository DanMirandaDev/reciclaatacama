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


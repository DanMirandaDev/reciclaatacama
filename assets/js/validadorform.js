// Abrir y cerrar modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openFormBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Limpiar errores
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
        document.getElementById("nameError").textContent = "El nombre debe tener al menos 3 caracteres";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Correo electrónico inválido";
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").textContent = "El mensaje debe tener al menos 10 caracteres";
        valid = false;
    }

    if (valid) {
        alert("Formulario enviado correctamente!");
        modal.style.display = "none";
        this.reset();
    }
});
// Seleccionar todos los enlaces del sidebar
const sidebarLinks = document.querySelectorAll('.sidebar a');
// Seleccionar todas las secciones
const sections = document.querySelectorAll('.section');

// Función para ocultar todas las secciones
function hideAllSections() {
    sections.forEach(section => section.classList.add('hidden'));
}

// Función para mostrar una sección específica
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
}

// Añadir eventos a los enlaces del sidebar
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ocultar todas las secciones
        hideAllSections();
        
        // Obtener el ID de la sección a mostrar
        const sectionId = this.getAttribute('data-section');
        
        // Mostrar la sección seleccionada
        showSection(sectionId);
    });
});

showSection('proyectos');

//Enviar email
// function sendEmail(e) {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     emailjs.send("", "", {
//         email: email,
//         message: message,
//         reply_to: email,
//     }).then((response) => {
//         showTemporaryAlert("Mensaje enviado con éxito!");
//         document.getElementById('email').value = '';
//         document.getElementById('message').value = '';
//     }).catch((err) => {
//         console.error("Error:", err);
//         showTemporaryAlert("Ocurrió un error al enviar el mensaje.");
//     });
// }

// function showTemporaryAlert(message) {
//     const alertDiv = document.getElementById('alert');
//     alertDiv.textContent = message;
//     alertDiv.classList.remove('hidden');
//     setTimeout(() => {
//         alertDiv.classList.add('hidden');
//     }, 3000);
// }



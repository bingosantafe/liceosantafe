// Función para mostrar la imagen ampliada en el modal
function mostrarImagen(imagen) {
    var modal = document.getElementById('modal');
    var imagenAmpliada = document.getElementById('imagenAmpliada');
    
    // Cambiar la imagen en el modal a la imagen seleccionada
    imagenAmpliada.src = imagen.src;
    
    // Mostrar el modal
    modal.style.display = 'flex'; // Cambiado de "block" a "flex" para centrar el contenido
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('modal');
    
    // Ocultar el modal
    modal.style.display = 'none';
}

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
  }
// Obtener los elementos una sola vez al cargar la página
const elements = {
    inicioBar: document.getElementById('inicioBar'),
    contactoBar: document.getElementById('contactoBar'),
    proyectoBar: document.getElementById('proyectosBar')
  };
  
  // Función genérica para ocultar todos los elementos y mostrar uno específico
  function toggleBar(activeBar) {
    for (let key in elements) {
      if (elements[key] === activeBar) {
        elements[key].classList.remove('hidden');
      } else {
        elements[key].classList.add('hidden');
      }
    }
  }
  
  // Asociar eventos a los enlaces directamente en JavaScript
  document.getElementById('inicio').addEventListener('click', function() {
    toggleBar(elements.inicioBar);
  });
  
  document.getElementById('proyectos').addEventListener('click', function() {
    toggleBar(elements.proyectoBar);
  });
  
  document.getElementById('contacto').addEventListener('click', function() {
    toggleBar(elements.contactoBar);
  });


  // Obtener el botón
const experiencia = document.getElementById('experiencia');
const sam = document.getElementById('sam');
const tecnologias = document.getElementById('tecnologias');
const div = document.getElementById('scrolldiv');

// Agregar un evento de clic al botón
experiencia.addEventListener('click', function() {
  // Hacer scroll a una posición específica en píxeles
  div.scrollTo({
    left: 315, // Reemplaza 500 con la cantidad de píxeles a la que deseas hacer scroll
    behavior: 'smooth' // Opcional: agrega un desplazamiento suave
  });
});

// Agregar un evento de clic al botón
sam.addEventListener('click', function() {
  // Hacer scroll a una posición específica en píxeles
  div.scrollTo({
    left: 5000, // Reemplaza 500 con la cantidad de píxeles a la que deseas hacer scroll
    behavior: 'smooth' // Opcional: agrega un desplazamiento suave
  });
});

tecnologias.addEventListener('click', function() {
  // Hacer scroll a una posición específica en píxeles
  div.scrollTo({
    left: -5000, // Reemplaza 500 con la cantidad de píxeles a la que deseas hacer scroll
    behavior: 'smooth' // Opcional: agrega un desplazamiento suave
  });
});
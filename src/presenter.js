import saludar from "./Saludador.js";


const first = document.querySelector("#nombre");
const second = document.querySelector("#saludar-button");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-saludo");

// Función auxiliar para mostrar el saludo en el div
function mostrarSaludo() {
  const nombreValor = first ? first.value : "";
  // pasamos el string al módulo saludar (que se espera que acepte un string)
  const texto = saludar(nombreValor);
  if (div) {
    div.innerHTML = "<p>" + texto + "</p>";
  }
}

// Listener para el botón-actuador (click)
if (second) {
  second.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarSaludo();
  });
}

// Mantenemos el submit del form por accesibilidad/enter
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    mostrarSaludo();
  });
}




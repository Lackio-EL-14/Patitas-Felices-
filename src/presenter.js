import saludar from "./Saludador.js";


const first = document.querySelector("#nombre");
const second = document.querySelector("#saludar-button");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-saludo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = parseInt(first.value);
  

  div.innerHTML = "<p>" + saludar(Nombre) + "</p>";
});




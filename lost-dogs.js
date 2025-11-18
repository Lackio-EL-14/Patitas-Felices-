const dogs = require('./lost-dogs.json');

const contenedor = document.getElementById('info-animal');
const select = document.getElementById('departamento-select');

function limpiarContenido(){
    contenedor.innerHTML = '';
}

function filtrarPorDepartamento(filtroDepartamento){
    return filtroDepartamento
        ? dogs.filter(perro => perro.departamento === filtroDepartamento)
        : dogs;
}

function colocarEstilosTarjeta(tarjeta){
    tarjeta.style.border = '1px solid #ccc';
        tarjeta.style.padding = '1rem';
        tarjeta.style.marginBottom = '1rem';
        tarjeta.style.backgroundColor = '#f9f9f9';
}

function colocarFiltradosHTML(filtrados){
    filtrados.forEach(perro => {
        const tarjeta = document.createElement('div');
        colocarEstilosTarjeta(tarjeta);
        const nombre = document.createElement('h2');
        nombre.textContent = perro.nombre;
        const departamento = document.createElement('p');
        departamento.textContent = `Departamento: ${perro.departamento}`;
        const raza = document.createElement('p');
        raza.textContent = `Raza: ${perro.raza}`;
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(departamento);
        tarjeta.appendChild(raza);

        contenedor.appendChild(tarjeta);
    });
}
function mostrarPerritos(filtroDepartamento) {
    limpiarContenido();
    const filtrados = filtrarPorDepartamento(filtroDepartamento);
    colocarFiltradosHTML(filtrados);
}

// Mostrar todos al cargar
mostrarPerritos();

// Escuchar cambios en el select
select.addEventListener('change', (e) => {
    mostrarPerritos(e.target.value);
});
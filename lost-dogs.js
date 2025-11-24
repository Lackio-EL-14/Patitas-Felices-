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
    tarjeta.style.borderRadius = '8px'; // Agregado: bordes redondeados
    tarjeta.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'; // Agregado: sombra suave
    tarjeta.style.overflow = 'hidden'; // Para que la imagen respete los bordes
}

function colocarFiltradosHTML(filtrados){
    filtrados.forEach(perro => {
        const tarjeta = document.createElement('div');
        colocarEstilosTarjeta(tarjeta);
        tarjeta.style.padding = '0'; 
        tarjeta.style.overflow = 'hidden';
        const contenedorEncabezado = document.createElement('div');
        contenedorEncabezado.style.position = 'relative'; 
        contenedorEncabezado.style.width = '100%';
        contenedorEncabezado.style.height = '200px'; 
        contenedorEncabezado.style.backgroundColor = '#ccc'; 

        const imagen = document.createElement('img');
        imagen.src = perro.imagen;
        imagen.alt = perro.nombre;
        imagen.style.width = '100%';
        imagen.style.height = '100%';
        imagen.style.objectFit = 'cover'; // Hace que la imagen rellene el cuadro sin deformarse
        imagen.style.display = 'block';

        // 3. EL NOMBRE (Superpuesto)
        const nombre = document.createElement('h2');
        nombre.textContent = perro.nombre;
        
        nombre.style.position = 'absolute';
        nombre.style.bottom = '10px'; 
        nombre.style.left = '20px';
        nombre.style.margin = '0';
        nombre.style.color = 'white'; 
        nombre.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
        nombre.style.fontSize = '2rem';
        nombre.style.zIndex = '10';

        contenedorEncabezado.appendChild(imagen);
        contenedorEncabezado.appendChild(nombre);

        const contenedorInfo = document.createElement('div');
        contenedorInfo.style.padding = '1rem'; 

        const departamento = document.createElement('p');
        departamento.textContent = `Departamento: ${perro.departamento}`;
        
        const raza = document.createElement('p');
        raza.textContent = `Raza: ${perro.raza}`;

        contenedorInfo.appendChild(departamento);
        contenedorInfo.appendChild(raza);
        tarjeta.appendChild(contenedorEncabezado);
        tarjeta.appendChild(contenedorInfo);

        contenedor.appendChild(tarjeta);
    });
}

function mostrarPerritos(filtroDepartamento) {
    limpiarContenido();
    const filtrados = filtrarPorDepartamento(filtroDepartamento);
    colocarFiltradosHTML(filtrados);
}

mostrarPerritos();

select.addEventListener('change', (e) => {
    mostrarPerritos(e.target.value);
});
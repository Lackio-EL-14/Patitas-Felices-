
fetch('./lost-dogs.json')
  .then(response => response.json())
  .then(data => {
    const primerPerrito = data[0];
    const contenedor = document.getElementById('perrito-info');

    // Crear elementos
    const nombre = document.createElement('h2');
    nombre.textContent = primerPerrito.nombre;

    const raza = document.createElement('p');
    raza.textContent = `Raza: ${primerPerrito.raza}`;

    const departamento = document.createElement('p');
    departamento.textContent = `Departamento: ${primerPerrito.departamento}`;

    const id = document.createElement('p');
    id.textContent = `ID: ${primerPerrito.id}`;

    // Insertar en el contenedor
    contenedor.appendChild(nombre);
    contenedor.appendChild(raza);
    contenedor.appendChild(departamento);
    contenedor.appendChild(id);
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

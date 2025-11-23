import obtenerMascotas from './Adopciones.js';

function renderMascotas() {
    // 1. Obtenemos los elementos del DOM
    const listaMascotasContainer = document.getElementById('lista-mascotas');
    const inputBusqueda = document.getElementById('input-busqueda');
    
    // 2. Obtenemos la lista COMPLETA de datos original
    const todasLasMascotas = obtenerMascotas();

    // 3. Definimos una función para mostrar una lista específica
    function mostrar(listaDeDatos) {
        // Limpiamos el contenedor antes de agregar las nuevas tarjetas
        listaMascotasContainer.innerHTML = '';

        // Si no hay resultados, mostramos un mensaje
        if (listaDeDatos.length === 0) {
            listaMascotasContainer.innerHTML = '<p>No se encontraron mascotas con ese nombre :(</p>';
            return;
        }

        listaDeDatos.forEach(mascota => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-mascota');

            tarjeta.innerHTML = `
                <img src="${mascota.imagen}" alt="${mascota.nombre}" width="200" height="150">
                <h3>${mascota.nombre}</h3>
                <a href="./detallesAdopciones.html?id=${mascota.id}" style="text-decoration: none; color: black;"> Ver más</a>
            `;
            
            listaMascotasContainer.appendChild(tarjeta);
        });
    }

    // 4. Mostramos todas las mascotas al cargar la página
    mostrar(todasLasMascotas);

    // 5. Agregamos el evento al buscador
    inputBusqueda.addEventListener('input', (evento) => {
        const textoBusqueda = evento.target.value.toLowerCase();

        // Filtramos la lista original
        const mascotasFiltradas = todasLasMascotas.filter(mascota => 
            mascota.nombre.toLowerCase().includes(textoBusqueda)
        );

        // Volvemos a pintar solo con las filtradas
        mostrar(mascotasFiltradas);
    });
}

export default renderMascotas;
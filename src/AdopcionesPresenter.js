import obtenerMascotas from './Adopciones.js';

function renderMascotas() {
    const listaMascotasContainer = document.getElementById('lista-mascotas');
    const inputBusqueda = document.getElementById('input-busqueda');
    const todasLasMascotas = obtenerMascotas();

    function mostrar(listaDeDatos) {
        listaMascotasContainer.innerHTML = '';
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
    mostrar(todasLasMascotas);
    inputBusqueda.addEventListener('input', (evento) => {
        const textoBusqueda = evento.target.value.toLowerCase();
        const mascotasFiltradas = todasLasMascotas.filter(mascota => 
            mascota.nombre.toLowerCase().includes(textoBusqueda)
        );
        mostrar(mascotasFiltradas);
    });
}

export default renderMascotas;
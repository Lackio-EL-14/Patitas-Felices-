import obtenerMascotas from './Adopciones.js';

function renderMascotas() {
    const listaMascotas = document.getElementById('lista-mascotas');
    const inputBusqueda = document.getElementById('input-busqueda');
    const mascotas = obtenerMascotas();

    // Renderizar todas las mascotas
    function renderListado(filtradas) {
        listaMascotas.innerHTML = ""; // Limpiar
        filtradas.forEach(mascota => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-mascota');
            tarjeta.innerHTML = `
                <img src="${mascota.imagen}" alt="${mascota.nombre}" width="200" height="150">
                <h3>${mascota.nombre}</h3>
                
            `;
            //<a href="/detallesAdopciones.html?id=${mascota.id}" style="text-decoration: none; color: black;">Ver más</a>
            listaMascotas.appendChild(tarjeta);
        });
    }

    // Escuchar el input y filtrar
    inputBusqueda.addEventListener('input', () => {
        const texto = inputBusqueda.value.toLowerCase().trim();
        const filtradas = mascotas.filter(m => m.nombre.toLowerCase().includes(texto));
        renderListado(filtradas);
    });

    // Render inicial
    renderListado(mascotas);
}

export default renderMascotas;

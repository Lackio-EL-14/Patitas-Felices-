import obtenerMascotas from './Adopciones.js';

function renderMascotas() {
    const listaMascotas = document.getElementById('lista-mascotas');
    const mascotas = obtenerMascotas();

    mascotas.forEach(mascota => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-mascota');

        tarjeta.innerHTML = `
            <img src="${mascota.imagen}" alt="${mascota.nombre}" width="200" height="150">
            <h3>${mascota.nombre}</h3>
            <a href="/detalle.html?id=${mascota.id}" style="text-decoration: none; color: black;">Ver más</a>
        `;

        listaMascotas.appendChild(tarjeta);
    });
}

export default renderMascotas;

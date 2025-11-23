import obtenerMascotas from './Adopciones.js';

function colocarMascotasHTML(image, nombre, id) {
    tarjeta.innerHTML = `
            <img src="${image}" alt="${nombre}" width="200" height="150">
            <h3>${mascota.nombre}</h3>
            <a href="./detallesAdopciones.html?id=${id}" style="text-decoration: none; color: black;"> Ver más</a>
            
        `;
}
function renderMascotas() {
    const listaMascotas = document.getElementById('lista-mascotas');
    const mascotas = obtenerMascotas();

    mascotas.forEach(mascota => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-mascota');
        colocarMascotasHTML(mascota.imagen, mascota.nombre, mascota.id);
        listaMascotas.appendChild(tarjeta);
    });
}

export default renderMascotas;

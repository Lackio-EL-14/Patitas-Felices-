import obtenerMascotas from './Adopciones.js';

function renderMascotas() {
    const contenedor = document.getElementById('lista-mascotas');
    const inputBusqueda = document.getElementById('input-busqueda');

    if (!contenedor) return;
    const todasLasMascotas = obtenerMascotas();
    const actualizarVista = (lista) => {
        contenedor.innerHTML = ''; 

        if (lista.length === 0) {
            contenedor.innerHTML = '<p class="mensaje-vacio">No se encontraron mascotas con ese nombre :(</p>';
            return;
        }
        const fragmento = document.createDocumentFragment();

        lista.forEach(mascota => {
            const tarjetaNode = crearTarjetaHTML(mascota);
            fragmento.appendChild(tarjetaNode);
        });

        contenedor.appendChild(fragmento);
    };
    actualizarVista(todasLasMascotas);

    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase().trim();
            
            const filtradas = todasLasMascotas.filter(mascota => 
                mascota.nombre.toLowerCase().includes(termino)
            );
            
            actualizarVista(filtradas);
        });
    }
}

function crearTarjetaHTML({ imagen, nombre, id }) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-mascota');

    tarjeta.innerHTML = `
        <img src="${imagen}" alt="${nombre}" loading="lazy" class="img-mascota">
        <h3>${nombre}</h3>
        <a href="./detallesAdopciones.html?id=${id}" class="btn-ver-mas">Ver más</a>
    `;

    return tarjeta;
}

export default renderMascotas;
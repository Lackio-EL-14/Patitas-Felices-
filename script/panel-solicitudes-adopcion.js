import {getSolicitudes, getDetalleSolicitud, aprobarSolicitud, rechazarSolicitud} from "../src/Ejemplos base/Services/solicitudesService.js";

document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.getElementById('lista-solicitudes');
    
    try {
        const solicitudes = await getSolicitudes();
        
        if (!solicitudes || solicitudes.length === 0) {
            contenedor.innerHTML = '<p>No hay solicitudes registradas.</p>';
            return;
        }
        contenedor.innerHTML = '';       

        const fragmento = document.createDocumentFragment();

        solicitudes.forEach(sol => {
            const tarjeta = crearTarjetaSolicitud(sol);
            fragmento.appendChild(tarjeta);
        });

        contenedor.appendChild(fragmento);

    } catch (error) {
        console.error(error);
        contenedor.innerHTML = 'Error al cargar solicitudes.';
    }
});


function crearTarjetaSolicitud(sol) {
    const div = document.createElement('div');
    div.className = 'solicitud';
    div.dataset.cy = `solicitud-${sol.id}`;


    div.innerHTML = `
        <p>Adoptante: ${escaparHtml(sol.nombre)}</p>
        <p>Mascota: ${escaparHtml(sol.mascota)}</p>
    `;


    const pEstado = document.createElement('p');
    pEstado.dataset.cy = `estado-${sol.id}`;
    pEstado.textContent = 'Estado: Pendiente';
    div.appendChild(pEstado);

    // Botones
    const btnDetalle = document.createElement('button');
    btnDetalle.textContent = 'Ver Detalle';
    btnDetalle.dataset.cy = `btn-detalle-${sol.id}`;
    
    const btnAprobar = document.createElement('button');
    btnAprobar.textContent = 'Aprobar';
    btnAprobar.dataset.cy = `btn-aprobar-${sol.id}`;
    
    const btnRechazar = document.createElement('button');
    btnRechazar.textContent = 'Rechazar';
    btnRechazar.dataset.cy = `btn-rechazar-${sol.id}`;



    btnDetalle.addEventListener('click', async () => {
        const detalle = await getDetalleSolicitud(sol.id);
        mostrarModal(detalle);
    });


    btnAprobar.addEventListener('click', () => 
        manejarCambioEstado(sol.id, aprobarSolicitud, 'Aprobada', pEstado, btnAprobar, btnRechazar)
    );

    btnRechazar.addEventListener('click', () => 
        manejarCambioEstado(sol.id, rechazarSolicitud, 'Rechazada', pEstado, btnAprobar, btnRechazar)
    );

    div.append(btnDetalle, btnAprobar, btnRechazar);
    return div;
}


async function manejarCambioEstado(id, servicioFn, textoNuevoEstado, elEstado, btnAprobar, btnRechazar) {
    try {
        await servicioFn(id);
        elEstado.textContent = `Estado: ${textoNuevoEstado}`;
        btnAprobar.disabled = true;
        btnRechazar.disabled = true;
    } catch (error) {
        alert(`Error al intentar cambiar el estado a ${textoNuevoEstado}.`);
    }
}


function mostrarModal(detalle) {
    let modal = document.getElementById('modal-detalle');

    if (!modal) {
        modal = crearEstructuraModal();
        document.body.appendChild(modal);
    }

    document.getElementById('modal-email').textContent = `Email: ${detalle.email}`;
    document.getElementById('modal-motivo').textContent = `Motivo: ${detalle.motivo}`;
    modal.style.display = 'flex';
}

function crearEstructuraModal() {
    const modal = document.createElement('div');
    modal.id = 'modal-detalle';
    modal.className = 'modal-overlay'; 
    
    Object.assign(modal.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        background: 'rgba(0, 0, 0, 0.6)', display: 'none', 
        justifyContent: 'center', alignItems: 'center', zIndex: '1000'
    });

    modal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px; width: 300px; text-align: center;">
            <h3>Detalle de la Solicitud</h3>
            <p id="modal-email"></p>
            <p id="modal-motivo"></p>
            <button id="cerrar-modal">Cerrar</button>
        </div>
    `;

    modal.querySelector('#cerrar-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    return modal;
}


function escaparHtml(text) {
    if (!text) return text;
    return text.replace(/[&<>"']/g, function(m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
}
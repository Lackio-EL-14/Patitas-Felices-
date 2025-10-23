import { getSolicitudes, getDetalleSolicitud, aprobarSolicitud, rechazarSolicitud } from "../src/Ejemplos base/solicitudesService.js";

document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('lista-solicitudes');
  try {
    const solicitudes = await getSolicitudes();
    if (!solicitudes || solicitudes.length === 0) {
      contenedor.innerHTML = '<p>No hay solicitudes registradas.</p>';
      return;
    }
    renderSolicitudes(solicitudes, contenedor);
  } catch (error) {
    contenedor.innerHTML = 'Error al cargar solicitudes.';
  }
});


function renderSolicitudes(solicitudes, contenedor) {
  contenedor.innerHTML = ''; 

  solicitudes.forEach(sol => {
    contenedor.innerHTML += `
      <div class="solicitud" data-cy="solicitud-${sol.id}">
        <p>Adoptante: ${sol.nombre}</p>
        <p>Mascota: ${sol.mascota}</p>
        <p data-cy="estado-${sol.id}">Estado: Pendiente</p>
        <button data-cy="btn-detalle-${sol.id}">Ver Detalle</button>
        <button data-cy="btn-aprobar-${sol.id}">Aprobar</button>
        <button data-cy="btn-rechazar-${sol.id}">Rechazar</button>
      </div>
    `;
  });

   solicitudes.forEach(sol => {
    document.querySelector(`[data-cy="btn-detalle-${sol.id}"]`).addEventListener('click', async () => {
      const detalle = await getDetalleSolicitud(sol.id);
      mostrarModal(detalle);
    });

    document.querySelector(`[data-cy="btn-aprobar-${sol.id}"]`).addEventListener('click', async (e) => {
      const btnAprobar = e.target;
      const btnRechazar = document.querySelector(`[data-cy="btn-rechazar-${sol.id}"]`);
      const estado = document.querySelector(`[data-cy="estado-${sol.id}"]`);

      try {
        await aprobarSolicitud(sol.id);
        btnAprobar.disabled = true;
        btnRechazar.disabled = true;
        if (estado) estado.textContent = 'Estado: Aprobada';
      } catch {
        alert('Error al aprobar la solicitud.');
      }
    });
  });
}

function mostrarModal(detalle) {
  let modal = document.getElementById('modal-detalle');

  // Crear modal si no existe aún
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-detalle';
    modal.classList.add('modal');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.6)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    modal.innerHTML = `
      <div id="modal-contenido" style="
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 300px;
        text-align: center;
      ">
        <h3>Detalle de la Solicitud</h3>
        <p id="modal-email"></p>
        <p id="modal-motivo"></p>
        <button id="cerrar-modal">Cerrar</button>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#cerrar-modal').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.querySelector('#modal-email').textContent = `Email: ${detalle.email}`;
  modal.querySelector('#modal-motivo').textContent = `Motivo: ${detalle.motivo}`;
  modal.style.display = 'flex';
}

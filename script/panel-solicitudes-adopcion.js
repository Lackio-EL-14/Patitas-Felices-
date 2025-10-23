import { getSolicitudes, getDetalleSolicitud } from "../src/Ejemplos base/solicitudesService.js";

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
        <button data-cy="btn-detalle-${sol.id}">Ver Detalle</button>
        <button data-cy="btn-aprobar-${sol.id}">Aprobar</button>
        <button data-cy="btn-rechazar-${sol.id}">Rechazar</button>
      </div>
    `;
  });
}
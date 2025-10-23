

async function getSolicitudes() {
    try {
        const response =  await fetch('/api/solicitudes');
        const data = await response.json();
        return data;
    } catch (error) {
        if (process.env.JEST_WORKER_ID !== undefined) {
        throw error;
        }
       console.warn('Usando datos mock porque el backend no está disponible.');
    return [
        { id: 1, nombre: 'Juan Perez', mascota: 'Fido', estado: 'Pendiente' },
        { id: 2, nombre: 'Ana Gomez', mascota: 'Misu', estado: 'Pendiente' },
        { id: 3, nombre: 'Luis Martinez', mascota: 'Rex', estado: 'Aprobada' },
        { id: 4, nombre: 'Maria Lopez', mascota: 'Luna', estado: 'Rechazada' },
        { id: 5, nombre: 'Carlos Sanchez', mascota: 'Max', estado: 'Pendiente' }
    ];
  }
}

async function getDetalleSolicitud(id) {
  try {
    const response = await fetch(`/api/solicitudes/${id}`);
    if (!response.ok) throw new Error('Error en la solicitud');
    return response.json();
  } catch (error) {
    if (process.env.JEST_WORKER_ID !== undefined) {
      throw error;
    }

  }

}

export { getSolicitudes, getDetalleSolicitud };
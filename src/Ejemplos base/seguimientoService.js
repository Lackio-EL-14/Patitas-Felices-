

export async function subirFoto(archivo) {
  return { url: URL.createObjectURL(archivo) };
}


const UMBRAL_DIAS_RECORDATORIO = 0.0001;

export function verificarRecordatorio() {
  const recordatorioEl = document.getElementById('recordatorio');
  const ultimaPublicacionStr = localStorage.getItem('ultimaPublicacion');


  if (!ultimaPublicacionStr || !recordatorioEl) {
    return;
  }

  const ultimaPublicacion = new Date(ultimaPublicacionStr);
  const hoy = new Date();

  const diferenciaMs = hoy - ultimaPublicacion;
  const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);

  if (diferenciaDias > UMBRAL_DIAS_RECORDATORIO) {
    recordatorioEl.style.display = 'block'; 
  }
}

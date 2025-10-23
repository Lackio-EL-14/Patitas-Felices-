import { verificarRecordatorio, subirFoto } from "../src/Ejemplos base/seguimientoService.js";


if (window.Cypress) {
  window.subirFoto = subirFoto;
}



document.addEventListener('DOMContentLoaded', () => {
 
  const inputFoto = document.getElementById('input-foto');
  const btnSubir = document.getElementById('btn-subir');
  const contenedor = document.getElementById('contenedor-fotos');
  const inputDescripcion = document.getElementById('input-descripcion');
  const recordatorioEl = document.getElementById('recordatorio');


  btnSubir.addEventListener('click', async () => {
    const archivo = inputFoto.files[0];
    const descripcion = inputDescripcion.value;

    if (!archivo || descripcion.trim() === '') {
      return alert('Por favor, añade una foto y una descripción.');
    }

    const imagen = window.Cypress
      ? await window.subirFoto(archivo)
      : await subirFoto(archivo);

    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('data-cy', 'seguimiento-item');
    itemDiv.style.border = '1px solid #ccc';
    itemDiv.style.padding = '10px';
    itemDiv.style.margin = '10px 0';

    const imgEl = document.createElement('img');
    imgEl.src = imagen.url;
    imgEl.alt = 'Foto subida';
    imgEl.style.width = '200px';
    itemDiv.appendChild(imgEl);

    const descEl = document.createElement('p');
    descEl.textContent = descripcion;
    itemDiv.appendChild(descEl);

    contenedor.appendChild(itemDiv);

    localStorage.setItem('ultimaPublicacion', new Date().toISOString());

  
    if (recordatorioEl) {
      recordatorioEl.style.display = 'none';
    }

    inputFoto.value = '';
    inputDescripcion.value = '';
  });

  verificarRecordatorio();
});
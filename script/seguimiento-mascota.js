
export async function subirFoto(archivo) {
  return { url: URL.createObjectURL(archivo) };
}


if (window.Cypress) {
  window.subirFoto = subirFoto;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input-foto');
  const btnSubir = document.getElementById('btn-subir');
  const contenedor = document.getElementById('contenedor-fotos');

  btnSubir.addEventListener('click', async () => {
    const archivo = input.files[0];
    if (!archivo) return alert('Selecciona una imagen primero');


    const imagen = window.Cypress
      ? await window.subirFoto(archivo)
      : await subirFoto(archivo);
 
    const imgEl = document.createElement('img');
    imgEl.src = imagen.url;
    imgEl.alt = 'Foto subida';
    imgEl.style.width = '200px';
    imgEl.style.height = '200px';
    imgEl.style.objectFit = 'cover';
    imgEl.style.margin = '10px';
    contenedor.appendChild(imgEl);
  });
});
import obtenerMascotas  from "./mascotas";

export const cargarMascotas = () => {
  const contenedor = document.getElementById('lista-mascotas');
  const mascotas = obtenerMascotas();

  mascotas.forEach(mascota => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-mascota');
    
    tarjeta.innerHTML = `
      <img src="${mascota.imagen}" alt="${mascota.nombre}" />
      <h3>${mascota.nombre}</h3>
    `;
    contenedor.appendChild(tarjeta);
  });
};
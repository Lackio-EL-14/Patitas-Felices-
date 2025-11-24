export default class Refugio {
  constructor(id, nombre, departamento, mascotas, capacidad) {
    this.id = id;
    this.nombre = nombre;
    this.departamento = departamento;
    this.mascotas = mascotas;
    this.capacidad = capacidad;
  }
  obtenerMascotas() {
    return this.mascotas;
  }
}
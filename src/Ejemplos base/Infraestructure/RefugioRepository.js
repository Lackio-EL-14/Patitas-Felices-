import Refugio from "../Domain/Refugio";

export default class RefugioRepository {
  constructor() {
    this.refugios = [
      new Refugio(1, 'Refugio Huellitas Felices', 'La Paz', ['Firulais', 'Perrita', 'Maxito'], 3),
      new Refugio(2, 'Albergue Patitas Sin Hogar', 'Cochabamba', ['Luna', 'Rocky'], 2),
      new Refugio(3, 'Fundación Amigos de 4 Patas', 'Santa Cruz', ['Molly', 'Toby', 'Nala', 'Simba'], 4),
      new Refugio(4, 'Refugio Esperanza Animal', 'La Paz', ['Coco', 'Bella'], 2),
      new Refugio(5, 'Casa Hogar Animalitos', 'Tarija', ['Chispa', 'Tommy', 'Michi'], 3),
      new Refugio(6, 'Refugio Nuevo Amanecer', 'Chuquisaca', ['Bruno', 'Akira'], 2),
      new Refugio(7, 'Albergue Vida Animal', 'Oruro', ['Daisy', 'Zeus'], 2),
      new Refugio(8, 'Fundación Patitas Alegres', 'Potosí', ['Chloe', 'Leo'], 2),
      new Refugio(9, 'Refugio Corazón de Animal', 'Beni', ['Sasha', 'Ginger'], 2),
      new Refugio(10, 'Casa de Rescate Animal', 'Pando', ['Oreo', 'Loki'], 2)
    ]; 
  }

  obtenerTodos() {
    return this.refugios;
  }
  obtenerDepartamentos() {
    const departamentos = this.refugios.map(refugio => refugio.departamento);
    return [...new Set(departamentos)];
  }
}
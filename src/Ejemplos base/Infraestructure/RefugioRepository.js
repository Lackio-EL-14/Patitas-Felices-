import Refugio from "../Domain/Refugio";

export default class RefugioRepository {
  constructor() {
    this.refugios = [
      new Refugio(1, 'Refugio Huellitas Felices', 'La Paz', ['Max', 'Luna', 'Rocky'], 3),
      new Refugio(2, 'Albergue Patitas Sin Hogar', 'Cochabamba', ['Bella', 'Toby'], 2),
      new Refugio(3, 'Fundación Amigos de 4 Patas', 'Santa Cruz', ['Charlie', 'Daisy', 'Milo', 'Coco'], 4),
      new Refugio(4, 'Refugio Esperanza Animal', 'La Paz', ['Buddy', 'Lola'], 2),
      new Refugio(5, 'Casa Hogar Animalitos', 'Tarija', ['Rex', 'Nina', 'Zeus'], 3),
      new Refugio(6, 'Refugio Nuevo Amanecer', 'Chuquisaca', ['Simba', 'Mia'], 2),
      new Refugio(7, 'Albergue Vida Animal', 'Oruro', ['Luna', 'Max'], 2),
      new Refugio(8, 'Fundación Patitas Alegres', 'Potosí', ['Rocky', 'Bella'], 2),
      new Refugio(9, 'Refugio Corazón de Animal', 'Beni', ['Coco', 'Daisy'], 2),
      new Refugio(10, 'Casa de Rescate Animal', 'Pando', ['Charlie', 'Lola'], 2)
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
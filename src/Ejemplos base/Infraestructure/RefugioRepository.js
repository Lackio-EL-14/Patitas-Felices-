import Refugio from "../Domain/Refugio";

export default class RefugioRepository {
  constructor() {
    this.refugios = [
      new Refugio(1, 'Refugio Huellitas Felices', 'La Paz', ['Max', 'Luna', 'Rocky'], 3),
      new Refugio(2, 'Albergue Patitas Sin Hogar', 'Cochabamba', ['Bella', 'Toby'], 2),
      new Refugio(3, 'Fundación Amigos de 4 Patas', 'Santa Cruz', ['Charlie', 'Daisy', 'Milo', 'Coco'], 4),
      new Refugio(4, 'Refugio Esperanza Animal', 'La Paz', ['Buddy', 'Lola'], 2),
      new Refugio(5, 'Casa Hogar Animalitos', 'Tarija', ['Rex', 'Nina', 'Zeus'], 3)
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
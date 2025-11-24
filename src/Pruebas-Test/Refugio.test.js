import Refugio from "../Ejemplos base/Domain/Refugio"

describe('Refugio', () => {
  it('debe crear un refugio con sus propiedades básicas', () => {
    const refugio = new Refugio(1, 'Refugio Huellitas', 'La Paz', ['Max', 'Luna'], 2);
    
    expect(refugio.id).toBe(1);
    expect(refugio.nombre).toBe('Refugio Huellitas');
    expect(refugio.departamento).toBe('La Paz');
    expect(refugio.mascotas).toEqual(['Max', 'Luna']);
    expect(refugio.capacidad).toBe(2);
  });
    it('debe retornar la lista de mascotas', () => {
    const refugio = new Refugio(1, 'Refugio Huellitas', 'La Paz', ['Max', 'Luna', 'Rocky'], 3);
    
    expect(refugio.obtenerMascotas()).toEqual(['Max', 'Luna', 'Rocky']);
    expect(refugio.obtenerMascotas().length).toBe(3);
  });

  it('debe retornar array vacío si no tiene mascotas', () => {
    const refugio = new Refugio(1, 'Refugio Vacío', 'La Paz', [], 0);
    
    expect(refugio.obtenerMascotas()).toEqual([]);
    expect(refugio.obtenerMascotas().length).toBe(0);
  });
});